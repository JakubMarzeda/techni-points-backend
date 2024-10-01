import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PointsController } from "./points/points.controller";
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [ AppController, PointsController, AuthController ],
  providers: [ AppService ],
})
export class AppModule
{
}
