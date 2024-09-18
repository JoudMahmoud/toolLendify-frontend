export interface UserRegister {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;

  messageError: string;
  styleMessageError: boolean;
}
