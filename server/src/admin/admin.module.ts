import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { BookingService } from './services/booking.service';
import { PaymentService } from './services/payment.service';
import { BookingController } from './controllers/booking.controller';
import { CustomerController } from './controllers/customer.controller';
import { PaymentController } from './controllers/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../models/customer.entity';
import { BookingEntity } from 'src/models/booking.entity';
import { PaymentEntity } from 'src/models/payment.entity';
import { RoomEntity } from 'src/models/room.entity';
import { UserEntity } from 'src/models/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerEntity,
      BookingEntity,
      PaymentEntity,
      UserEntity,
      RoomEntity,
    ]),
  ],
  providers: [CustomerService, BookingService, PaymentService, UserService],
  controllers: [
    BookingController,
    CustomerController,
    PaymentController,
    UserController,
  ],
})
export class AdminModule {}
