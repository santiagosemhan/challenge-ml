import { NextApiRequest, NextApiResponse } from 'next';
import got from 'got';

import { parseMLProductToItem } from '../../../utils/index';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { ML_API } = process.env;
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({
      error: 'Missing query parameter: q',
    });
  }

  const response: {
    filters: any[];
    results: any[];
  } = await got(`${ML_API}/sites/MLA/search`, {
    searchParams: { q: q as string, limit: 4 },
  }).json();

  const categories = response.filters.find(
    (filter) => filter.id === 'category'
  );

  const results = {
    author: {
      name: 'Santiago',
      lastname: 'Semhan',
    },
    categories: categories?.values[0]?.path_from_root.map(
      (category) => category.name
    ),
    items: response.results.map((product) => parseMLProductToItem(product)),
  };
  return res.status(200).json(results);
};

export default handler;
