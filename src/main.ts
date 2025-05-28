import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: '*', // برای توسعه، اجازه دسترسی از همه مبدأها را می‌دهد. در محیط واقعی، دامنه فرانت‌اند خود را اینجا مشخص کنید.
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // متدهای HTTP که مجاز هستند
      credentials: true, // اگر از کوکی‌ها یا هدرهای احراز هویت استفاده می‌کنید (مانند JWT)
      allowedHeaders: 'Content-Type, Accept, Authorization', // هدرهای مجاز
    });
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true
    })
  )
}
bootstrap();
