import React from "react";
import "./PListStyles.css"
import Sidebar from "../../dashboard/sidebar/Sidebar"
import Navbar from "../../dashboard/navbar/Navbar"
import Datatable from "../../dashboard/datatable/Datatable"

const PList = () => {
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

export default PList