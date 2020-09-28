import { Request } from "express";

export interface RequestUser extends Request{
  user: {
    id: number; //our logged in user
  };
}