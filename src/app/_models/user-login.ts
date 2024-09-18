export interface UserLogin {
  email: string;
  password: string;
  rememberMe: boolean;

  messageError: string;
  styleMessageError: boolean;
}
