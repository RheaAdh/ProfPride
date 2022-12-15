import { StayType } from 'src/utils/types';

export class CreateBookingDto {
  startDate: Date;
  endDate: Date;
  mode: string;
  stayType: StayType;
  cost: number;
}
