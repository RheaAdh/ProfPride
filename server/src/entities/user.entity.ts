import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleType } from '../utils/types';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.CUSTOMER })
  role: RoleType;

  @Column()
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
}
