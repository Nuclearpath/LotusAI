// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
<<<<<<< HEAD
// import { create } from 'zustand';
import connectDatabase from "../../lib/connectDatabase";
import User from "../../lib/models/GoogleUser";
export default async function handler(req, res) {
  try {
    await connectDatabase();
    await User.sync();
    // const jane = await User.create({ name:"satya",email:"xample@gmail.com",role:"admin" });
    res.status(200).json({ name: jane });
  } catch (err) {
    console.log(err);
  }
=======

import dbConnect from "../../utils/connectdb";

export default async function hello(req, res) {
  await dbConnect();
  res.status(200).json({ name: "John Doe" });
>>>>>>> a109bdbb902fee9a1c3d88099a4c4066c9d8e377
}
