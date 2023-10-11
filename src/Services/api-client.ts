import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "493e1da4bcf14908a834c6956bd08de7",
  },
});
