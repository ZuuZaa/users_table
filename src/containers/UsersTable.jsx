import { Table } from "components/Table";

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
 
export const UsersTable = (data) => {
    return (
        <Table columns={tableHeader} rows={data}/>
    )
}