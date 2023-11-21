import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../MainPage/Main';
import AllPhotoPage from '../AllPhotoPage/AllPhotoPage';
import SoloPage from '../AllPhotoPage/SoloPage';
import WeddingsPage from '../AllPhotoPage/WeddingsPage';
import FamilyPage from '../AllPhotoPage/FamilyPage';
import Kids from '../AllPhotoPage/Kids';
import Layout from '../Layout/Layout';
import AdminPanel from '../AdminPanel/AdminPanel';
//
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/all-photos" element={<AllPhotoPage />} />
        <Route path="/solo-photos" element={<SoloPage />} />
        <Route path="/wedding-photos" element={<WeddingsPage />} />
        <Route path="/family-photos" element={<FamilyPage />} />
        <Route path="/kids-photos" element={<Kids />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
