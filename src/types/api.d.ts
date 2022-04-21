

export interface ApiResponseError {
  key: string,
  code: string,
  message: string
}

export interface ApiResponse<T> {
  data: T;
  error: ApiResponseError[] | null,
  status: number;
}