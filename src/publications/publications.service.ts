import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';

@Injectable()
export class PublicationsService {
  publications = [];

  createPublication(body: Publication) {
    const publication = new Publication(
      body.image,
      body.title,
      body.text,
      body.dateToPublish,
      body.published,
      body.socialMedia,
    );
    return this.publications.push(publication);
  }

  getPublications() {
    return this.publications;
  }
}
