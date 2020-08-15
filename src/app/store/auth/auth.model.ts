export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  __v: number;
}

export interface Auth {
  error: { [k: string]: string };
  user: User;
}
