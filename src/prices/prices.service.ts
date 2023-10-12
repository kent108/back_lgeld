import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(Price)
    private priceRepository: Repository<Price>,
  ) {}

  async create(createPriceDto: CreatePriceDto) {
    const newprice = this.priceRepository.create(createPriceDto); // Création d'un nouveau price
    await this.priceRepository.save(newprice); // Sauvegarde du price dans la BDD
    return newprice; // On renvoie le price créé
  }

  async findAll() {
    const allPrices = await this.priceRepository.find(); // Récupération de tous les prices
    return allPrices; // On renvoie les prices trouvés
  }

  async findOne(id: number) {
    const onePrice = await this.priceRepository.findOneBy({ id: id }); // Récupération d'un price grâce à son ID
    return onePrice; // On renvoie le price trouvé
  }

  async findPrice(article_id: number, format_id: number): Promise<Price> {
    const price = await this.priceRepository.findOne({
      where: { article_id, format_id },
    });  
    return price;
  }

  async update(id: number, updatePriceDto: UpdatePriceDto) {
    const priceToUpdate = await this.findOne(id); // On récupère le price à modifier
    const updatedPrice = Object.assign(priceToUpdate, updatePriceDto); // On fusionne les données
    await this.priceRepository.save(updatedPrice); // On sauvegarde les données mises à jour
  }

  async remove(id: number) {
    const priceToRemove = await this.findOne(id); // On récupère le price à supprimer
    return this.priceRepository.remove(priceToRemove); // On supprime le price
  }
}
