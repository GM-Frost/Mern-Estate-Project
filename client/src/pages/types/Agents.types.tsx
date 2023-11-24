export interface IAgent {
  socialLinks: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
    portfolio: string;
  };
  _id: string;
  firstname: string;
  lastname: string;
  title: string;
  username: string;
  email: string;
  avatar: string;
  phone: string;
}

export const agentinitialValue: IAgent = {
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    portfolio: "",
  },
  _id: "",
  firstname: "",
  lastname: "",
  title: "",
  username: "",
  email: "",
  avatar: "",
  phone: "",
};
