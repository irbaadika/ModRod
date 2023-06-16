import React from "react";
import "./PListStyles.css"
import Sidebar from "../../dashboard/sidebar/Sidebar"
import Navbar from "../../dashboard/navbar/Navbar"
import Datatable from "../../dashboard/datatable/DatatablePart"

const PListPart = () => {
  return (
    <div className="pList">
      <Sidebar/>
      <div className="pListContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default PListPart