import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookingDto } from '../dtos/CreateBooking.dto';
import { UpdateBookingDto } from '../dtos/UpdateBooking.dto';
import { BookingService } from '../services/booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  getBookings() {
    return this.bookingService.findBookings();
  }

  @Post(':roomId/:userId')
  createBooking(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createBookingDto: CreateBookingDto,
  ) {
    return this.bookingService.createBooking(roomId, userId, createBookingDto);
  }

  @Patch(':id')
  async updateBookingById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    await this.bookingService.updateBooking(id, updateBookingDto);
  }

  @Delete(':id')
  async deleteBookingById(@Param('id', ParseIntPipe) id: number) {
    await this.bookingService.deleteBooking(id);
  }

  @Get(':userId')
  getUserBookings(@Param('userId', ParseIntPipe) userId: number) {
    return this.bookingService.findBookingsByUserId(userId);
  }
}
