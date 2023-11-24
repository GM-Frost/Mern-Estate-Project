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

    const minPrice = parseInt(req.query.minPrice); // Minimum price
    const maxPrice = parseInt(req.query.maxPrice); // Maximum price
    const minArea = parseInt(req.query.minArea); // Minimum TotalArea
    const maxArea = parseInt(req.query.maxArea); // Maximum TotalArea

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

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["Sale", "Rent"] };
    }

    let propertyType = req.query.propertyType;
    if (propertyType === undefined || propertyType === "all") {
      propertyType = { $in: ["House", "Condo", "Apartment"] };
    }

    let amenityFurnished = req.query.amenityFurnished;
    if (amenityFurnished === undefined || amenityFurnished === "all") {
      amenityFurnished = { $in: [false, true] };
    }

    let amenityParking = req.query.amenityParking;
    if (amenityParking === undefined || amenityParking === "all") {
      amenityParking = { $in: [false, true] };
    }
    let bedrooms = req.query.bedrooms;
    if (bedrooms === undefined || bedrooms === "all") {
      bedrooms = { $in: [1, 2, 3, 4, 5] };
    } else if (bedrooms === "4+") {
      bedrooms = { $gte: 4 };
    }

    let bathrooms = req.query.bathrooms;
    if (bathrooms === undefined || bathrooms === "all") {
      bathrooms = { $in: [1, 2, 3, 4] };
    } else if (bathrooms === "3+") {
      bathrooms = { $gte: 3 };
    }

    const filterCriteria = {
      title: { $regex: searchTerm, $options: "i" },
      addressCity,
      type,
      propertyType,
      amenityFurnished,
      amenityParking,
      bedrooms,
      bathrooms,
    };

    // Construct the price filter object based on the provided minPrice and maxPrice
    const priceFilter = {};

    if (!isNaN(minPrice)) {
      priceFilter.$gte = minPrice;
    }
    if (!isNaN(maxPrice)) {
      priceFilter.$lte = maxPrice;
    }

    // If priceFilter has properties, add it to filterCriteria for regularPrice filtering
    if (Object.keys(priceFilter).length > 0) {
      filterCriteria.regularPrice = priceFilter;
    }

    // Construct the areaFilter filter object based on the provided minTotalArea and maxTotalArea
    const areaFilter = {};

    if (!isNaN(minArea)) {
      areaFilter.$gte = minArea;
    }
    if (!isNaN(maxArea)) {
      areaFilter.$lte = maxArea;
    }

    // If areaFilter has properties, add it to filterCriteria for totalArea filtering
    if (Object.keys(areaFilter).length > 0) {
      filterCriteria.totalArea = areaFilter;
    }

    const listings = await Listing.find(filterCriteria)
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
