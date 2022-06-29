import { SpeceficationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const speceficationsRepository = new SpeceficationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  speceficationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
