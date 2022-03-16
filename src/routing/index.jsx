import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { MainLayout } from "containers/MainLayout";
import { SearchResultsPage } from "pages/SearchResultsPage";

export const Routing = () => {

    return (
        <Routes>
            {/* <Route path="/users/:id" render={(props) => <UserPage {...props} />}/> */}
            
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/results" element={<SearchResultsPage/>}/>
            </Route>
        </Routes>
    )
} 