import prisma from '../../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { UserSession } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!['POST'].includes(req.method || '')) {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const session = (await getSession({ req })) as UserSession;

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'POST') {
    const { title } = JSON.parse(req.body);

    if (!title) {
      return res.status(400).send('Bad Request');
    }

    const todo = await prisma?.todo.create({
      data: { title, userId: session.userId, isCompleted: false },
    });

    await prisma?.$disconnect;
    res.status(200).json(todo);
  }
}
