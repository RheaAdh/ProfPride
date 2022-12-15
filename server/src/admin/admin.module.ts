import { Module } from '@nestjs/common';
import { BookingService } from './services/booking.service';
import { PaymentService } from './services/payment.service';
import { BookingController } from './controllers/booking.controller';
import { PaymentController } from './controllers/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from 'src/entities/booking.entity';
import { PaymentEntity } from 'src/entities/payment.entity';
import { RoomEntity } from 'src/entities/room.entity';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { RoomService } from './services/room.service';
import { RoomController } from './controllers/room.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookingEntity,
      PaymentEntity,
      UserEntity,
      RoomEntity,
    ]),
  ],
  providers: [BookingService, PaymentService, UserService, RoomService],
  controllers: [
    BookingController,
    PaymentController,
    UserController,
    RoomController,
  ],
})
export class AdminModule {}
