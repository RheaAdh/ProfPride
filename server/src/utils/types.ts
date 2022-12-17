export enum RoleType {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}
export enum RoomType {
  SINGLE_ATTACH = 'single-attach',
  SINGLE_COMMON = 'single-common',
  DOUBLE_ATTACH = 'double-attach',
  DOUBLE_COMMON = 'double-common',
  TRIPLE_ATTACH = 'triple-attach',
  TRIPLE_COMMON = 'triple-common',
}
export enum StayType {
  YEARLY = 'yearly',
  MONTHLY = 'monthly',
  DAILY = 'daily',
}
export class CreateUserParams {
  email: string;
  name: string;
  phoneNo1: string;
  phoneNo2: string;
  deposit: number;
  aadharLink: string;
}
export class UpdateUserParams {
  email: string;
  name: string;
  phoneNo1: string;
  phoneNo2: string;
  deposit: number;
  aadharLink: string;
  role: RoleType;
}
export class CreateBookingParams {
  startDate: Date;
  endDate: Date;
  mode: string;
  stayType: StayType;
  cost: number;
}
export class UpdateBookingParams {
  startDate: Date;
  endDate: Date;
  mode: string;
  stayType: StayType;
  cost: number;
}
export class CreateRoomParams {
  type: RoomType;
  maxOccupants: number;
  occupiedCount: number;
}
export class UpdateRoomParams {
  type: RoomType;
  maxOccupants: number;
  occupiedCount: number;
}
export class CreatePaymentParams {
  amountPaid: number;
  mode: string;
}
export class UpdatePaymentParams {
  amountPaid: number;
  mode: string;
}
