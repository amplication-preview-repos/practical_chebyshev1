import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  description: string | null;
  price: number | null;
  restaurant?: Restaurant | null;
};
