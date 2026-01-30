
// import React, { useEffect } from 'react'
// import axios from 'axios'

// function Crud() {
//     const[data,setData]=React.useState([]) 
//     const[display,setDisplay]=React.useState("")
//     const[title,setTitle]=React.useState("")
//     useEffect(()=>{
//             axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
//      .then((res)=>{
//         setData(res.data)
//  console.log(data);
 
        
//      }) 
//      .catch((err)=>(err.message))
//     },[])

// function added(){
//     axios.post("https://jsonplaceholder.typicode.com/todos",
//         {
//         title:display,
   
//      }  )   
//      .then((res)=>{
//            setData([...data, res.data])
//            setDisplay("")
        
// })
// .catch((err)=>(err.message)
// )}
// function update(id){
//     const updateuser =data.find((e)=>e.id===id)
//     axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,updateuser)
// .then(()=>{
//     alert("updated");
// })
// }    
//         function del(id){
//             axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//             .then(()=>{setData(data.filter((de)=>de.id !==id))})
//         }


//     return (
//     <div>
//         <table border={1}>
//             <thead>
//                 <tr>
//                     <th>ID</th>
        
//                     <th>title</th>
//                 </tr>
//                  </thead>
//                 <tbody>

// {data.map((e,index)=>
    
    
//         <tr key={index}>
//             <td>{e.id}</td>
           
//         <td><input type="text" value={e.title} 
//         onChange={(event)=>{setData(data.map((u)=>(u.id===e.id ?{...u,title:event.target.value}:u)))}} /></td>
    
        
//         <td><button onClick={()=>update(e.id)}>update</button></td>
//         <td><button onClick={()=>del(e.id)}>delete</button></td>
//         </tr>
// )}

//        </tbody>
           
//         </table>
//         <input type="text" onChange={(e)=>setDisplay(e.target.value)} value={display} />
//         <button onClick={added}>add</button>


//     </div>
//   )
// }

// export default Crud









import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Crud() {

const [list,setList]=useState([])
const[title,setTitle]=useState("")

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((res)=>{
        setList(res.data)
        console.log(res.data)
    })

},[])

const handleClick=()=>{
    axios.post("https://jsonplaceholder.typicode.com/todos",{
        title:title
    })
    .then((res)=>{
        setList([...list,res.data])
        setTitle("")
    })
}


  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>Title</th>
                </tr>
            </thead>
<tbody>
    {list.map((x,index)=>
    <tr key={index}>
        <td>{x.id}</td>
        <td>{x.title}</td>
    </tr>
    )}

</tbody>

        </table>


        <br />

        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br />
        <button onClick={handleClick}>CLICKing</button>
    


    </div>
  )
}

export default Crud