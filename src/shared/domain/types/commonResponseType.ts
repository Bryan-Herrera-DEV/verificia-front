export type TCommonCorrectResponse<T> = Promise<ICommonCorrectResponse<T>>;

export interface ICommonCorrectResponse<T> {
  message: string;
  data?: T;
}
