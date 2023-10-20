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
    });
  }
}
