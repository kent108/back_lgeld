import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
  

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto); // Création d'un nouvel utilisateur
    const user = await this.userRepository.save(newUser); // Sauvegarde de l'utilisateur dans la BDD
    return user; // On renvoie l'utilisateur créé
  }

  async findAll() {
    const users = await this.userRepository.find(); // Récupération de tous les utilisateurs
    return users; // On renvoie les utilisateurs trouvés
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id: id }); // Récupération d'un utilisateur grâce à son ID
    return user; // On renvoie l'utilisateur trouvé
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.userRepository.findOneBy({ id: id }); // On récupère l'utilisateur à modifier
    const updatedUser = this.userRepository.merge(userToUpdate, updateUserDto); // On fusionne les données
    const user = await this.userRepository.save(updatedUser); // On sauvegarde les données mises à jour
    return user; // On renvoie l'utilisateur mis à jour
  }

  async remove(id: number) {
    const userToRemove = await  this.userRepository.findOneBy({ id: id }); // On récupère l'utilisateur à supprimer
    const user = await this.userRepository.remove(userToRemove); // On supprime l'utilisateur
    return user; // On renvoie l'utilisateur supprimé

  }
}
