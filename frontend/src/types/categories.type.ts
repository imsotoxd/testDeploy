export interface Categorie {
  id: string;
  name: string;
  description: string;
  custom: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type QueryCategoryResponse = {
  data: Categorie[];
  error?: string;
}