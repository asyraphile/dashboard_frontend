import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import AddTable from "pages/AddTable";
import TableList from "pages/TableList";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "addtable",
      element: <AddTable />,
    },
    {
      path: "tablelist",
      element: <TableList />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
