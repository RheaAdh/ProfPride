import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from 'src/entities/booking.entity';
import { PaymentEntity } from 'src/entities/payment.entity';
import { UserEntity } from 'src/entities/user.entity';
import { CreatePaymentParams, UpdatePaymentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(BookingEntity)
    private bookingRepository: Repository<BookingEntity>,
  ) {}

  findPayments() {
    return this.paymentRepository.find();
  }

  async createPayment(bookingId: number, paymentDetails: CreatePaymentParams) {
    const booking = await this.bookingRepository.findOneBy({ id: bookingId });
    if (!booking) {
      throw new HttpException(
        'Booking not found. Cannot create Payment',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newPayment = this.paymentRepository.create({
      ...paymentDetails,
      createdAt: new Date(),
      booking,
    });
    return this.paymentRepository.save(newPayment);
  }

  updatePayment(id: number, updatePaymentDetails: UpdatePaymentParams) {
    return this.paymentRepository.update({ id }, { ...updatePaymentDetails });
  }

  deletePayment(id: number) {
    return this.paymentRepository.delete(id);
  }

  async findPaymentsByUserIdBookingId(bookingId: number) {
    const payments = await this.bookingRepository.find({
      relations: ['payments'],
      where: {
        id: bookingId,
      },
    });

    return payments;
  }
}
