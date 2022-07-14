import { BunTypes } from "src/app/common/enums/bun-type";

export interface BunModel{
  id: number;
  type: BunTypes;
  startPrice: number;
  currentPrice: number;
  nextPrice: number;
  timeToChange: Date;
}
