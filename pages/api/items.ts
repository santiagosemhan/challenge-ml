import { NextApiRequest, NextApiResponse } from 'next';
import got from 'got';
import { parseMLProductToItem } from '../../utils/index';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { ML_API } = process.env;
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({
      error: 'Missing query parameter: q',
    });
  }

  const response: any = await got(`${ML_API}/sites/MLA/search`, {
    searchParams: { q: q as string },
  }).json();

  const results = {
    author: {
      name: 'Santiago',
      lastname: 'Semhan',
    },
    categories: [],
    items: response.results.map((product: any) =>
      parseMLProductToItem(product)
    ),
  };
  return res.status(200).json(results);
};

export default handler;
