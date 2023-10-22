import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Travel } from './model/app.model';

@Module({
  imports: [SequelizeModule.forFeature([Travel])],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
