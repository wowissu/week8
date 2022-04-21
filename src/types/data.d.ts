import { PriceTypeEnum, SortingTypeEnum } from "../const/data.const";

export interface Brand {
  brandId: number;
  name: string;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface CategoryDetail {
  categoryId: number;
  categoryDetailId: number;
  categoryDetailName: string;
}

export type CategoryHasChildren = Category & { children: CategoryDetail[], };

export interface Characteristic {
  characteristicId: number;
  name: string;
}

export interface EquipmentCategory {
  categoryId: number;
  categoryName: string;
  categoryDetailId: number;
  categoryDetailName: string;
}

export interface EquipmentItem {
  publishedEqptId: number;
  brandName: string;
  publishedEqptName: string;
  pictureUrls: string[];
  characteristics: [
    string
  ] | null;
  reviewCount: number;
  averageRate: number;
  averageScores: number;
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  createDate: string;
}

export interface Pagiantion {
  size: number;
  page: number;
  sortingType: SortingTypeEnum;
}

// for search equipments
export interface EquipmentQuery extends Pagiantion {
  rate: number | undefined;
  characteristicIds: Characteristic["characteristicId"][];
  brandId: Brand["brandId"] | undefined;
  eqptCategoryDetailIds: CategoryDetail["categoryDetailId"][];
  keyWord: string | undefined;
  priceType: PriceTypeEnum | undefined;
}

// for create equipments
export interface EquipmentCreation {
  eqptName: string;
  userId: number;
  brandId?: Brand["brandId"];
  eqptCategoryDetailId?: CategoryDetail["categoryDetailId"];
  eqptCharacteristicIds: Characteristic["characteristicId"][];
  weight?: number;
  price?: number;
  pictureUrls: string[];
  rating: number;
  comment?: string;
}

export interface Review {
  userId: 0;
  publishedEqptId: EquipmentItem["publishedEqptId"];
  price: number;
  rate: number;
  comment: string;
  createDate: string;
}

export interface EquipmentItemDetail {
  publishedEqptId: EquipmentItem["publishedEqptId"];
  brandName: string;
  publishedEqptName: string;
  categoryName: string;
  categoryDetailName: string;
  characteristics: string[];
  weight: number;
  createDate: string;
  reviews: Review[];
  pictureUrls: string[];
}