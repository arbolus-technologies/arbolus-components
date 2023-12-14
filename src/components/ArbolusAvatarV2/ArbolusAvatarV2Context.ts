import { createContext, useContext } from 'react';
import { UserAvatar } from './ArbolusAvatarV2';

const ArbolusAvatarV2Context = createContext<{ user: UserAvatar } | null>(null);

export function useArbolusAvatarV2Context() {
  const context = useContext(ArbolusAvatarV2Context);
  if (!context) {
    throw new Error(
      `ArbolusAvatarV2 compound components cannot be rendered outside the ArbolusAvatarV2 component`
    );
  }
  return context;
}

export default ArbolusAvatarV2Context;
