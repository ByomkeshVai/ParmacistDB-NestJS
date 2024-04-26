import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  UseGuards,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  Request,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
  constructor(private readonly pharmacistService: any) {}

  @Post('/signup')
  @UsePipes(new ValidationPipe())
  async signup(@Body() pharmacistDTO: any): Promise<any> {
    // console.log(pharmacistDTO)
    try {
      return await this.pharmacistService.signup(pharmacistDTO);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() credentials: any): Promise<any> {
    try {
      return await this.pharmacistService.login(credentials);
    } catch (error) {
      throw new InternalServerErrorException('Login attempt failed.');
    }
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async viewProfile(@Request() req): Promise<any> {
    try {
      return await this.pharmacistService.viewProfile(req.user.email);
    } catch (error) {
      throw new InternalServerErrorException('Profile view failed.');
    }
  }

  @Patch('/profile/update')
  @UseGuards(AuthGuard)
  async updateProfile(
    @Request() req,
    @Body() updatePharmacistDTO: any,
  ): Promise<any> {
    try {
      return await this.pharmacistService.updateProfile(
        req.user.email,
        updatePharmacistDTO,
      );
    } catch (error) {
      throw new InternalServerErrorException('Profile update failed.');
    }
  }

  @Post('/logout')
  @UseGuards(AuthGuard)
  async logout(@Request() req): Promise<any> {
    try {
      // Assuming logout logic is handled within the service
      return await this.pharmacistService.logout(req.user.email);
    } catch (error) {
      throw new InternalServerErrorException('Logout failed.');
    }
  }
}
