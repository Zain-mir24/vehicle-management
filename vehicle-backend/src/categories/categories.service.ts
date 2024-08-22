// src/category/category.service.ts

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try{
      console.log(createCategoryDto)
      const createdCategory = new this.categoryModel(createCategoryDto);
      const saveCategory= await createdCategory.save();
      return saveCategory;
    }catch(e){
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

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    try{
      const updatedCategory = await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
    if (!updatedCategory) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return updatedCategory;
    }catch(e){
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

  async remove(id: string): Promise<void> {
    const result = await this.categoryModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }
}
