import {RecallContext} from "@backend/types/context";

export const getMe = {
  async handler(this: RecallContext) {
    const {user} = this.req.context;
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
    };
  },
};

export const profiles = {
  getMe,
};