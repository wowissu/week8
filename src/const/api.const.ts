
import Axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type { ApiResponse } from "@/types/api";
import queryString from "query-string";
import type { Brand, Category, CategoryDetail, Characteristic, EquipmentCreation, EquipmentItem, EquipmentItemDetail, EquipmentQuery } from "@/types/data";

const api = Axios.create({
  baseURL: "/kon",
});

api.interceptors.response.use((response) => {
  if (response.data.status !== 200) {
    throw new ApiError("Status is not 200", response);
  }

  return response;
}, (error) => {
  throw error;
});

class ApiServices {

  constructor(public instance: AxiosInstance) {}

  public getBrands() {
    return this.instance.get<ApiResponse<Brand[]>>("/api/Brands");
  }

  public getCategories () {
    return this.instance.get<ApiResponse<Category[]>>("/api/Categories");
  }

  public getCategoryDetails () {
    return this.instance.get<ApiResponse<CategoryDetail[]>>("/api/CategoryDetails");
  }

  public getCharacteristics () {
    return this.instance.get<ApiResponse<Characteristic[]>>("/api/Characteristics", );
  }

  public getPublishedEqpt(query: EquipmentQuery) {
    return this.instance.get<ApiResponse<{ count: number, eqptList: EquipmentItem[], }>>("/api/PublishedEqpt", {
      params: query,
      paramsSerializer: params => {
        return queryString.stringify(params);
      }
    });
  }

  public getPublishedEqptDetail(id: EquipmentItem["publishedEqptId"]) {
    return this.instance.get<ApiResponse<EquipmentItemDetail>>(`/api/PublishedEqpt/${id}`);
  }

  public postPublishedEqpt(postdata: EquipmentCreation) {
    return this.instance.post<ApiResponse<null>>("/api/PublishedEqpt", postdata);
  }
}

export default new ApiServices(api);


export class ApiError extends Error {
  constructor(message: string, public response: AxiosResponse) {
    super(message);
  }
}