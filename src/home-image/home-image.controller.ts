import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('home-image')
@Controller('home-image')
export class HomeImageController {
  constructor(private readonly homeImageService: HomeImageService) {}

  @ApiOperation({summary: 'upload image for home page'})
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File){
    return this.homeImageService.uploadImage(file);
  }
}
