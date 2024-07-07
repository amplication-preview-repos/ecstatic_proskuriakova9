/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pizza as PrismaPizza } from "@prisma/client";

export class PizzaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PizzaCountArgs, "select">): Promise<number> {
    return this.prisma.pizza.count(args);
  }

  async pizzas(args: Prisma.PizzaFindManyArgs): Promise<PrismaPizza[]> {
    return this.prisma.pizza.findMany(args);
  }
  async pizza(args: Prisma.PizzaFindUniqueArgs): Promise<PrismaPizza | null> {
    return this.prisma.pizza.findUnique(args);
  }
  async createPizza(args: Prisma.PizzaCreateArgs): Promise<PrismaPizza> {
    return this.prisma.pizza.create(args);
  }
  async updatePizza(args: Prisma.PizzaUpdateArgs): Promise<PrismaPizza> {
    return this.prisma.pizza.update(args);
  }
  async deletePizza(args: Prisma.PizzaDeleteArgs): Promise<PrismaPizza> {
    return this.prisma.pizza.delete(args);
  }
}
