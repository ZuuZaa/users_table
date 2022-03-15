import { dividerClasses } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_SELECTORS, USERS_ACTIONS } from "store/users";
import { Table } from "./Table"






const tableHeader = [
    {
        key: "name",
        label: "Name",
        minWidth: { minWidth: 170 }
      },
      {
        key: "email",
        label: "E-mail address",
        minWidth: { minWidth: 170 }
      },
      {
        key: "phone",
        label: "Phone Number",
        minWidth: { minWidth: 170 }
      },
      {
        key: "website",
        label: "Web Site",
        minWidth: { minWidth: 170 }
      },
]


export const Users = () => {

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
        <>
            <div>users:</div>
            <Table columns={tableHeader} rows={users}/>
        </>
    )
}

