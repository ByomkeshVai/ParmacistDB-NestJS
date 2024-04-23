import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PharmacistEntity } from "./pharmacist.entity";
import { PharmacistDTO, UpdatePharmacistDTO, PrescriptionDTO, MedicationInventoryDTO, MedicationAlertDTO, BillingDTO } from "./pharmacist.dto";
// import { MailerService } from "@nestjs-modules/mailer";
import * as bcrypt from 'bcrypt';

@Injectable()

export class PharmacistService {
  constructor(
    @InjectRepository(PharmacistEntity)
    private readonly pharmacistRepository: Repository<PharmacistEntity>,
    //private readonly mailerService: MailerService, // Inject the MailerService
  ) {}

  // Pharmacist Authentication
  async login(credentials: { username: string; password: string }): Promise<any> {
    const pharmacist = await this.pharmacistRepository.findOne({ where: { username: credentials.username } });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    const isMatch = await bcrypt.compare(credentials.password, pharmacist.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    // Normally, you'd generate a JWT token here
    return { message: 'Login successful' };
  }

  async signup(pharmacistDTO: PharmacistDTO): Promise<any> {
    const salt = await bcrypt.genSalt();
    pharmacistDTO.password = await bcrypt.hash(pharmacistDTO.password, salt);
    const newPharmacist = this.pharmacistRepository.create(pharmacistDTO);
    await this.pharmacistRepository.save(newPharmacist);
    return { message: 'Signup successful' };
  }

  // async sendEmail(email: string): Promise<void> {
  //   await this.mailerService.sendMail({
  //     to: email, // List of receivers
  //     subject: 'Welcome to the Pharmacy Service', // Subject line
  //     text: 'Hello world?', // Plain text body
  //     html: '<b>Hello world?</b>', // HTML body content
  //   });
 //}

  // Example usage in signup method
  // async signup(pharmacistDTO: PharmacistDTO): Promise<any> {
  //   const salt = await bcrypt.genSalt();
  //   pharmacistDTO.password = await bcrypt.hash(pharmacistDTO.password, salt);
  //   const newPharmacist = this.pharmacistRepository.create(pharmacistDTO);
  //   await this.pharmacistRepository.save(newPharmacist);
  //   // Send welcome email after successful signup
  //   //await this.sendEmail(pharmacistDTO.email);
  //   return { message: 'Signup successful' };
  // }

  async viewProfile(email: string): Promise<any> {
    // Assuming email is a unique identifier for pharmacist
    const pharmacist = await this.pharmacistRepository.findOne({ where: { email } });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    return pharmacist;
  }

  async updateProfile(email: string, updatePharmacistDTO: UpdatePharmacistDTO): Promise<any> {
    const pharmacist = await this.pharmacistRepository.findOne({ where: { email } });
    if (!pharmacist) {
      throw new Error('Pharmacist not found');
    }
    await this.pharmacistRepository.update({ email }, updatePharmacistDTO);
    return { message: 'Profile updated successfully' };
  }

  // Prescription Management
  async createPrescription(prescriptionDTO: PrescriptionDTO): Promise<any> {
    // This would involve saving the prescription to the database
    return { message: 'Prescription created successfully' };
  }

  async prescriptionHistory(email: string): Promise<any> {
    // Fetch prescription history for the pharmacist or patient
    return { message: 'Prescription history retrieved successfully' };
  }

  // Medication Inventory Management
  async viewInventory(email: string): Promise<any> {
    // Fetch inventory details
    return { message: 'Inventory details retrieved successfully' };
  }

  async updateInventory(id: string, medicationInventoryDTO: MedicationInventoryDTO): Promise<any> {
    // Update inventory record
    return { message: 'Inventory updated successfully' };
  }

  async deleteInventory(id: string): Promise<any> {
    // Delete inventory record
    return { message: 'Inventory deleted successfully' };
  }

  async receiveMedicationAlerts(email: string, medicationAlertDTO: MedicationAlertDTO): Promise<any> {
    // Logic to receive medication alerts
    return { message: 'Medication alerts received successfully' };
  }

  // Billing and Payments
  async createBilling(email: string, billingDTO: BillingDTO): Promise<any> {
    // Logic to create a billing record
    return { message: 'Billing record created successfully' };
  }

  async billingHistory(email: string): Promise<any> {
    // Fetch billing history
    return { message: 'Billing history retrieved successfully' };
  }

  async logout(email: string): Promise<any> {
    // Invalidate the user's session or token
    return { message: 'Logout successful' };
  }

  async addToBlacklist(token: string, date: string, email: string): Promise<boolean> {
    // Implementation logic to add token to blacklist
    // This method should return true/false based on whether the token was successfully added to the blacklist
    return true; // Placeholder return value
  }

  async get_token_by_token(token: string): Promise<any> {
    // Implementation logic to retrieve token information by token
    // This method should return the token data or null if the token is not found
    return null; // Placeholder return value
  }
}





  

  
