import { Controller, Get, Query } from '@nestjs/common';
import { Vision1Service } from './vision1.service';

@Controller('images')
export class Vision1Controller {
  constructor(private readonly visionService: Vision1Service) {}

  @Get('detect-text')
  async detectTextFromURL(@Query('imageUrl') imageUrl: string): Promise<string[]> {
    try {
      const textInImage = await this.visionService.detectTextFromURL(imageUrl);
      return textInImage;
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      throw error;
    }
  }
}
