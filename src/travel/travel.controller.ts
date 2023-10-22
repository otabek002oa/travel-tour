import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TravelDto } from './dto/travel.dto';
import { SearchDto } from './dto/search.dto';

@ApiTags('travel')
@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @ApiOperation({ summary: 'search travel packages' })
  @Get('search')
  search(@Body() searchDto: SearchDto) {
    return this.travelService.search(searchDto);
  }

  @ApiOperation({ summary: 'add travel package to list' })
  @Post()
  create(@Body() travelDto: TravelDto) {
    return this.travelService.create(travelDto);
  }

  @ApiOperation({ summary: 'get all travel packages' })
  @Get()
  getAll() {
    return this.travelService.getAll();
  }

  @ApiOperation({ summary: 'get travel package by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.travelService.getById(id);
  }

  @ApiOperation({ summary: 'update travel package' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() travelDto: TravelDto) {
    return this.travelService.update(id, travelDto);
  }

  @ApiOperation({ summary: 'delete travel package' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelService.remove(id);
  }
}
