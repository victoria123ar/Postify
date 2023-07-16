import { IsBoolean, IsDateString, IsNotEmpty, IsString, Matches } from 'class-validator';

export class PublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsDateString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'A data deve estar no formato "YYYY-MM-DD"' })
  dateToPublish: string

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}