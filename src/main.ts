import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as process from "node:process";

async function bootstrap ()
{
  const app = await NestFactory.create(AppModule);
  
  app.use(session({
    secret: process.env.SECRET, // used to sign the session ID cookie
    resave: false,
    saveUninitialized: false,
    proxy: process.env.NODE_ENV === "production", // trust X-Forwarded-* headers from proxy in production
    cookie: {
      secure: process.env.NODE_ENV === "production", // only send cookies over HTTPS in production
    }
  }));
  
  await app.listen(3000);
}

bootstrap().then();
