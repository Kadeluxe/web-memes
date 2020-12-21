import {AbstractEntity} from "@backend/entities/AbstractEntity";
import {Entity, ManyToOne, Property} from "@mikro-orm/core";
import {WorkspaceEntity} from "@backend/entities/WorkspaceEntity";

@Entity({tableName: "todos"})
export class TodoEntity extends AbstractEntity {
  @ManyToOne(() => WorkspaceEntity)
  workspace!: WorkspaceEntity;

  @Property()
  text!: string;
}