import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PizzaServiceBase } from "./base/pizza.service.base";

@Injectable()
export class PizzaService extends PizzaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
