/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CriterionService } from "../criterion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CriterionCreateInput } from "./CriterionCreateInput";
import { CriterionWhereInput } from "./CriterionWhereInput";
import { CriterionWhereUniqueInput } from "./CriterionWhereUniqueInput";
import { CriterionFindManyArgs } from "./CriterionFindManyArgs";
import { CriterionUpdateInput } from "./CriterionUpdateInput";
import { Criterion } from "./Criterion";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CriterionControllerBase {
  constructor(
    protected readonly service: CriterionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Criterion })
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CriterionCreateInput): Promise<Criterion> {
    return await this.service.create({
      data: {
        ...data,

        areaId: data.areaId
          ? {
              connect: data.areaId,
            }
          : undefined,
      },
      select: {
        areaId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Criterion] })
  @ApiNestedQuery(CriterionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Criterion[]> {
    const args = plainToClass(CriterionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        areaId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Criterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CriterionWhereUniqueInput
  ): Promise<Criterion | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        areaId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Criterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CriterionWhereUniqueInput,
    @common.Body() data: CriterionUpdateInput
  ): Promise<Criterion | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          areaId: data.areaId
            ? {
                connect: data.areaId,
              }
            : undefined,
        },
        select: {
          areaId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Criterion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CriterionWhereUniqueInput
  ): Promise<Criterion | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          areaId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
