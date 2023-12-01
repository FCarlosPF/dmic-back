import { Injectable } from '@nestjs/common';
import { ImageAnnotatorClient } from '@google-cloud/vision';

@Injectable()
export class Vision1Service {
  private readonly client: ImageAnnotatorClient;

  constructor() {
    // Inicializa el cliente de Cloud Vision
    this.client = new ImageAnnotatorClient();
  }

  async detectTextFromURL(imageUrl: string): Promise<string[]> {
    try {
      const [result] = await this.client.textDetection(imageUrl);
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
