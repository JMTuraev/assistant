import {React, useState, useEffect} from "react";
import { useForm,  } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [lists, setLists]=useState([])
  const [items, setItems] = useState([]);


  

//   const getData=async()=>{
//     const res= await fetch('http://localhost:3000/api/hello')
//     const {data}=await res.json()
//     console.log(data);
//     setLists(data)
//   }

useEffect(() => {
  fetch("http://localhost:800/api/hello", )
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result.users);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {

      }
    )

    console.log(items);

}, [])
  

  const onSubmit = async (data) =>{

    const res = await fetch('http://localhost:800/api/hello',{
      method : 'POST',
      body : JSON.stringify(data)
    }).then(res => res.json())
    .then(
      (result) => {

        setItems(result.users);

        console.log(items);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {

      }
    )
    
  } 

 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div>

      {Array.isArray(items) &&

        
            <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} {item.email}
              </li>
            ))}


          </ul>
        }
         
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

