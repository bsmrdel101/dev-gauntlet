import { Res } from '$lib/scripts/config/api';
import { client } from '$lib/scripts/config/pool.server';
import type { RequestHandler } from '@sveltejs/kit';


const parseOutput = (res: any) => {
  const data = res.rows[0];
  return {
    ...data,
    challengeContent: data.challengeContent.map((content: any) => {
      return {
        ...content,
        tools: JSON.parse(content.tools),
        acceptanceCriteria: JSON.parse(content.acceptanceCriteria),
        instructions: JSON.parse(content.instructions),
        stretchGoals: JSON.parse(content.stretchGoals)
      };
    })
  }
}

export const GET: RequestHandler<any> = async ({ params }) => {
  try {
    const { id } = params;
    const res = await client.query(`
    SELECT 
      "challenges".*,
      jsonb_agg(
        jsonb_build_object(
          'id', "challenge_content"."id",
          'tools', "challenge_content"."tools",
          'acceptanceCriteria', "challenge_content"."acceptanceCriteria",
          'instructions', "challenge_content"."instructions",
          'stretchGoals', "challenge_content"."stretchGoals"
        )
      ) AS "challengeContent"
    FROM "challenges"
    JOIN "challenge_content" ON "challenges"."id" = "challenge_content"."challengeId"
    WHERE "challenges"."id" = $1
    GROUP BY "challenges"."id";
    `, [id]);
    return Res({ body: parseOutput(res) });
  } catch (error) {
    return Res({ status: 500 });
  }
};
