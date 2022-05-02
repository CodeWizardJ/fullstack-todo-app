import { PrismaClient } from '@prisma/client';

// This is how prisma recommends handing too many connections at once

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient | undefined;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query'],
    });
  }

  prisma = global.prisma;
}

export default prisma;
