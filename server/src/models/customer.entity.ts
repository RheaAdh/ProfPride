import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookingEntity } from './booking.entity';
import { UserEntity } from './user.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phoneNo1: number;

  @Column({ unique: true })
  phoneNo2: number;

  @Column({ default: 0 })
  deposit: number;

  @Column({ default: null })
  aadharLink: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToOne(() => UserEntity, (user) => user.customer)
  user: UserEntity;

  @OneToMany(() => BookingEntity, (booking) => booking.customer)
  bookings: BookingEntity[];
}
