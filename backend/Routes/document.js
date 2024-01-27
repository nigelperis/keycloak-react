import express from "express";
const router = express.Router();

let data = ["tracker", "history", "logs", "projects","teams","clients","categories","reports"];

const getDocuments = async (req, res) => {
  try {
    const decodedToken = req.decodedToken;
    // console.log('Decoded Token:', decodedToken);

    const clientRole = Object.values(decodedToken.resource_access)[0]?.roles;
    console.log('Client Role:', clientRole);

    const roleMappings = {
      admin: data,
      finance: ["tracker", "history", "teams"],
      manager: ["tracker", "history", "logs", "projects"],
      employee: ["tracker", "history", "my projects", "reports"],
    };
    const filteredData = roleMappings[clientRole] || [];

    
    const uniqueFilteredData = Array.from(new Set(filteredData));
    res.status(200).send(uniqueFilteredData);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getDocuments);
export default router;
