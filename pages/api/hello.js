// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/connectdb";

export default async function hello(req, res) {
  await dbConnect();
  res.status(200).json({ name: "John Doe" });
}
