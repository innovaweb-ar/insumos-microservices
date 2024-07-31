import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {


  const logger = new Logger('main');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
  {
    transport: Transport.TCP,
    options:{
      port: envs.port
    }
  });

  app.useGlobalPipes( 
    new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    }) 
   );

  //await app.listen(envs.port);

  //app.startAllMicroservices(); podria tener un microservicio y comunicación por apirest

  //Logger.log(`App runnig on port ${envs.port}`);
  
   logger.log(`Insumos Microservice running on port ${envs.port}`);

}
bootstrap();
