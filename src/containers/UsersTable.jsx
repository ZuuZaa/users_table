import { Table } from "components/Table";

const tableHeader = [
  {
    key: "actions",
    label: "",
    width: 50
  },
  {
    key: "name",
    label: "Name",
    width: 170 
  },
  {
    key: "email",
    label: "Email address",
    width: 170 
  },
  {
    key: "phone",
    label: "Phone Number",
    width: 170 
  },
  {
    key: "website",
    label: "Official Site",
    width: 170 
  },
]

export const UsersTable = (data) => {
  return (
    <Table columns={tableHeader} rows={data} />
  )
}