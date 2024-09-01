import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car,CarDocument } from './entities/car.entity';
import { Category,CategoryDocument } from 'src/categories/entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,

  ) {}
  
  async create(createCarDto: CreateCarDto) {
    try {

      const findValidCategory = await this.categoryModel.findOne({ _id: createCarDto.categoryId });
       console.log(findValidCategory)
      if (!findValidCategory) throw new Error('Category does not exists');

      const createdCar = new this.carModel(createCarDto);
      const saveCar = createdCar.save();
      return {
        status: HttpStatus.OK,
        message:"Cars saved successfully",
        data:saveCar
      };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e.message || e,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e.message || e,
        },
      );
    }
  }

  async findAll() {
    try {
      const cars = await this.carModel.find();
      return {
        status: HttpStatus.OK,
        message:"Cars fetched successfully",
        data:cars
      };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e.message || e,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e.message || e,
        },
      );
    }
  }
  async findOne(id: ObjectId) {
    try {
      const foundCar = await this.carModel.findById(id);
      return {
        status:HttpStatus.OK,
        data:foundCar,
        message:"Car fetched successfully"
      };
      
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e.message || e,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e.message || e,
        },
      );
    }
  }

async update(id: ObjectId,updateCarDto: UpdateCarDto, ) {
  try {
 
    const updatedCar = await this.carModel.findByIdAndUpdate(id, updateCarDto, { new: true });
    if (!updatedCar) throw new Error('Car not found');

    return {
      data:updatedCar,
      message:"Car updated successfully",
      status:HttpStatus.OK
    };
  } catch (e) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: e.message || e,
      },
      HttpStatus.BAD_REQUEST,
      {
        cause: e.message || e,
      },
    );
  }
}
async remove(id: string) {
  try {
    const deletedCar = await this.carModel.findByIdAndDelete(id);
    if (!deletedCar) throw new Error('Car not found');

    return {
      data:deletedCar,
      message:"Car deleted successfully",
      status:HttpStatus.OK
    };
  } catch (e) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: e.message || e,
      },
      HttpStatus.BAD_REQUEST,
      {
        cause: e.message || e,
      },
    );
  }
}

async totalCars(){
  try {
    const cars = await this.carModel.find();
    return {
      status:HttpStatus.CREATED,
      data:cars.length,
      message:"total cars fetched successfully"
    };
  } catch (e) {
    console.log(e)
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: e.message || e,
      },
      HttpStatus.BAD_REQUEST,
      {
        cause: e.message || e,
      },
    );
  }
}
}
