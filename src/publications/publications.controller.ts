import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationDTO } from './dto/publication.dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { User } from '@prisma/client';
import { UserRequest } from 'src/auth/decorators/user.decorators';

@Controller()
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(AuthGuard)
  @Post('publication')
  createPublication(@Body() body: PublicationDTO, @UserRequest() user: User) {
    const userId = user.id;
    return this.publicationsService.createPublication(body, userId);
  }

  @UseGuards(AuthGuard)
  @Get('publications')
  getAllUserPublications(@UserRequest() user: User) {
    const userId = user.id;
    return this.publicationsService.getPublications(userId);
  }
}
