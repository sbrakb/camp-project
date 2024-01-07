import axios from 'axios';

export default class ProductService {
  getProducts() {
    return axios.get('https://localhost:7102/api/Products/getall');
  }

  getProductDetails() {
    return axios.get('https://localhost:7102/api/Products/getproductdetails');
  }

  getProductById(id) {
    return axios.get('https://localhost:7102/api/Products/getbyid?id=' + id);
  }
}
