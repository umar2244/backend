const User = require("../model/User");
const bcrypt = require("bcrypt");
var config = require("config");
const jwt = require("jsonwebtoken");
exports.register = async (req, res, next) => {
  try {
    let { email, password, name } = req.body;
    console.log(name);
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "user Already exist",
      });
    } else if (!email || !password) {
      return res.status(400).json({
        message: "All Feild must be filled",
      });
    } else {
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      user = await User.create({
        email,
        password,
        name,
      });

      return res.status(200).json({
        user,
        message: "success",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "user not exit",
      });
    } else {
      let Validpassword = await bcrypt.compare(password, user.password);
      if (!Validpassword) {
        return res.status(400).json({
          message: "plz enter correct password ",
        });
      } else {
        let token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          config.get("jwtPrivtekey")
        );
      return res.status(200).json({
        user,
        message: "successfully login",
        token,
      });
    }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
