import { PrismaClient } from "@prisma/client";

// Avoid instantiating too many instances of Prisma in development (required with next hot reload, idk how about nest)

declare global
{
  var prisma: PrismaClient | undefined;
}

export const db: PrismaClient = globalThis.prisma || new PrismaClient();

if ( process.env.NODE_ENV !== "production" )
  globalThis.prisma = db;