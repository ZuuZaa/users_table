import { SearchReSultsContainer } from "containers/SearchResultsContainer";
import { useLocation } from "react-router-dom";

export const SearchResultsPage = () => {

    // const search = useLocation().search;
    // const qr=new URLSearchParams(search).get("qr");
    // console.log('qr1', qr)

    // const query = new URLSearchParams(history.location.search).get('qr');
    // console.log('qr2', query)
    return(
        <SearchReSultsContainer />
    )
}
