import * as React from "react";
import DeleteItem from "./DeleteItem";
import ShowItem from "./SeeItem";
import EditItem from "./EditItem";

const Actions = {
  DeleteItem,
  SeeItem: ShowItem,
  EditItem,
};

export default Actions;
