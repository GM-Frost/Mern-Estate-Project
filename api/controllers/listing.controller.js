import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    //create listing
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

//delete listing
export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(401, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(error);
  }
};

//UPDATE LISTING
export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

//GET LISTINGS

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

//Get ALL Listings
export const getAllListings = async (req, res, next) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

//SEARCH GET LISTINGS
export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    let amenityFurnished = req.query.amenityFurnished;
    if (amenityFurnished === undefined || amenityFurnished === "false") {
      amenityFurnished = { $in: [false, true] };
    }

    let amenityParking = req.query.amenityParking;
    if (amenityParking === undefined || amenityParking === "false") {
      amenityParking = { $in: [false, true] };
    }

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["Sale", "Rent"] };
    }

    let propertyType = req.query.propertyType;
    if (propertyType === undefined || propertyType === "all") {
      propertyType = { $in: ["House", "Condo", "Apartment"] };
    }

    let addressCity = req.query.addressCity;
    if (addressCity === undefined || addressCity === "all") {
      addressCity = {
        $in: [
          "Toronto",
          "Vancouver",
          "Calgary",
          "Ottawa",
          "Winnipeg",
          "Montreal",
          "Edmonton",
          "QuebecCity",
        ],
      };
    }

    let bedrooms = {};
    const bedroomsParam = req.query.bedrooms;

    if (bedroomsParam) {
      if (bedroomsParam === "all") {
        bedrooms = { $in: [1, 2, 3, 4, 5] };
      } else if (bedroomsParam === "1") {
        bedrooms = 1;
      } else if (bedroomsParam === "2") {
        bedrooms = 2;
      } else if (bedroomsParam === "3") {
        bedrooms = 3;
      } else if (bedroomsParam === "4") {
        bedrooms = 4;
      } else if (bedroomsParam === "4+") {
        bedrooms = { $gte: 4 };
      }
    }

    const listings = await Listing.find({
      title: { $regex: searchTerm, $options: "i" },
      amenityParking,
      amenityFurnished,
      type,
      propertyType,
      bedrooms,
    })
      .sort({
        [sort]: order,
      })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
