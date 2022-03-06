import { User } from "./user";

export interface Comment {
  _id: string;
  movie: string;
  rate: number;
  text: string;
  registerData: Date;
  like: number;
  user: User;
}
