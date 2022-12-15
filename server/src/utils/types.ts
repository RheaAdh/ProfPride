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
  password: string;
}
export class UpdateUserParams {
  email: string;
  password: string;
}
