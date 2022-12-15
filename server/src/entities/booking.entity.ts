import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StayType } from '../utils/types';
import { PaymentEntity } from './payment.entity';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity';
@Entity('booking')
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  mode: string;

  @Column()
  stayType: StayType;

  @Column()
  cost: number;

  @ManyToOne(() => RoomEntity, (room) => room.bookings)
  room: RoomEntity;

  @OneToMany(() => PaymentEntity, (payment) => payment.booking)
  payments: PaymentEntity[];

  @ManyToOne(() => UserEntity, (user) => user.bookings)
  user: UserEntity;
}
