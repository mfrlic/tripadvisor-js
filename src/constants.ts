const TRIPADVISOR_API_URL = "https://api.content.tripadvisor.com/api/v1";
const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

const fetchOptions: RequestInit = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

export { TRIPADVISOR_API_URL, TRIPADVISOR_API_KEY, fetchOptions };
