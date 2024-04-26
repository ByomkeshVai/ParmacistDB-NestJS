// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { PharmacistController } from './pharmacist.controller';
// // import { PharmacistService } from './pharmacist.service';

// import {
//   PrescriptionEntity,
//   MedicationInventoryEntity,
//   MedicationAlertEntity,
// } from './pharmacist.entity';

// import { AuthModule } from './auth/auth.module';
// import { UserEntity } from './user/user.entity';
// // import { MailerModule } from "@nestjs-modules/mailer";
// // MailerModule.forRoot({
// // transport: {
// // host: 'smtp.gmail.com',
// // port: 465,
// // ignoreTLS: true,
// // secure: true,
// // auth: {
// // user: 'efazopi42145@gmail.com',
// // pass: 'hsmy jedm zhiy mprz'
// // },
// // }})

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forFeature([
//       UserEntity,
//       PrescriptionEntity,
//       MedicationInventoryEntity,
//       MedicationAlertEntity,
//     ]),
//     AuthModule,
//   ],
//   controllers: [PharmacistController],
//   providers: [PharmacistService],
// })
// export class PharmacistModule {}
