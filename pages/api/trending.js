// Next.js API route support: https://nextjs.org/docs/api-routes/introducti

import { db } from "../../server/db";

export default async (req, res) => {
    const topics = await db.collection("questions").find().limit(7).toArray()
    res.json(topics)
};
