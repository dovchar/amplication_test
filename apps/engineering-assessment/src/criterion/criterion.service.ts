import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CriterionServiceBase } from "./base/criterion.service.base";

@Injectable()
export class CriterionService extends CriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
