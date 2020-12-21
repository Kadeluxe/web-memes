import {AbstractEntity} from "@backend/entities/AbstractEntity";
import {Collection, Entity, ManyToOne, OneToMany, Property} from "@mikro-orm/core";
import {UserEntity} from "@backend/entities/UserEntity";
import {TodoEntity} from "@backend/entities/TodoEntity";

@Entity({tableName: "workspaces"})
export class WorkspaceEntity extends AbstractEntity {
  @Property()
  name!: string;

  @ManyToOne({serializer: x => x})
  owner!: UserEntity;

  @OneToMany(() => TodoEntity, todo => todo.workspace, {})
  todos = new Collection<TodoEntity>(this);
}