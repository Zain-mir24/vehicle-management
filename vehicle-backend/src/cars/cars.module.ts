import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './entities/car.entity';
import { CategorySchema } from 'src/categories/entities/category.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema },{ name: 'Category', schema: CategorySchema }])],

  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
