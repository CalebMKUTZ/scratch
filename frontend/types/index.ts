import React from "react";

export interface IUser {
  id: number;
  username: string;
  pads: IPad[];
}

export interface IPad {
  id: number;
  content: string;
  user: IUser;
  userId: number;
}

export interface PadContextProps {
  pads: IPad[];
  singlePad: IPad;
  error: string;
  fetchPads: () => void;
  fetchSinglePad: (id: number) => void;
  createPad: (content: string) => void;
  deletePad: (id: number) => void;
}

export interface PadProviderProps {
  children: React.ReactNode;
}

export interface PadProps {
  pad: IPad;
}

export interface MessageProps {
  text: string;
}

export interface InputProps {
  value: any;
  onChange: (e: any) => any;
  placeholder?: string;
  type: "text" | "file" | "email" | "password";
}

export interface ButtonProps {
  color: "primary" | "blacked" | "default";
  onClick?: () => any;
  children: React.ReactNode;
}
