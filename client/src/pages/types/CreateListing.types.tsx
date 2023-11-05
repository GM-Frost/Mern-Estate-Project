export interface IListingFormData {
  imageUrls: string[];
  title: string;
  type: string;
  description: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  regularPrice: number;
  discountPrice: number;
  totalArea: number;
  totalUnit: number;
  addressCity: string;
  addressProvince: string;
  addressLine: string;
  addressGoogle: string;
  amenityParking: boolean;
  amenityFurnished: boolean;
  amenityAC: boolean;
  amenityWasher: boolean;
}
export const lFormInitialValue: IListingFormData = {
  imageUrls: [],
  title: "",
  type: "",
  description: "",
  propertyType: "",
  bedrooms: 1,
  bathrooms: 1,
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
  amenityWasher: false,
};
