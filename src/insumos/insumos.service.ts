import { HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class InsumosService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('InsumoService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Database conected');
    

  }
  create(createInsumoDto: CreateInsumoDto) {

    return this.insumo.create({
      data: createInsumoDto
    })
  }

  async findAll(paginationDto: PaginationDto) {

    const {page, limit} = paginationDto;


    const totalPage = await this.insumo.count({where:{available:true}});
    const lastPage = Math.ceil(totalPage / limit);

    return {
      data: await this.insumo.findMany({
      skip:(page-1) * limit,
      take:limit,
      where:{
        available:true
      }
    }),
    meta:{
      page:page,
      total:totalPage,
      lastPage
    }

  };
  }

  async findOne(id: number) {

    const insumo = await this.insumo.findUnique({
      where: {
        id,
        available:true
      }
    })

    if(!insumo){
      throw new RpcException({
        message:`Insunmo with id #${id} not found`,
        status: HttpStatus.BAD_REQUEST
      })
    }

    return insumo;

  }

  async update(id: number, updateInsumoDto: UpdateInsumoDto) {

    const {id: __, ...data} = updateInsumoDto;

    console.log(id);
    console.log(updateInsumoDto);

    await this.findOne(id);

    const updateInsumo = await this.insumo.update({
      where:{id},
      data:data
    })

    return updateInsumo;
  }

  async remove(id: number) {

    await this.findOne(id);
    const insumo = await this.insumo.update({
      where:{id},
      data:{
        available : false
      }
    })
    return insumo;
  }

  async validateProducts(ids: number[]){
    
    ids = Array.from(new Set(ids));

    const insumos = await this.insumo.findMany({
      where: {
        id: {
          in:ids
        }
      }
    });

    if(insumos.length != ids.length){
      throw new RpcException({
        message: 'Some insumos were not found',
        status: HttpStatus.BAD_REQUEST
      })
    }
    return insumos;
  }
}
