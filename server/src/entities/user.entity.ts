import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleType } from '../utils/types';
import { BookingEntity } from './booking.entity';
import { RoomEntity } from './room.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ select: false })
  token: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.CUSTOMER })
  role: RoleType;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  phoneNo1: string;

  @Column({ nullable: true })
  phoneNo2?: string;

  @Column({ default: 0 })
  deposit: number;

  @Column({ nullable: true })
  aadharLink?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => BookingEntity, (booking) => booking.user)
  bookings: BookingEntity[];
}
