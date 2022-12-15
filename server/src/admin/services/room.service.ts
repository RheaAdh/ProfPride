import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entities/room.entity';
import { CreateRoomParams, UpdateRoomParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) {}

  findRooms() {
    return this.roomRepository.find({ relations: ['bookings'] });
  }

  createRoom(RoomDetails: CreateRoomParams) {
    const newRoom = this.roomRepository.create({
      ...RoomDetails,
    });
    return this.roomRepository.save(newRoom);
  }

  updateRoom(id: number, updateRoomDetails: UpdateRoomParams) {
    return this.roomRepository.update({ id }, { ...updateRoomDetails });
  }

  deleteRoom(id: number) {
    return this.roomRepository.delete(id);
  }
}
