import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
//import {ValidationPipe} from "./pipes/validation.pipe";
//import {JwtAuthGuard} from "./auth/jwt-auth.guard";


async function start() {
  const PORT = process.env.PORT || 6000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
      .setTitle('Example Backend')
      .setDescription('REST API backend nestjs+postgres')
      .setVersion('1.0.0')
      .addTag('GRD')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  //app.useGlobalGuards(JwtAuthGuard)
  //app.useGlobalPipes(new ValidationPipe())
  app.enableCors();

  await app.listen(PORT, () => console.log(`Server started on PORT http://127.0.0.1:${PORT}`))
}

start()