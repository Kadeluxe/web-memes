import {reactive, readonly, toRefs} from "vue";

export abstract class AbstractStore<T extends Object> {
  protected state: T;

  public constructor() {
    this.state = <T>reactive(this.initialData());
  }

  public getState() {
    return toRefs(readonly(this.state));
  }

  protected abstract initialData(): T;
}