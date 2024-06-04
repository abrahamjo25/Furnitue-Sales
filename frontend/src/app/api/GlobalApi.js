import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const getFooter = () => {
  return axiosClient.get("/api/footer?populate=*");
};
const getHero = () => {
  return axiosClient.get("/api/hero?populate=*");
};
const getProducts = (num) => {
  let limit = num ? num : 5;
  return axiosClient.get(
    `/api/products?populate=*&pagination[pageSize]=${limit}`
  );
};
const getBlog = () => {
  return axiosClient.get("/api/blogs?populate=*");
};
const getOurTeams = () => {
  return axiosClient.get("/api/our-teams?populate=*");
};
const getBanks = () => {
  return axiosClient.get("/api/banks");
};

const postOrder = (payload) => {
  return axiosClient.post("/api/orders", payload);
};
const getProductById = (id) => {
  return axiosClient.get(`/api/products/${id}?populate=*`);
};
const searchProduct = (searchParam) => {
  return axiosClient.get(
    `/api/products?populate=*&filters[attributes][ProductName][$contains]=${searchParam}&filters[ProductDescription][$contains]=${searchParam}`
  );
};

export default {
  getFooter,
  getHero,
  getProducts,
  getBlog,
  getOurTeams,
  getBanks,
  postOrder,
  getProductById,
  searchProduct,
};
