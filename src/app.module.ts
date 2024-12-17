import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudFilmesModule } from './crud-filmes/crud-filmes.module';

@Module({
  imports: [CrudFilmesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
