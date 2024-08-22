import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try{
      console.log(createCategoryDto)
      const createCategory= await this.CategoryService.create(createCategoryDto);
       return createCategory
    }catch(e){
        console.log(e)
    }

  }

  @Get()
  findAll() {
    return this.CategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CategoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.CategoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CategoryService.remove(id);
  }
}
