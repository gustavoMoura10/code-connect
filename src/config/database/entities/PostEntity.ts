import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    unique: true,
    length: 1500,
  })
  cover: string;
  @Column({
    unique: true,
    length: 500,
  })
  title: string;
  @Column({
    length: 500,
    unique: true,
  })
  slug: string;
  @Column({
    type: "text",
  })
  body: string;
  @Column({
    type: "text",
  })
  markdown: string;
}
