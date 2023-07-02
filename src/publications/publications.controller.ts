import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './entity/Publication';

@Controller()
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post('publication')
  createPublication(@Body() body: Publication) {
    return this.publicationsService.createPublication(body);
  }

  @Get('publications')
  getPublications(): any {
    return this.publicationsService.getPublications();
  }
}
