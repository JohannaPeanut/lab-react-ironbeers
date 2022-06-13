import axios from "axios";

const apiURL = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export const getAllBeers = () => {
  apiURL.get("/").then((response) => {
    //console.log(response.data);
    return response.data;
  });
};

export const beerDetail = (beerId) => {
  apiURL.get(`/${beerId}`).then((response) => {
    return response.data;
  });
};
