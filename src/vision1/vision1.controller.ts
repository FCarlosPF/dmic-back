import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Vision1Service } from './vision1.service';
import { Express } from 'express';

@Controller('images')
export class Vision1Controller {
  constructor(private readonly visionService: Vision1Service) {}

  @Post('detect-text')
  @UseInterceptors(FileInterceptor('image'))
  async detectTextFromImage(@UploadedFile() imageFile: Express.Multer.File): Promise<string> {
    try {
      let textInImage = await this.visionService.detectTextFromImage(imageFile);

      let result = textInImage.join('\n');

      const deserializedData: Record<string, string> = {
        Serial: '',
        Compound: '',
        CusPN: '',
        DGPN: '',
        LOT: '',
        QTY: '',
        Mold: '',
        QROPN: '',
        fecha: '' 
      };
      
      const regexPatterns: Record<string, RegExp> = {
        Serial: /Serial#:\s(.*?)\n/,
        Compound: /Compound:\s(.*?)\n/,
        CusPN: /CusPN:\s(.*?)\n/,
        DGPN: /DGPN:\s(.*?)\n/,
        LOT: /LOT#:\s(.*?)\n/,
        QTY: /QTY:EACH\s(.*?)\s(.*?)\n/,
        Mold: /Mold#:\s(.*?)\n/,
        QROPN: /QROPN:\s(.*?)\n/,
        fecha: /(\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{1,2})/ 
      };

      for (const key in regexPatterns) {
        const match = regexPatterns[key].exec(result);
        if (match && match.length > 1) {
          deserializedData[key] = match[1];
        }
      }
      console.log("Texto detectado:\n\n",deserializedData);
      console.log("\nNúmero serial-> ",deserializedData['Serial']);
      return deserializedData['Serial'];
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      throw error;
    }
  }
}
