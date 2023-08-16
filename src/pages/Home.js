// Home.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-container'>
      <div className='category-head'>
        <h1 className='category-heading'>Shop By Categories</h1>
        <NavLink to="/category/Smartphones" className='category-element'>Smartphones</NavLink>
        <NavLink to="/category/Laptops" className='category-element'>Laptops</NavLink>
        <NavLink to="/category/Fashion" className='category-element'>Fashion</NavLink>
        <NavLink to="/category/Groceries" className='category-element'>Groceries</NavLink>
      </div>
      <div className='main-img'>
        <img
          onClick={() => navigate("/products")}
          src='https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='hero'
          height={700}
        />
      </div>
    </div>
  );
}

export default Home;
