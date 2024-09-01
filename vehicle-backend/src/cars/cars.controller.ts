import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ObjectId } from 'mongoose';
import { ApiResponse } from '@nestjs/swagger';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  /**
   * Creates a new car instance based on the provided CreateCarDto.
   * 
   * @param {CreateCarDto} createCarDto - The data transfer object containing the car details.
   * @return {Promise<Car>} The newly created car instance.
   */

  @Post()
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Car has been created' })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

   /**
   * Returns the total number of cars in the database.
   *
   * @return {Promise<number>} The total number of cars.
   */
   @Get('/total/number')
   @HttpCode(200)
   @ApiResponse({ status: HttpStatus.CREATED, description: 'Total cars fetched' })
 
   totalCars() {
     return this.carsService.totalCars();
   }


  /**
 * Finds all car instances.
 * 
 * @return {Promise<Car[]>} An array of all car instances.
 */
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  /**
 * Finds a car instance by ID.
 * 
 * @param {string} id - The ID of the car to find.
 * @return {Promise<Car | null>} The found car instance, or null if not found.
 */
  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.carsService.findOne(id);
  }
/**
 * Updates an existing car instance based on the provided UpdateCarDto.
 * 
 * @param {UpdateCarDto} updateCarDto - The data transfer object containing the car details to update.
 * @param {string} id - The ObjectID of the car to update.
 * @return {Promise<Car>} The updated car instance.
 */
  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  /**
 * Deletes a car instance by ID.
 * 
 * @param {string} id - The ID of the car to delete.
 * @return {Promise<Car>} The deleted car instance.
 */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }

   
}
