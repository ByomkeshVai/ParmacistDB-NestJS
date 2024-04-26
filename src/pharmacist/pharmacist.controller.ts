// import {
//   Controller,
//   Post,
//   Body,
//   Get,
//   Patch,
//   UseGuards,
//   UsePipes,
//   ValidationPipe,
//   HttpCode,
//   HttpStatus,
//   Request,
//   Param,
//   Put,
//   Delete,
//   InternalServerErrorException,
// } from '@nestjs/common';
// import { AuthGuard } from './auth/auth.guard';
// import { PharmacistService } from './pharmacist.service';
// import {
//   UpdatePharmacistDTO,
//   PrescriptionDTO,
//   MedicationInventoryDTO,
//   MedicationAlertDTO,
//   BillingDTO,
// } from './pharmacist.dto';

// @Controller('api/pharmacist')
// export class PharmacistController {
//   constructor(private readonly pharmacistService: PharmacistService) {}

//   @Post('/signup')
//   @UsePipes(new ValidationPipe())
//   async signup(@Body() pharmacistDTO: any): Promise<any> {
//     // console.log(pharmacistDTO)
//     try {
//       return await this.pharmacistService.signup(pharmacistDTO);
//     } catch (error) {
//       throw new InternalServerErrorException(error.message);
//     }
//   }

//   @Post('/login')
//   @HttpCode(HttpStatus.OK)
//   async login(@Body() credentials: any): Promise<any> {
//     try {
//       return await this.pharmacistService.login(credentials);
//     } catch (error) {
//       throw new InternalServerErrorException('Login attempt failed.');
//     }
//   }

//   @Get('/profile')
//   @UseGuards(AuthGuard)
//   async viewProfile(@Request() req): Promise<any> {
//     try {
//       return await this.pharmacistService.viewProfile(req.user.email);
//     } catch (error) {
//       throw new InternalServerErrorException('Profile view failed.');
//     }
//   }

//   @Patch('/profile/update')
//   @UseGuards(AuthGuard)
//   async updateProfile(
//     @Request() req,
//     @Body() updatePharmacistDTO: UpdatePharmacistDTO,
//   ): Promise<any> {
//     try {
//       return await this.pharmacistService.updateProfile(
//         req.user.email,
//         updatePharmacistDTO,
//       );
//     } catch (error) {
//       throw new InternalServerErrorException('Profile update failed.');
//     }
//   }

//   @Post('/prescriptions')
//   @UseGuards(AuthGuard)
//   @UsePipes(new ValidationPipe())
//   @HttpCode(HttpStatus.CREATED)
//   async createPrescription(
//     @Body() prescriptionDTO: PrescriptionDTO,
//   ): Promise<any> {
//     try {
//       return await this.pharmacistService.createPrescription(prescriptionDTO);
//     } catch (error) {
//       throw new InternalServerErrorException(
//         'Prescription could not be created.',
//       );
//     }
//   }

//   @Get('/prescriptions/history')
//   @UseGuards(AuthGuard)
//   async prescriptionHistory(@Request() req): Promise<any> {
//     try {
//       return await this.pharmacistService.prescriptionHistory(req.user.email);
//     } catch (error) {
//       throw new InternalServerErrorException(
//         'Failed to retrieve prescription history.',
//       );
//     }
//   }

//   @Get('/inventory')
//   // @UseGuards(AuthGuard)
//   // @HttpCode(HttpStatus.OK)
//   async viewInventory(@Request() req): Promise<any> {
//     try {
//       return await this.pharmacistService.viewInventory(req.user.email);
//     } catch (error) {
//       throw new InternalServerErrorException('Inventory view failed.');
//     }
//   }

//   @Put('/inventory/:id')
//   @UseGuards(AuthGuard)
//   @HttpCode(HttpStatus.OK)
//   async updateInventory(
//     @Param('id') id: string,
//     @Body() medicationInventoryDTO: MedicationInventoryDTO,
//   ): Promise<any> {
//     try {
//       return await this.pharmacistService.updateInventory(
//         id,
//         medicationInventoryDTO,
//       );
//     } catch (error) {
//       throw new InternalServerErrorException('Inventory update failed.');
//     }
//   }

//   @Delete('/inventory/:id')
//   @UseGuards(AuthGuard)
//   @HttpCode(HttpStatus.OK)
//   async deleteInventory(@Param('id') id: string): Promise<any> {
//     try {
//       return await this.pharmacistService.deleteInventory(id);
//     } catch (error) {
//       throw new InternalServerErrorException('Inventory deletion failed.');
//     }
//   }

//   @Post('/inventory/alerts')
//   @UseGuards(AuthGuard)
//   @HttpCode(HttpStatus.OK)
//   async receiveMedicationAlerts(
//     @Request() req,
//     @Body() medicationAlertDTO: MedicationAlertDTO,
//   ): Promise<any> {
//     try {
//       return await this.pharmacistService.receiveMedicationAlerts(
//         req.user.email,
//         medicationAlertDTO,
//       );
//     } catch (error) {
//       throw new InternalServerErrorException(
//         'Failed to receive medication alerts.',
//       );
//     }
//   }

//   @Post('/billing')
//   //@UseGuards(AuthGuard)
//   @UsePipes(new ValidationPipe())
//   // @HttpCode(HttpStatus.CREATED)
//   async createBilling(
//     @Request() req,
//     @Body() billingDTO: BillingDTO,
//   ): Promise<any> {
//     try {
//       return await this.pharmacistService.createBilling(
//         req.user.email,
//         billingDTO,
//       );
//     } catch (error) {
//       throw new InternalServerErrorException('Billing creation failed.');
//     }
//   }

//   @Get('/billing/history')
//   @UseGuards(AuthGuard)
//   async billingHistory(@Request() req): Promise<any> {
//     try {
//       return await this.pharmacistService.billingHistory(req.user.email);
//     } catch (error) {
//       throw new InternalServerErrorException(
//         'Failed to retrieve billing history.',
//       );
//     }
//   }

//   @Post('/logout')
//   @UseGuards(AuthGuard)
//   async logout(@Request() req): Promise<any> {
//     try {
//       // Assuming logout logic is handled within the service
//       return await this.pharmacistService.logout(req.user.email);
//     } catch (error) {
//       throw new InternalServerErrorException('Logout failed.');
//     }
//   }
// }
