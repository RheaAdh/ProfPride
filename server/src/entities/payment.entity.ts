import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';

@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  amountPaid: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  mode: string;

  @ManyToOne(() => BookingEntity, (booking) => booking.payments)
  booking: BookingEntity;
}
