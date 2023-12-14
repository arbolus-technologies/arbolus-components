import React from 'react';
import ArbolusAvatarV2Context from './ArbolusAvatarV2Context';
import ArbolusAvatarImage from './components/ArbolusAvatarImage';
import ArbolusAvatarName from './components/ArbolusAvatarName';
import ArbolusAvatarTitle from './components/ArbolusAvatarTitle';

interface ArbolusAvatarV2Props {
  children: React.ReactNode;
  user: UserAvatar;
}

export interface UserAvatar {
  profileImage?: string;
  name: string;
  lastName?: string;
  title: string;
}

interface ArbolusAvatarComposite extends React.FC<ArbolusAvatarV2Props> {
  Avatar: typeof ArbolusAvatarImage;
  Name: typeof ArbolusAvatarName;
  Title: typeof ArbolusAvatarTitle;
}

export const ArbolusAvatar: ArbolusAvatarComposite = ({ children, user }) => {
  return (
    <ArbolusAvatarV2Context.Provider value={{ user }}>{children}</ArbolusAvatarV2Context.Provider>
  );
};

ArbolusAvatar.Avatar = ArbolusAvatarImage;
ArbolusAvatar.Name = ArbolusAvatarName;
ArbolusAvatar.Title = ArbolusAvatarTitle;
