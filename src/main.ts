import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
dotenv.config();

async function start() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server started at port:${PORT}`);
  });
}
start();
