import { GridColDef } from "@mui/x-data-grid";
import Actions from "../../components/Actions";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Post Id",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "title",
    headerName: "Title",
    width: 170,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 280,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "show",
    headerName: "",
    sortable: false,
    width: 180,
    headerAlign: "center",
    align: "center",
    renderCell: Actions.SeeItem,
  },
  {
    field: "update",
    headerName: "",
    sortable: false,
    width: 180,
    headerAlign: "center",
    align: "center",
    renderCell: Actions.EditItem,
  },
  {
    field: "delete",
    headerName: "",
    sortable: false,
    width: 180,
    headerAlign: "center",
    align: "center",
    renderCell: Actions.DeleteItem,
  },
];

export default columns;
