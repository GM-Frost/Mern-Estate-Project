export interface IPropertyList {
  _id: string;
  title: string;
  description: string;
  type: string;
  addressCity: string;
  addressProvince: string;
  addressLine: string;
  addressGoogle: string;
  regularPrice: number;
  discountPrice: number;
  totalArea: number;
  totalUnit: number;
  bathrooms: number;
  bedrooms: number;
  kitchen: number;
  amenityParking: boolean;
  amenityFurnished: boolean;
  amenityAC: boolean;
  amenityHeating: boolean;
  amenityWasher: boolean;
  amenityDryer: boolean;
  amenityWifi: boolean;
  amenityGym: boolean;
  amenitySwimming: boolean;
  amenitySecurity: boolean;
  propertyType: string;
  imageUrls: string[];
  userRef: string;
  agentProfile: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
