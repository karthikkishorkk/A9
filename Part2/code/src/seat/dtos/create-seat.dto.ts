import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { SeatClass } from '../enums/seat-class.enum';

@InputType()
export class CreateSeatInput {
  @Field()
  @IsInt()
  rowNo: number;

  @Field()
  @IsInt()
  seatNo: number;

  @Field()
  @IsString()
  flightId: string;

  @Field(() => SeatClass, { nullable: true, defaultValue: SeatClass.ECONOMY })
  @IsOptional()
  @IsEnum(SeatClass)
  seatClass?: SeatClass;
}
