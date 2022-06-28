import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository, ICreateCategoryDTO };
