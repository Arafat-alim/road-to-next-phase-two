type Entity = {
  userId: string | null;
};

export type AuthUser = {
  id: string;
  username: string;
};

const isOwner = (authUser: AuthUser | null | undefined, entity: Entity) => {
  if (!authUser || !entity) {
    return false;
  }

  if (!entity.userId) {
    return false;
  }

  if (entity.userId !== authUser.id) {
    return false;
  } else {
    return true;
  }
};

export { isOwner };
