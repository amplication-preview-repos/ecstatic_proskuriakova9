import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PizzaService } from "./pizza.service";
import { PizzaControllerBase } from "./base/pizza.controller.base";

@swagger.ApiTags("pizzas")
@common.Controller("pizzas")
export class PizzaController extends PizzaControllerBase {
  constructor(protected readonly service: PizzaService) {
    super(service);
  }
}
