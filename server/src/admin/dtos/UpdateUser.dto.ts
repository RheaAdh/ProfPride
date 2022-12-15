import { RoleType } from 'src/utils/types';

export class UpdateUserDto {
  email: string;
  name: string;
  phoneNo1: string;
  phoneNo2: string;
  deposit: number;
  aadharLink: string;
  role: RoleType;
}
