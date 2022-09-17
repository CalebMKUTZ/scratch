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
  userEmail: string;
}

export interface PadContextProps {
  pads: IPad[];
  singlePad: IPad;
  error: string;
  fetchPads: (userEmail: string) => void;
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
  fullWidth?: boolean;
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  username: string;
  pads: IPad[];
}

export interface UserContextProps {
  user: any;
  error: string;
  loginWithGoogle: () => void;
  logout: () => void;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface CardProps {
  title?: string;
  content?: string;
  children: React.ReactNode;
}

export interface ITodo {
  id: number;
  name: string;
  isChecked: boolean;
  user: IUser;
  userEmail: string;
}

export interface TodoContextProps {
  todos: ITodo[];
  singleTodo: ITodo;
  error: string;
  fetchTodos: (userEmail: string) => void;
  fetchSingleTodo: (id: number) => void;
  createTodo: (name: string) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoProviderProps {
  children: React.ReactNode;
}

export interface TodoProps {
  todo: ITodo;
}