import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { StayType } from '../utils/types';
import { PaymentEntity } from './payment.entity';
import { RoomEntity } from './room.entity';
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

  @ManyToOne(() => CustomerEntity, (customer) => customer.bookings)
  customer: CustomerEntity;

  @ManyToOne(() => RoomEntity, (room) => room.bookings)
  room: RoomEntity;

  @OneToMany(() => PaymentEntity, (payment) => payment.bookings)
  payments: PaymentEntity[];
}
