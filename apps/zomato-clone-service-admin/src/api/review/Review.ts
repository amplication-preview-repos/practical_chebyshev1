import { User } from "../user/User";
import { Restaurant } from "../restaurant/Restaurant";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  user?: User | null;
  restaurant?: Restaurant | null;
};
