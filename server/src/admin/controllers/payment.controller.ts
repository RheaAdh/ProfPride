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
import { CreatePaymentDto } from '../dtos/CreatePayment.dto';
import { UpdatePaymentDto } from '../dtos/UpdatePayment.dto';

import { PaymentService } from '../services/payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get()
  getPayments() {
    return this.paymentService.findPayments();
  }

  @Post(':bookingId')
  createPayment(
    @Param('bookingId', ParseIntPipe) bookingId: number,
    @Body() createPaymentDto: CreatePaymentDto,
  ) {
    return this.paymentService.createPayment(bookingId, createPaymentDto);
  }

  @Patch(':id')
  async updatePaymentById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    await this.paymentService.updatePayment(id, updatePaymentDto);
  }

  @Delete(':id')
  async deletePaymentById(@Param('id', ParseIntPipe) id: number) {
    await this.paymentService.deletePayment(id);
  }

  @Get(':bookingId')
  getUserBookingPayments(@Param('bookingId', ParseIntPipe) bookingId: number) {
    return this.paymentService.findPaymentsByUserIdBookingId(bookingId);
  }
}
