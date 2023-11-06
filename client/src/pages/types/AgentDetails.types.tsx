export interface IAgentDetails {
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

export const InitialAgentDetails: IAgentDetails = {
  firstname: "",
  lastname: "",
  title: "",
  username: "",
  email: "",
  avatar: "",
  phone: "",
  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    portfolio: "",
  },
};
