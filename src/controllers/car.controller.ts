import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Car } from 'src/entities/car.entity';
import { CarService } from 'src/services/car.service';

@Controller('/car')
export default class CarController {
  constructor(
    private readonly carService: CarService
  ) { }

  @Get('/get/:carId')
  async getCar(@Param('carId') carId: number): Promise<Car | undefined> {
    return await this.carService.findById(carId);
  }

  @Get('/get-all')
  async getAllCars(): Promise<Car[]> {
    return await this.carService.findAll(); }

  @Post('/post')
  async createCar(@Req() req: Request): Promise<Car> {
    const body: any = req.body;  

    return await this.carService.save(body);;
  }

  @Put('/put/:carId')
  async updateCarById(@Param('carId') carId: number, @Req() req: Request): Promise<Car | undefined> {
    const body: any = req.body;
    return await this.carService.update(carId, body);
  }

  @Delete('/delete/:carId')
  async remove(@Param('carId') carId: number) {
    await this.carService.delete(carId);
  }


}
