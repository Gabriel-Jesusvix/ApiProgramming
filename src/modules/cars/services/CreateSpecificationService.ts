import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAllreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAllreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
