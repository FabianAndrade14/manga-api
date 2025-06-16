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
      port: 1433,
      username: 'user',
      password: 'password',
      database: 'MangaDB',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true,
      options: {
        encrypt: false
      }
    }),
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
