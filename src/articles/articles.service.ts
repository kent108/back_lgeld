import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
) {}

  async create(createArticleDto: CreateArticleDto) {
    const newArticle = this.articleRepository.create(createArticleDto); // Création d'un nouveau article
    await this.articleRepository.save(newArticle); // Sauvegarde du article dans la BDD
    return newArticle;  // On renvoie le article créé
  }

  async findAll() {
    const allArticles = await this.articleRepository.find(); // Récupération de tous les articles
    return allArticles; // On renvoie les articles trouvés
  }

  async findOne(id: number) {
    const oneArticle = await this.articleRepository.findOneBy({ id: id }); // Récupération d'un article grâce à son ID
    return oneArticle; // On renvoie le article trouvé
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const articleToUpdate = await this.findOne(id); // On récupère le article à modifier
    const updatedArticle = Object.assign(articleToUpdate, updateArticleDto); // On fusionne les données
    await this.articleRepository.save(updatedArticle); // On sauvegarde les données mises à jour
  }

  async remove(id: number) {
    const articleToRemove = await this.findOne(id); // On récupère le article à supprimer
    return this.articleRepository.remove(articleToRemove); // On supprime le article
  }
}
