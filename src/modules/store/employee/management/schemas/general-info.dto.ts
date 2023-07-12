// import { ApiProperty } from '@nestjs/swagger';
// import { CivilStatus, Gender } from '../constants';
// import {
//   IsArray,
//   IsDateString,
//   IsEnum,
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   Matches,
//   MinLength,
//   ValidateIf,
// } from 'class-validator';
//
// export class EmployeeGeneralInfoDto {
//   @ApiProperty()
//   @IsString()
//   @MinLength(2)
//   firstName: string;
//
//   @ApiProperty()
//   @IsString()
//   @MinLength(2)
//   lastName: string;
//
//   @ApiProperty()
//   @IsDateString()
//   birthday: Date;
//
//   @ApiProperty()
//   @IsString()
//   @Matches(/^(\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])(\d{5})$/)
//   ci: string;
//
//   @ApiProperty()
//   @IsEnum(Gender)
//   gender: Gender;
//
//   @ApiProperty()
//   @IsArray()
//   @IsString({ each: true })
//   @IsOptional()
//   diseases: string[];
//
//   @ApiProperty()
//   @IsArray()
//   @IsString({ each: true })
//   @IsOptional()
//   @IsString({ each: true })
//   @IsOptional()
//   allergies: string[];
//
//   @ApiProperty()
//   @IsOptional()
//   notes: string;
//
//   @ApiProperty()
//   @IsEnum(CivilStatus)
//   civilStatus: CivilStatus;
//
//   @ValidateIf((info) => info.civilStatus === CivilStatus.married)
//   @IsNotEmpty()
//   @IsString()
//   partner: string;
// }

export {};
