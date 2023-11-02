import { Injectable, StreamableFile } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream, unlinkSync } from 'fs';
import { join } from 'path';

@Injectable()
export class PicturesService {
  constructor(
    @InjectRepository(Picture)
    private readonly pictureRepository: Repository<Picture>,
  ) {}

  // async create(createPictureDto: CreatePictureDto) {
  //   const newpicture = this.pictureRepository.create(createPictureDto); // Création d'un nouveau picture
  //   await this.pictureRepository.save(newpicture); // Sauvegarde du picture dans la BDD
  //   return newpicture; // On renvoie le picture créé
  // }

  async findAll() {
    const allPictures = await this.pictureRepository.find(); // Récupération de tous les pictures
    return allPictures; // On renvoie les pictures trouvés
  }

  async findOne(id: number) {
    const onePicture = await this.pictureRepository.findOneBy({ id: id }); // Récupération d'un picture grâce à son ID
    return onePicture; // On renvoie le picture trouvé
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    const pictureToUpdate = await this.findOne(id); // On récupère le picture à modifier
    const updatedPicture = Object.assign(pictureToUpdate, updatePictureDto); // On fusionne les données
    await this.pictureRepository.save(updatedPicture); // On sauvegarde les données mises à jour
  }

  // async remove(id: number) {
  //   const pictureToRemove = await this.findOne(id); // On récupère le picture à supprimer
  //   return this.pictureRepository.remove(pictureToRemove); // On supprime le picture
  // }

  async getImage(id: number, res): Promise<StreamableFile> {
    const result = await this.pictureRepository.find();
    const lastResult = result[result.length - 1];

    const pictureFile = createReadStream(
      join(process.cwd(), 'uploads', lastResult.name),
    );
    console.log(process.cwd());

    res.set('Content-Type', lastResult.mimetype);

    return new StreamableFile(pictureFile);
  }

  create(image: Express.Multer.File) {
    console.log(image);

    return this.pictureRepository.save({
      name: image.filename,
      mimetype: image.mimetype,
      size: image.size,
      description: image.originalname,
    });
  }

  remove(id: number) {
    unlinkSync(
      join(process.cwd(), 'uploads', '0b39219a4b3b480739788c3d61717bec'),
    );
    return {};
    
  }
}
