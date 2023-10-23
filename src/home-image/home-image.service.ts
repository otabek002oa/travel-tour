import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HomeImage } from './models/home-image.model';
import { v4 } from 'uuid';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

@Injectable()
export class HomeImageService {
  constructor(
    @InjectModel(HomeImage) private readonly homeImageRepo: typeof HomeImage,
  ) {}

  public async upload(
    file: Express.Multer.File,
    path: string,
    fileName: string,
  ) {
    try {
      const storage = getStorage();
      const fileExtension = file.originalname.split('.').pop();
      const fileRef = ref(storage, `${path}/${fileName}.${fileExtension}`);
      const metadata = {
        contentType: 'image/jpeg',
      };
      const uploaded = await uploadBytes(fileRef, file.buffer, metadata);
      return uploaded.metadata.fullPath;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async uploadImage(file: Express.Multer.File) {
    try {
      const exs = v4();
      const page_image = await this.upload(file, 'home-image', exs);
      const image = await this.homeImageRepo.create({ page_image });
      return image;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
