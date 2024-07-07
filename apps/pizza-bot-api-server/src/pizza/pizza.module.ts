import { Module } from "@nestjs/common";
import { PizzaModuleBase } from "./base/pizza.module.base";
import { PizzaService } from "./pizza.service";
import { PizzaController } from "./pizza.controller";
import { PizzaResolver } from "./pizza.resolver";

@Module({
  imports: [PizzaModuleBase],
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver],
  exports: [PizzaService],
})
export class PizzaModule {}
