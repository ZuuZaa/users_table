import { Table } from "components/Table";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, IconButton } from "@mui/material";



export const UsersTable = (data) => {
  const tableHeader = [
    {
      key: "actions",
      label: "",
      minWidth: { minWidth: 50 },
      render(id) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-start' alignItems='center' id={id}>
            <IconButton >
              <ArrowForwardIosIcon sx={{fontSize: 20}} />
            </IconButton>
          </Box>
        )
      }
    },
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

  return (
    <Table columns={tableHeader} rows={data}/>
  )
}