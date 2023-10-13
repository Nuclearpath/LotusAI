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
    });
  }
}
