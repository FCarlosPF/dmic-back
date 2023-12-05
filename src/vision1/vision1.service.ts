import { Injectable, BadRequestException } from '@nestjs/common';
import { ImageAnnotatorClient } from '@google-cloud/vision';
import { Express } from 'express';

@Injectable()
export class Vision1Service {
  private readonly client: ImageAnnotatorClient;

  constructor() {
    this.client = new ImageAnnotatorClient();
  }

  async detectTextFromImage(imageFile: Express.Multer.File): Promise<string[]> {
    if (!imageFile || !imageFile.buffer) {
      throw new BadRequestException('No se proporcionó un archivo de imagen');
    }

    try {
      const [result] = await this.client.textDetection(imageFile.buffer);
      const detections = result.textAnnotations;
      if (detections) {
        return detections.map(text => text.description);
      }
      return [];
    } catch (error) {
      console.error('Error al detectar texto en la imagen:', error);
      throw error;
    }
  }
  
  // Otros métodos para realizar otras operaciones con Cloud Vision
}
