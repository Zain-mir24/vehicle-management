import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly CategoryService: CategoryService) {}

    /**
   * Creates a new category based on the provided CreateCategoryDto.
   *
   * @param {CreateCategoryDto} createCategoryDto - The data transfer object containing the category details.
   * @return {Promise<Category>} The newly created category.
   */
  @Post()
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, description: 'Category has been created' })

  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const createCategory = await this.CategoryService.create(createCategoryDto);
      return createCategory
    } catch (e) {
      throw new HttpException(e.response.error, e.response.status);
    }
  }


  /**
 * Retrieves a list of all categories.
 *
 * @return {Promise<Category[]>} A promise containing an array of all categories.
 */
  @Get()
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, description: 'All categories has been returned' })

  async findAll() {
    try {
      const allCategories = await this.CategoryService.findAll();
      return allCategories;

    } catch (e) {
      throw new HttpException(e.response.error, e.response.status);

    }
  }


  /**
 * Retrieves a category by its ID.
 *
 * @param {string} id - The ID of the category to be retrieved.
 * @return {Promise<Category>} The category with the specified ID.
 */
  @Get(':id')
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, description: 'Category has been retrieved' })
  async findOne(@Param('id') id: string) {
    try {
      const findCategory = await this.CategoryService.findOne(id);
      return findCategory
    } catch (e) {
      throw new HttpException(e.response.error, e.response.status)
    }

  }

  /**
   * Updates a category by ID.
   *
   * @param {string} id - The ID of the category to update
   * @param {UpdateCategoryDto} updateCategoryDto - The updated category data
   * @return {Promise<any>} The result of the update operation
   */
  @Patch(':id')
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, description: 'Category has been updated' })

  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    try {
      const updateCategory = await this.CategoryService.update(id, updateCategoryDto);
      return updateCategory
    } catch (e) {
      throw new HttpException(e.response.error, e.response.status)

    }
  }

  /**
 * Removes a category by ID.
 *
 * @param {string} id - The ID of the category to remove
 * @return {{status: number, message: string}} - The result of the removal operation
 */
  @Delete(':id')
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, description: 'Category has been deleted' })

  async remove(@Param('id') id: string) {
    try {
      const deleteCategory = await this.CategoryService.remove(id);
      return deleteCategory
    } catch (e) {
      throw new HttpException(e.response.error, e.response.status)
    }

  }
}
