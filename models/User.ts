export interface User {
    id?: string;
    username: string;
    email: string;
    password: string;
    role: 'user' | 'admin' | 'super_admin';
    verified: boolean;
    verification_token?: string | null;
    verification_token_expiry?: number | null;
  }
  
export const USERS_TABLE = 'users';