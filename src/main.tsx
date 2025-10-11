import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage.tsx'
import "./styles/common.css";
import { ErrorPage } from './pages/ErrorPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ErrorPage />} />
        <Route path="/signin" element={<ErrorPage />} />
        {/**
         * This route will catch all unmatched paths and render the Error component.
         */}
        <Route path="/*" element={<ErrorPage />} /> 
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
