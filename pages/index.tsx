import type { NextPage } from 'next'
import React from 'react';
import Products from './Products'
import styled from 'styled-components';
import Navbar from '../components/nav-bar/nav-bar'
import Layout from '../layout-component/Layout';

const Title = styled.h1`
  color: red;
`;
const Home: NextPage = () => {
  return (
    <Layout>
        <Title>Title</Title>
      {/* <Products/> */}
    </Layout>
  )
}

export default Home
