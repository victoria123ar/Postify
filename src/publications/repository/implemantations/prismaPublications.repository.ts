import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublicationsRepository } from '../publication.repository';
import { PublicationDTO } from 'src/publications/dto/publication.dto';

@Injectable()
export class PrismaPublicationsRepository implements PublicationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPublication(userId: number, data: PublicationDTO) {
      return await this.prisma.publication.create({ data: {
          userId,
          image: data.image,
          title: data.title,
          text: data.text,
          dateToPublish: data.dateToPublish,
          socialMedia: data.socialMedia
      } })
  }

  async getPublications(id: number) {
    return await this.prisma.publication.findMany({where: { userId: id}});
  }
}