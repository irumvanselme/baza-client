// Next.js API route support: https://nextjs.org/docs/api-routes/introducti

import { db } from "../../server/db";

export default async (req, res) => {
    const topics = await db.collection("topics").find().toArray()
    res.json(topics)
};
