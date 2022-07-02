import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parserFile = csvParse();
    parserFile.on("data", async (line) => {
      console.log(line);
    });
    stream.pipe(parserFile);
  }
}

export { ImportCategoryUseCase };
