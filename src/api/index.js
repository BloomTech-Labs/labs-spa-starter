import axios from "axios";
// we will define a bunch of API calls here.

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then((response) => response.data);
};

export { sleep, getExampleData };
