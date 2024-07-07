export type Pizza = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  description: string | null;
  ingredients?: Array<"Option1">;
};
