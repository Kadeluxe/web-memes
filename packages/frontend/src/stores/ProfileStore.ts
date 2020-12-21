import {AbstractStore} from "@frontend/stores/AbstractStore";
import {inject, provide} from "vue";
import {server} from "@frontend/server";
import {IUser} from "@shared/entities/IUser";

interface IProfileStore {
  user: IUser | null;
}

export const STORE_PROFILE = Symbol();

export class ProfileStore extends AbstractStore<IProfileStore> {
  public async getMe() {
    this.state.user = await server.profiles.getMe();
  }

  protected initialData(): IProfileStore {
    return {
      user: null,
    };
  }
}

export const provideProfileStore = () => provide(STORE_PROFILE, new ProfileStore());
export const useProfileStore = () => <ProfileStore>inject(STORE_PROFILE);