import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button,
} from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [productsDetail, setproductsDetail] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((res) => setProducts(res.data.data));
    productService
      .getProductDetails()
      .then((res) => setproductsDetail(res.data.data));
  });

  const mergedData = products.map((product) => {
    const productDetail = productsDetail.find(
      (detail) => detail.productId === product.productId
    );
    return { ...product, ...productDetail };
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok Adedi</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
            <TableHeaderCell> </TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mergedData.map((product) => (
            <TableRow key={product.productId}>
              <TableCell>
                <Link to={`/products/${product.productId}`}>
                  {product.productName}
                </Link>
              </TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.unitsInStock}</TableCell>
              <TableCell>{product.categoryName}</TableCell>
              <TableCell>
                <Button onClick={() => handleAddToCart(product)}>
                  Sepete Ekle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <MenuItem as='a' icon>
                  <Icon name='chevron left' />
                </MenuItem>
                <MenuItem as='a'>1</MenuItem>
                <MenuItem as='a'>2</MenuItem>
                <MenuItem as='a'>3</MenuItem>
                <MenuItem as='a'>4</MenuItem>
                <MenuItem as='a' icon>
                  <Icon name='chevron right' />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
