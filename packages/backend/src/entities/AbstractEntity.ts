import {PrimaryKey, Property} from "@mikro-orm/core";

export abstract class AbstractEntity {
  @PrimaryKey()
  public id!: number;

  @Property()
  public createdAt!: Date;

  @Property()
  public updatedAt!: Date;
}