import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";

export const getAgentDetails = async (req, res, next) => {
  try {
    const listingId = req.params.listingId;

    //finding listing
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    //geting agentID from listing
    const agentUserId = listing.userRef;

    //finding agent details
    const agent = await User.findById(agentUserId);

    if (!agent) {
      return res.status(404).json({ error: "Agent not found" });
    }

    //Return Agent Details:
    const agentDetails = {
      firstname: agent.firstname,
      lastname: agent.lastname,
      username: agent.username,
      title: agent.title,
      email: agent.email,
      avatar: agent.avatar,
      phone: agent.phone,
      socialLinks: agent.socialLinks,
    };
    res.json(agentDetails);
  } catch (error) {
    next(error);
  }
};
