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

export const getAllAgents = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const agents = await User.find(
      { title: "Agent" },
      {
        firstname: 1,
        lastname: 1,
        username: 1,
        title: 1,
        email: 1,
        avatar: 1,
        phone: 1,
        "socialLinks.linkedin": 1,
        "socialLinks.twitter": 1,
        "socialLinks.instagram": 1,
        "socialLinks.facebook": 1,
        "socialLinks.portfolio": 1,
      }
    ).limit(limit);

    res.status(200).json(agents);
  } catch (error) {
    next(error);
  }
};
