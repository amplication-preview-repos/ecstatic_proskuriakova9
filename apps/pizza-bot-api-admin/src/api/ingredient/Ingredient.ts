export type Ingredient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isAvailable: boolean | null;
  name: string | null;
};
