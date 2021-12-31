import GenericSerivce from "./GenericSerivce";

class ProductsService extends GenericSerivce {
  constructor() {
    super();
  }
  addProduct = (data) => {
    this.post("products", data);
  };
  deleteProduct = (_id) => {
    this.delete("products/" + _id);
  };
  updateProduct = (_id, data) => {
    this.put("products/" + _id, data);
  };
  getProducts = () => {
    this.get("products");
  };
  getSingleProduct = (id) => {
    this.get("products/" + id);
  };
}
let productsService = new ProductsService();
export default productsService;
