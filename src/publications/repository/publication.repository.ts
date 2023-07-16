import { Publication } from '@prisma/client';
import { PublicationDTO } from '../dto/publication.dto';

export abstract class PublicationsRepository {
  abstract createPublication(userId: number, data: PublicationDTO): Promise<Publication>;
  abstract getPublications(id: number): Promise<Publication[]>;
}