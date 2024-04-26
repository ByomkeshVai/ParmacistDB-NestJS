import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class userDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;

  // Add other necessary properties
}

export class updateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;

  // Add other necessary properties
}
