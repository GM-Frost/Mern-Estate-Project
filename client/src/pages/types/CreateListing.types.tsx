export interface IListingFormData {
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
  bathrooms: string;
  bedrooms: string;
  kitchen: string;
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
}
export const lFormInitialValue: IListingFormData = {
  imageUrls: [],
  title: "",
  type: "",
  description: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  kitchen: "",
  regularPrice: 50,
  discountPrice: 0,
  totalArea: 0.0,
  totalUnit: 0,
  addressCity: "",
  addressProvince: "",
  addressLine: "",
  addressGoogle: "",
  amenityParking: false,
  amenityFurnished: false,
  amenityAC: false,
  amenityHeating: false,
  amenityWasher: false,
  amenityDryer: false,
  amenityWifi: false,
  amenityGym: false,
  amenitySwimming: false,
  amenitySecurity: false,
};
