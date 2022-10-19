import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type UserProperties = Required<User>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public login?: string;
  @Column()
  public email?: string;
  @Column()
  public firstName?: string;
  @Column()
  public lastName?: string;
  @Column()
  public state?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  public static fromProperties(value: UserProperties): User {
    const user = new User();
    user.id = value.id;
    user.login = value.login;
    user.email = value.email;
    user.firstName = value.firstName;
    user.lastName = value.lastName;
    user.state = value.state;
    user.createdAt = value.createdAt;
    user.updatedAt = value.updatedAt;
    return user;
  }
}
