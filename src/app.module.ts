import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      database: 'MangaDB',
      options: {
        trustedConnection: true,
      },
      extra: {
        trustServerCertificate: true, // Evita errores de SSL
      },
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
