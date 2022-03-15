import { dividerClasses, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_SELECTORS, USERS_ACTIONS } from "store/users";
import { Table } from "components/Table";
import { NavBar } from "components/NavBar";
import { Box } from "@mui/system";

const tableHeader = [
    {
        key: "name",
        label: "Name",
        minWidth: { minWidth: 170 }
      },
      {
        key: "email",
        label: "Email address",
        minWidth: { minWidth: 170 }
      },
      {
        key: "phone",
        label: "Phone Number",
        minWidth: { minWidth: 170 }
      },
      {
        key: "website",
        label: "Official Site",
        minWidth: { minWidth: 170 }
      },
]


export const UsersContainer = () => {

    // const columns = useMemo(
    //     () => [
    //         {
    //             Header: "Users",
    //             columns: [
    //                 {
    //                     Header: "Name",
    //                     accessor: "user.name"
    //                 },
    //                 {
    //                     Header: "E-mail address",
    //                     accessor: "user.email"
    //                 },
    //                 {
    //                     Header: "Phone Number",
    //                     accessor: "suser.phone"
    //                 },
    //                 {
    //                     Header: "Official Site",
    //                     accessor: "user.website",
    //                     Cell: ({ cell: { value } }) => value ? { value } : "-"
    //                 },
    //             ]
    //         }
    //     ]
    // )

    const dispatch = useDispatch();
    const users = useSelector(USERS_SELECTORS.getUsers);


    useEffect(() => {
        dispatch(USERS_ACTIONS.fetchUsers())
    }, [dispatch])

    console.log('users', users)

    return (
        <Box sx={{backgroundColor:'#f5f5f5', height: '100vh', padding: 2}}>
            <NavBar/>
            <Table columns={tableHeader} />
        </Box>
    )
}
