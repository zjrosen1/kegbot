import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { UserVehicle } from "./UserVehicle";
import { Order } from "./Order";

@Entity()
export class DeliverySession {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => User, user => user.deliverySessions)
  user!: User;

  @ManyToOne(type => UserVehicle, userVehicle => userVehicle.deliverySessions)
  userVehicle!: UserVehicle;

  @Column({ default: false })
  isActive!: boolean;

  @ManyToOne(type => Order, order => order.deliverySessions)
  order!: Order;
}
