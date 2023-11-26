import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API route is working",
  });
};

export const updateUserInfo = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          email: req.body.email,
          title: req.body.title,
          phone: req.body.phone,
          address: req.body.address,
          about: req.body.about,
          "socialLinks.linkedin": req.body?.socialLinks?.linkedin,
          "socialLinks.twitter": req.body?.socialLinks?.twitter,
          "socialLinks.instagram": req.body?.socialLinks?.instagram,
          "socialLinks.facebook": req.body?.socialLinks?.facebook,
          "socialLinks.portfolio": req.body?.socialLinks?.portfolio,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...userInfo } = updatedUser._doc;
    res.status(200).json(userInfo);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account"));

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

//USER LISTING

export const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings"));
  }
};
