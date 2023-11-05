import mongoose from "mongoose";

const ListingScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      require: true,
    },
    addressCity: {
      type: String,
      required: true,
    },
    addressProvince: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    addressGoogle: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    amenityFurnished: {
      type: Boolean,
      required: true,
    },
    amenityParking: {
      type: Boolean,
      required: true,
    },
    amenityAC: {
      type: Boolean,
      required: true,
    },
    amenityWasher: {
      type: Boolean,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    agentProfile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingScheme);
export default Listing;
