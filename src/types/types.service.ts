import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypesService {

  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>,
  ) { }
  
  async create(createTypeDto: CreateTypeDto) {
    const newtype = this.typeRepository.create(createTypeDto); // Création d'un nouveau type
    await this.typeRepository.save(newtype); // Sauvegarde du type dans la BDD
    return newtype;  // On renvoie le type créé
  }

 async findAll() {
   const allTypes = await this.typeRepository.find(); // Récupération de tous les types
    return allTypes; // On renvoie les types trouvés
  }

  async findOne(id: number) {
    const oneType = await this.typeRepository.findOneBy({ id: id }); // Récupération d'un type grâce à son ID
    return oneType; // On renvoie le type trouvé
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    const typeToUpdate = await this.findOne(id); // On récupère le type à modifier 
    const updatedType = Object.assign(typeToUpdate, updateTypeDto); // On fusionne les données
    await this.typeRepository.save(updatedType); // On sauvegarde les données mises à jour
  }

  async remove(id: number) {
    const typeToRemove = await this.findOne(id); // On récupère le type à supprimer
    return this.typeRepository.remove(typeToRemove); // On supprime le type

  }
}
