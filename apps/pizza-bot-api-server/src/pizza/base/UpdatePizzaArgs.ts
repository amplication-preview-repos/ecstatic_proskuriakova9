/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PizzaWhereUniqueInput } from "./PizzaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PizzaUpdateInput } from "./PizzaUpdateInput";

@ArgsType()
class UpdatePizzaArgs {
  @ApiProperty({
    required: true,
    type: () => PizzaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PizzaWhereUniqueInput)
  @Field(() => PizzaWhereUniqueInput, { nullable: false })
  where!: PizzaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PizzaUpdateInput,
  })
  @ValidateNested()
  @Type(() => PizzaUpdateInput)
  @Field(() => PizzaUpdateInput, { nullable: false })
  data!: PizzaUpdateInput;
}

export { UpdatePizzaArgs as UpdatePizzaArgs };
