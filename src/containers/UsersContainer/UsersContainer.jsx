import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_SELECTORS, USERS_ACTIONS } from "store/users";
import { UsersTable } from "containers/UsersTable";


export const UsersContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(USERS_SELECTORS.getUsers);
    const loading = useSelector(USERS_SELECTORS.getUsersLoading);
    useEffect(() => {
        dispatch(USERS_ACTIONS.fetchUsers())
    }, [dispatch])

    return (
        <UsersTable data={users} loading={loading}/>
    )
}
