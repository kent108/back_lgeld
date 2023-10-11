import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { admin, name, firstname, mail, password, phone } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // création d'une entité user
    const user = this.userRepository.create({
      admin,
      name,
      firstname,
      mail,
      password: hashedPassword,
      phone,
    });

    try {
      // enregistrement de l'entité user
      const createdUser = await this.userRepository.save(user);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { mail, password } = loginDto;

    // récupération de l'utilisateur
    const user = await this.userRepository.findOneBy({ mail });

    // vérification du mot de passe
    if (user && (await bcrypt.compare(password, user.password))) {
      delete user.password;
      return user;
    } else {
      return null;
    }
  }
}
