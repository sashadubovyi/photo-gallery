import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Pregnant from 'components/AllPhotoPage/PregnantPage';
import Bussines from 'components/AllPhotoPage/BussinesPage';

const Main = lazy(() => import('../MainPage/Main'));
const AllPhotoPage = lazy(() => import('../AllPhotoPage/AllPhotoPage'));
const SoloPage = lazy(() => import('../AllPhotoPage/SoloPage'));
const WeddingsPage = lazy(() => import('../AllPhotoPage/WeddingsPage'));
const FamilyPage = lazy(() => import('../AllPhotoPage/FamilyPage'));
const Kids = lazy(() => import('../AllPhotoPage/Kids'));
const Layout = lazy(() => import('../Layout/Layout'));
const AdminPanel = lazy(() => import('../AdminPanel/AdminPanel'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/all-photos" element={<AllPhotoPage />} />
          <Route path="/solo-photos" element={<SoloPage />} />
          <Route path="/wedding-photos" element={<WeddingsPage />} />
          <Route path="/family-photos" element={<FamilyPage />} />
          <Route path="/kids-photos" element={<Kids />} />
          <Route path="/pregnant-photos" element={<Pregnant />} />
          <Route path="/bussines-photos" element={<Bussines />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
