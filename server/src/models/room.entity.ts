import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { RoomType } from '../../types';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: RoomType })
  type: RoomType;

  @Column()
  maxOccupants: number;

  @Column()
  occupiedCount: number;

  @OneToMany(() => BookingEntity, (booking) => booking.room)
  bookings: BookingEntity[];
}
