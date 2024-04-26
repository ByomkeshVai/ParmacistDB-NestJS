import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { MailerService } from "@nestjs-modules/mailer";
import * as bcrypt from 'bcrypt';
import { updateUserDto, userDTO } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly pharmacistRepository: Repository<UserEntity>,
    //private readonly mailerService: MailerService, // Inject the MailerService
  ) {}

  async signup(user: userDTO): Promise<any> {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    const newPharmacist = this.pharmacistRepository.create(user);
    await this.pharmacistRepository.save(newPharmacist);
    return { message: 'Signup successful' };
  }

  // Pharmacist Authentication
  async login(credentials: {
    username: string;
    password: string;
  }): Promise<any> {
    const pharmacist = await this.pharmacistRepository.findOne({
      where: { username: credentials.username },
    });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    const isMatch = await bcrypt.compare(
      credentials.password,
      pharmacist.password,
    );
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    // Normally, you'd generate a JWT token here
    return { message: 'Login successful' };
  }

  async viewProfile(email: string): Promise<any> {
    // Assuming email is a unique identifier for pharmacist
    const pharmacist = await this.pharmacistRepository.findOne({
      where: { email },
    });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    return pharmacist;
  }

  async updateProfile(
    email: string,
    updateUserDto: updateUserDto,
  ): Promise<any> {
    const pharmacist = await this.pharmacistRepository.findOne({
      where: { email },
    });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    await this.pharmacistRepository.update({ email }, updateUserDto);
    return { message: 'Profile updated successfully' };
  }
}
