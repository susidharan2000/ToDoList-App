import React from "react";
import { useState } from "react";

const Card = ({list,setList,edit,setedit,setIndex}) => {
  const [filter,setFilter] = useState("All");

  const handleFilterChange =(e) =>{setFilter(e.target.value)};

  const handleStatusChange = (index,e) =>{
    const updatedList = [...list];
    updatedList[index].Status = e.target.value;
    setList(updatedList);
  };
  const handleClickRemove = (index) => {
    setList(val=>val.filter((_,i)=>(index !== i)));
  }

  const handleClickEdit =(index,e) =>{
    setedit(!edit);
    setIndex(index);
  }
  return (
    <>
      <div className="Filter-container">
        <div>My Todos</div>
        <div>
          Status Filter:
          <select value={filter} style={{backgroundColor:(filter==="All" || filter === "Not Completed")?"#ff8888":"rgb(92, 229, 167)",border:"none",color:"white", width:filter==="All"?"40px":"130px",height:"35px"}} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
              {
              list.map((element, index) => {
                return (
                  (filter === "All" || filter === element.Status) &&
                  <div key={index} className="col mb-5">
                    <div className="card h-100">
                      <div className="card-body p-4">
                        <div className="text-center"></div>
                        <p>Name:{element.Title}</p>
                        <p>Description:{element.Description}</p>
                          Status:
                          <select value={element.Status} style={{
                            border:"none",
                              backgroundColor:
                                element.Status === "Completed"
                                  ? "green"
                                  : "#ff8888",
                                  color:"white"
                            }}  onChange={()=>handleStatusChange(index,event)}>
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                          </select>
                          <div className="buttons  mt-4">
                          <button className="btn btn-success" onClick={()=>handleClickEdit(index,event)}>Edit</button>{" "}
                          <button className="btn btn-danger" onClick={()=>handleClickRemove(index)}>Delete</button>
                          </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
