import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from 'src/entities/booking.entity';
import { RoomEntity } from 'src/entities/room.entity';
import { UserEntity } from 'src/entities/user.entity';
import { CreateBookingParams, UpdateBookingParams } from 'src/utils/types';
import { Repository } from 'typeorm';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity)
    private bookingRepository: Repository<BookingEntity>,
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findBookings() {
    return this.bookingRepository.find({ relations: ['room'] });
  }

  async createBooking(
    roomId: number,
    userId: number,
    bookingDetails: CreateBookingParams,
  ) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Booking',
        HttpStatus.BAD_REQUEST,
      );
    const room = await this.roomRepository.findOneBy({ id: roomId });
    if (!room) {
      throw new HttpException(
        'Room not found. Cannot create Booking',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newBooking = this.bookingRepository.create({
      ...bookingDetails,
      createdAt: new Date(),
      user,
      room,
    });
    return this.bookingRepository.save(newBooking);
  }

  updateBooking(id: number, updateBookingDetails: UpdateBookingParams) {
    return this.bookingRepository.update({ id }, { ...updateBookingDetails });
  }

  deleteBooking(id: number) {
    return this.bookingRepository.delete(id);
  }

  async findBookingsByUserId(userId: number) {
    const userBookings = await this.userRepository.find({
      relations: ['bookings'],
      where: {
        id: userId,
      },
    });
    console.log(userBookings);

    return userBookings;
  }
}
