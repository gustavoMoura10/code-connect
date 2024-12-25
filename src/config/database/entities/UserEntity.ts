import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    unique: true,
    length: 100,
  })
  name: string;
  @Column({
    unique: true,
    length: 100,
  })
  username: string;
  @Column({
    length: 1500,
  })
  avatar: string;
}
