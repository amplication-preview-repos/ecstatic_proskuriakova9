import * as graphql from "@nestjs/graphql";
import { PizzaResolverBase } from "./base/pizza.resolver.base";
import { Pizza } from "./base/Pizza";
import { PizzaService } from "./pizza.service";

@graphql.Resolver(() => Pizza)
export class PizzaResolver extends PizzaResolverBase {
  constructor(protected readonly service: PizzaService) {
    super(service);
  }
}
