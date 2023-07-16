import { Injectable } from '@nestjs/common';
import { PublicationsRepository } from './repository/publication.repository';
import { PublicationDTO } from './dto/publication.dto';

@Injectable()

export class PublicationsService {

  constructor(
    private readonly publicationsRepository: PublicationsRepository,
  ) {}

  createPublication(body: PublicationDTO, userId: number) {
    return this.publicationsRepository.createPublication(userId, body);
  }

  getPublications(userId: number) {
    return this.publicationsRepository.getPublications(userId);
  }
}
