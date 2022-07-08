import { Specification } from "../entities/Specification";

interface ICreateSpecificaitonDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificaitonDTO): void;

  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificaitonDTO };
