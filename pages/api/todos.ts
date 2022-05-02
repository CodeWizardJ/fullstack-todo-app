import prisma from '../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { UserSession } from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const session = (await getSession({ req })) as UserSession;

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'GET') {
    const todos = await prisma?.todo.findMany({
      where: {
        userId: session.userId,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
        {
          isCompleted: 'desc',
        },
      ],
    });

    res.status(200).json(todos);
  }
}
