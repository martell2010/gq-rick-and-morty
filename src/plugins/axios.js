import axios from "axios";

const $axios = axios.create({
  baseURL: "https://rickandmortyapi.com/graphql",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { $axios };
