export type PageResponse<T> = {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  activePage : number;
};
export const defaultPageResponse = {
  content: [],
  page:{
    size: 0,
        number: 0,
    totalElements: 0,
    totalPages: 0
  },
  activePage: 0
}
