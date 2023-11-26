export interface IListing {
  _id: string;
  imageUrls: string[];
  agentProfile: string;
  type: string;
  regularPrice: number;
  title: string;
  addressLine: string;
  addressCity: string;
  addressProvince: string;
  bedrooms: number;
  bathrooms: number;
  totalArea: number;
}

export interface IPropertyListing {
  description: string;
  totalArea: number;
  totalUnit: number;
  discountPrice: number;
  bedrooms: string;
  bathrooms: string;
  kitchen: string;
  amenityParking: boolean;
  amenityFurnished: boolean;
  type: string;
  amenityWifi: boolean;
  amenityAC: boolean;
  amenitySwimming: boolean;
  amenitySecurity: boolean;
  amenityGym: boolean;
  amenityDryer: boolean;
  amenityHeating: boolean;
  amenityWasher: boolean;
}
export interface IListingAgentDetails {
  firstname: string | undefined;
  lastname: string | undefined;
  username: string | undefined;
  title: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
  phone: string | undefined;
  socialLinks: {
    linkedin: string | undefined;
    twitter: string | undefined;
    instagram: string | undefined;
    facebook: string | undefined;
    portfolio: string | undefined;
  };
}
