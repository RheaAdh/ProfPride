import { RoomType } from 'src/utils/types';

export class CreateRoomDto {
  type: RoomType;
  maxOccupants: number;
  occupiedCount: number;
}
