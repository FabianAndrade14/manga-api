import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-P28TB49', // Tu nombre de servidor
      database: 'MangaDB', // Asegúrate que la base existe
      synchronize: true, // Solo para desarrollo
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      extra: {
        options: {
          trustedConnection: true, // ✅ Para autenticación de Windows
          trustServerCertificate: true, // ✅ Para evitar errores SSL
        },
      },
    }),
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
