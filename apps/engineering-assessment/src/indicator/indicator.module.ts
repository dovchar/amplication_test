import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IndicatorModuleBase } from "./base/indicator.module.base";
import { IndicatorService } from "./indicator.service";
import { IndicatorController } from "./indicator.controller";
import { IndicatorResolver } from "./indicator.resolver";

@Module({
  imports: [IndicatorModuleBase, forwardRef(() => AuthModule)],
  controllers: [IndicatorController],
  providers: [IndicatorService, IndicatorResolver],
  exports: [IndicatorService],
})
export class IndicatorModule {}
