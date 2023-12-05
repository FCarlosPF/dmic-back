import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Vision1Service } from './vision1.service';
import { Express } from 'express';

@Controller('images')
export class Vision1Controller {
  constructor(private readonly visionService: Vision1Service) {}

  @Post('detect-text')
  @UseInterceptors(FileInterceptor('image'))
  async detectTextFromImage(@UploadedFile() imageFile: Express.Multer.File): Promise<string[]> {
    try {
      const textInImage = await this.visionService.detectTextFromImage(imageFile);
      return textInImage;
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      throw error;
    }
  }
}
