import { UsersTable } from "containers/UsersTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_SELECTORS, USERS_ACTIONS } from "store/users";
import { QUERY_SELECTORS } from "store/query";
import _ from "lodash";

export const SearchReSultsContainer = () => {

    const dispatch = useDispatch();
    const users = useSelector(USERS_SELECTORS.getUsers);
    const loading = useSelector(USERS_SELECTORS.getUsersLoading);
    const query = useSelector(QUERY_SELECTORS.getQuery);
    const [searchedUsers, setSearchedUsers ]= useState([]);

    useEffect(() => {
        dispatch(USERS_ACTIONS.fetchUsers())

    }, [dispatch])

    useEffect(() => {
        !_.isEmpty(users) && setSearchedUsers(users.filter(element => element.name.includes(query))) ;
    }, [users,query])

    return (

      <UsersTable data={searchedUsers} loading={loading}/>
    )
}