import { Injectable } from '@nestjs/common';
import { CreateFormatDto } from './dto/create-format.dto';
import { UpdateFormatDto } from './dto/update-format.dto';
import { Format } from './entities/format.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FormatsService {

  constructor(
    @InjectRepository(Format)
    private formatRepository: Repository<Format>,
  ) { }

  async create(createFormatDto: CreateFormatDto) {
    const newformat = this.formatRepository.create(createFormatDto); // Création d'un nouveau format
    await this.formatRepository.save(newformat); // Sauvegarde du format dans la BDD
    return newformat;  // On renvoie le format créé
  }

  async findAll() {
    const allFormats = await this.formatRepository.find(); // Récupération de tous les formats
    return allFormats; // On renvoie les formats trouvés
  }

  async findOne(id: number) {
    const oneFormat = await this.formatRepository.findOneBy({ id: id }); // Récupération d'un format grâce à son ID
    return oneFormat; // On renvoie le format trouvé
  }

  async update(id: number, updateFormatDto: UpdateFormatDto) {
    const formatToUpdate = await this.findOne(id); // On récupère le format à modifier
    const updatedFormat = Object.assign(formatToUpdate, updateFormatDto); // On fusionne les données
    await this.formatRepository.save(updatedFormat); // On sauvegarde les données mises à jour
  }

  async remove(id: number) {
    const formatToRemove = await this.findOne(id); // On récupère le format à supprimer
    return this.formatRepository.remove(formatToRemove); // On supprime le format
  }
}
