import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { TEndpointResponse } from "../lib/types";
import { RegisterSchema } from "../schemas";

@Controller("auth")
export class AuthController
{
  @Post("register")
  register ( @Req() req: Request ): TEndpointResponse<never>
  {
    const { success, error, data } = RegisterSchema.safeParse(req.body);
    
    if ( !success )
      return { success: false, error: error?.message };
    
    const { email, password, passwordConfirm, name } = data;
    
    if ( password !== passwordConfirm )
      return { success: false, error: "Passwords do not match" };
    
    return { success: true };
  }
}