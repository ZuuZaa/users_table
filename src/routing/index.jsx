import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { SearchResultsPage } from "pages/SearchResultsPage";

export const Routing = () => {

    return (
        <Routes>
            <Route path='/results' element={< SearchResultsPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
} 