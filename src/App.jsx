import React,{ useState } from "react";
import Card from "./Components/Card";
import Input from "./Components/Input"
function App() {
  const [list,setList] = useState([]);
  const [title,setTitle] = useState("");
  const [des,setDes] = useState("");
  const [status,setStatus] = useState("Not Completed");
  const [edit,setedit] = useState(false);
  const [index,setIndex] = useState(null);
  console.log(list);
  return(<>
  <Input setList={setList} title={title} setTitle={setTitle} des={des} setDes={setDes} status={status} edit={edit} index={index} list={list} setedit={setedit}/>
  <Card list={list} setList={setList} status={status} edit={edit} setedit={setedit} setIndex={setIndex} />
  </>);
}

export default App
