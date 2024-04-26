import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string; // Ensure this matches your DTO and service logic

  @Column({ unique: true })
  username: string; // Ensure this matches your DTO and service logic

  @Column()
  password: string; // Make sure this is securely managed
  // Add other necessary columns and decorators
  @Column()
  role: string;
}
