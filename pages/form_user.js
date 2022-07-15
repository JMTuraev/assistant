import {React, useState, useEffect} from "react";
import { useForm,  } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [lists, setLists]=useState([])

  

//   const getData=async()=>{
//     const res= await fetch('http://localhost:3000/api/hello')
//     const {data}=await res.json()
//     console.log(data);
//     setLists(data)
//   }
  

  const onSubmit = async (data) =>{

    const res = await fetch('api/hello', {
        method: 'POST',
        body: JSON.stringify({data}),
      });

     const {data1}=await res.json()
    console.log(data1);
    debugger
    setLists(data1)
    
  } 

 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div>
            {lists.map(e=><div ket={e.id}>{e.name}</div>)}
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("name")} />

        <input defaultValue="vadi" {...register("email")} />

        <input defaultValue="998" {...register("phone")} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
        </form>

        <div>
 
        </div>

    </div>
  );
}

