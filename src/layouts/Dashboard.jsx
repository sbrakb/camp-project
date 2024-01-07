import Categories from './Categories';
import ProductList from '../pages/ProductList';
import React from 'react';
import { Button, GridRow, GridColumn, Grid } from 'semantic-ui-react';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right' />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Routes>
              <Route path='/' element={<Categories />} />
            </Routes>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route path='/' Component={ProductList} />
              <Route path='/products' Component={ProductList} />
              <Route path='/products/:id' Component={ProductDetail} />
              <Route path='/cart' Component={CartDetail} />
              <Route path='/product/add' Component={ProductAdd} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>

      <div>
        <Button content='Primary' primary />
        <Button content='Secondary' secondary />
      </div>
    </div>
  );
}
