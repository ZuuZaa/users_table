import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "components/Loading";

const MainLayout = lazy(() => import('containers/MainLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
const SearchResultsPage = lazy(() => import('pages/SearchResultsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loading />}>
                    <MainLayout />
                </Suspense>
            }>
                <Route path="/" element={
                    <Suspense fallback={<Loading />}>
                        <HomePage />
                    </Suspense>
                } />
                <Route path="/results" element={
                    <Suspense fallback={<Loading />}>
                        <SearchResultsPage />
                    </Suspense>
                } />
            </Route>
            <Route path='*' element={
                <Suspense fallback={<Loading />}>
                    <NotFoundPage />
                </Suspense>
            } />
        </Routes>
    )
} 