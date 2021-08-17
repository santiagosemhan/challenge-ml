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

  let categories = [];
  if (response.results.length > 0) {
    const responseCategories: { path_from_root: Record<string, unknown>[] } =
      await got(
        `${ML_API}/categories/${response.results[0].category_id}`
      ).json();

    categories = responseCategories.path_from_root.map((c) => c.name);
  }

  const results = {
    author: {
      name: 'Santiago',
      lastname: 'Semhan',
    },
    categories,
    items: response.results.map((product) => parseMLProductToItem(product)),
  };
  return res.status(200).json(results);
};

export default handler;
