const userModel = require("../schema/userSchema");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userModel.create({
      Name: req.body.Name,
      Email: req.body.Email,
      Contact: req.body.Contact,
      Password: req.body.Password,
    });
    if (user) {
      return res.status(201).json({ message: "sucessful", data: "user" });
    }
    return res.status(400).json({ message: "Not created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (user) {
      return res.status(201).json({ message: "sucessful", data: user });
    }
    return res.status(400).json({ message: "Not find" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
