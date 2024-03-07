import { useEffect,useState} from "react";
//import { useNavigate } from "react-router-dom";

const useFetch = () =>{
  // const navigate = useNavigate();
    const [data,setData] =useState();
   

 
   useEffect( () =>{
    if(data){
        fetch(data)
        .then(response => response.json())
        .then((response) => {
       setData(response);
    })     
    }   
    },[data]);
   
return [data,setData];
}
export default useFetch;
