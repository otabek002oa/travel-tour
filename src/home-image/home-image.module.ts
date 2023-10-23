import { Module } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { HomeImageController } from './home-image.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HomeImage } from './models/home-image.model';

@Module({
  imports: [SequelizeModule.forFeature([HomeImage])],
  controllers: [HomeImageController],
  providers: [HomeImageService]
})
export class HomeImageModule { }
