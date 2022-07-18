import { BunTypes } from "src/app/common/enums/bun-type";

export interface BunModel{
  id: number;
  type: BunTypes;
  name: string;
  startPrice: number;
  currentPrice: number;
  nextPrice: number;
  nextDate: Date;
}
