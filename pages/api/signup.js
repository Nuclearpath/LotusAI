<<<<<<< HEAD
import connectDatabase from "../../lib/connectDatabase";
import CredUser from "../../lib/models/CredUser";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  try {
    await connectDatabase();
    await CredUser.sync();

    const newUser = await CredUser.create({
      email: req.body.email,
      name: req.body.name,
      role: req.body.role,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err,
=======
import dbConnect from "../../utils/connectdb";
import User from "../../models/user";
export default async function signup(req, res) {
  if (req.method == "POST") {
    try {
      await dbConnect();
      const { email, password, name, method } = req.body;
      const user = await User.findOne({ email: email, method: method });
      if (user) {
        return res.status(400).json({
          success: false,
          message: "user already exists",
        });
      }
      const newUser = new User({
        name,
        email,
        password,
        method,
      });
      await newUser.save();
      return res.status(201).json({
        success: true,
        message: "user created successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    return res.status(404).json({
      success: false,
      message: "not found",
>>>>>>> a109bdbb902fee9a1c3d88099a4c4066c9d8e377
    });
  }
}
