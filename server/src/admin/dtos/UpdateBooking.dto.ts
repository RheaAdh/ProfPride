import { RoomEntity } from 'src/entities/room.entity';
import { StayType } from 'src/utils/types';

export class UpdateBookingDto {
  startDate: Date;
  endDate: Date;
  mode: string;
  stayType: StayType;
  cost: number;
}
