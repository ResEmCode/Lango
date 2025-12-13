export interface User {
  username: string;
  id: string;
  avatar: string;
}

export interface UserSchema {
  user?: User;
  isLoading: boolean;
  error?: string;
}
