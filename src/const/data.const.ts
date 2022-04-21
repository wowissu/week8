import type { EquipmentQuery } from "@/types/data";

export enum SortingTypeEnum {
  ByPublishedTimeDesc = 0,
  ByPublishedTime = 1,
  ByRateDesc = 2,
  ByRate = 3,
  ByScoreDesc = 4,
  ByScore = 5,
  ByReviewCountDesc = 6,
  ByReviewCount = 7
}

export enum PriceTypeEnum {
  None = 0,
  Between_0_to_1000 = 1,
  Between_1001_to_3000 = 2,
  Between_3001_to_5000 = 3,
  Higer_Than_5000 = 4,
}

export const defaultQuery: EquipmentQuery = {
  page: 1,
  size: 16,
  sortingType: SortingTypeEnum.ByPublishedTimeDesc,
  rate: undefined,
  brandId: undefined,
  eqptCategoryDetailIds: [],
  characteristicIds: [],
  keyWord: undefined,
  priceType: undefined
};