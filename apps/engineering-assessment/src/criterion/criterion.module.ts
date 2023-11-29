import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CriterionModuleBase } from "./base/criterion.module.base";
import { CriterionService } from "./criterion.service";
import { CriterionController } from "./criterion.controller";
import { CriterionResolver } from "./criterion.resolver";

@Module({
  imports: [CriterionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CriterionController],
  providers: [CriterionService, CriterionResolver],
  exports: [CriterionService],
})
export class CriterionModule {}
