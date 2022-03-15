import { UsersTable } from "containers/UsersTable";
import { NavBar } from "components/NavBar";

export const SearchReSultsContainer = (data) => {
    return(
        <>
        <NavBar/>
       <UsersTable 
       //data={data} 
       />
       </>
    )
}