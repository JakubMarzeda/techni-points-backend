import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PointsController } from "./points/points.controller";
import { AuthController } from './auth/auth.controller';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [],
  controllers: [ AppController, PointsController, AuthController, StudentsController ],
  providers: [ AppService ],
})
export class AppModule
{
}
