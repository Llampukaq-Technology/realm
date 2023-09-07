export interface UserInitialData {
  created: Date;
  userId: string;
  email: string;
  country: string;
  language: string;
  name?: string;
  picture?: string;
}
export type UserDataRealm<T = {}> = UserInitialData & T;
