import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from '../Welcome';
import SecuredPage from '../SecuredPage';

import NavBar from '../../components/AppBar'

import './styles.css';

function PublicPage() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/secured" element={<SecuredPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicPage;