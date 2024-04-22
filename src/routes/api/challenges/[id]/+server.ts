import { Res } from '$lib/scripts/config/api';
import { client } from '$lib/scripts/config/pool.server';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler<any> = async ({ params }) => {
  try {
    const { id } = params;
    const res = await client.query(`
    SELECT 
      "challenges".*,
      jsonb_build_object(
        'id', "challenge_content"."id",
        'tools', "challenge_content"."tools",
        'acceptanceCriteria', "challenge_content"."acceptanceCriteria",
        'instructions', "challenge_content"."instructions",
        'stretchGoals', "challenge_content"."stretchGoals"
      ) AS "challengeContent"
    FROM "challenges"
    JOIN "challenge_content" ON "challenges"."id" = "challenge_content"."challengeId"
    WHERE "challenges"."id" = $1;
    `, [id]);
    return Res({ body: res.rows[0] });
  } catch (error) {
    console.error(error);
    return Res({ status: 500 });
  }
};
