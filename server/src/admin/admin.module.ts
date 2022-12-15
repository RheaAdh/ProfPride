import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { BookingService } from './services/booking.service';
import { PaymentService } from './services/payment.service';
import { BookingController } from './controllers/booking.controller';
import { CustomerController } from './controllers/customer.controller';
import { PaymentController } from './controllers/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { BookingEntity } from 'src/entities/booking.entity';
import { PaymentEntity } from 'src/entities/payment.entity';
import { RoomEntity } from 'src/entities/room.entity';
import { UserEntity } from 'src/entities/user.entity';
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
