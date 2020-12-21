import {Entity, Property} from "@mikro-orm/core";
import {AbstractEntity} from "@backend/entities/AbstractEntity";
import {IUser} from "@shared/entities/IUser";

@Entity({tableName: "users"})
export class UserEntity extends AbstractEntity implements IUser {
  @Property()
  name!: string;
}