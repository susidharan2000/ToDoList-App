import React from "react";

const Input = ({setList,title,setTitle,des,setDes,status,edit,index,list,setedit}) => {
  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDesChange = (e) => {
    setDes(e.target.value);
  };
  const handleClickAdd = (e) => {
    const newObj = { Title:title, Description:des, Status:status };
    setList((pre) => [...pre, newObj]);
    setTitle("");
    setDes("");
    e.preventDefault();
  };
  const handleClickEdit = (e)=>{
    const updatedList = [...list];
  updatedList[index] = { Title: title, Description: des,Status:status};
  setList(updatedList);
  setedit(!edit);
  setTitle("");
  setDes("");
   e.preventDefault();
  }
  return (
    <div className="container">
      <h3 className="text-center">My todo</h3>
      <div className="input-continer">
        <form className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <div>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handletitleChange}
                placeholder="Todo Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-auto">
            <div>
              <input
                type="text"
                id="description"
                value={des}
                onChange={handleDesChange}
                placeholder="Todo Description"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-auto">
            {edit === false ?
            <button
              data-mdb-ripple-init
              onClick={handleClickAdd}
              type="submit"
              className="btnAdd btn btn-success"
            >
              Add Todo
            </button>:<button
              data-mdb-ripple-init
              onClick={handleClickEdit}
              type="submit"
              className="btnSave btn btn-warning"
            >
              Save
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
