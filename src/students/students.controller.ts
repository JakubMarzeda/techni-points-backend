import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { db } from "../lib/db";

@Controller("students")
export class StudentsController
{
  @Get()
  async getStudents ( @Req() req: Request )
  {
    return db.student.findMany();
  }
  
  @Get(":id")
  async getStudent ( @Req() req: Request )
  {
    return db.student.findUnique({ where: { id: req.params.id } });
  }
}