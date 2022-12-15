import { RoomType } from 'src/utils/types';

export class UpdateRoomDto {
  type: RoomType;
  maxOccupants: number;
  occupiedCount: number;
}
