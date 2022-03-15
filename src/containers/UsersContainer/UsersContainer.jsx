import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_SELECTORS, USERS_ACTIONS } from "store/users";
import { NavBar } from "components/NavBar";
import { Box } from "@mui/system";
import { UsersTable } from "containers/UsersTable";


export const UsersContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(USERS_SELECTORS.getUsers);

    useEffect(() => {
        dispatch(USERS_ACTIONS.fetchUsers())
    }, [dispatch])

    console.log('users', users)

    return (

        <Box sx={{ backgroundColor: '#f5f5f5', height: '100vh', padding: 2 }}>
            <NavBar data={users} />
            <UsersTable data={users} />
        </Box>
    )
}
