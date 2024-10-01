import { Controller, Get, Req, Session } from "@nestjs/common";
import { Request } from "express";

@Controller("points")
export class PointsController
{
  @Get()
  getSummary ( @Req() req: Request, @Session() session: Record<string, any> )
  {
    
    console.log(req);
    session.visits = session.visits ? session.visits + 1 : 1;
    return session;
  }
}