import axios from "axios";

export const makeModelsPost = async (postData) => {
    const res = await axios.post("http://127.0.0.1:5000/airbnb/api/v1/models/", postData);
    const data = await res.data;
    console.log(postData)
    return data;
  };

export const getStats = async () => {
  const res = await fetch("http://127.0.0.1:5000/airbnb/api/v1/stats/price");
  const data = await res.json();
  

  return data;
};

export const apart = async() => {
  const res = await fetch("http://127.0.0.1:5000/airbnb/api/v1/stats/apartment");
  const data = await res.json();


  return data;
};
export const neighbourhood = async() => {
  const res = await fetch("http://127.0.0.1:5000/airbnb/api/v1/stats/neighbourhood");
  const data = await res.json();


  return data;
};
export const superhost = async() => {
  const res = await fetch("http://127.0.0.1:5000/airbnb/api/v1/stats/host_is_superhost");
  const data = await res.json();


  return data;
};
export const accommodates = async() => {
  const res = await fetch("http://127.0.0.1:5000/airbnb/api/v1/stats/accommodates");
  const data = await res.json();


  return data;
};



