import React, { useEffect } from 'react'
import axios from 'axios'

function AxiosExamle() {
  const[list, setList]=React.useState([])
  const[title, setTitle]=React.useState('')
  const[body, setBody]=React.useState('')
  const[newupdate, setNewupdate]=React.useState({
    title:'',
    body:''
  })
    useEffect(()=>{
       
          axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
         
         .then((res)=>{
  setList(res.data)
  console.log(res.data)
  
})
.catch((err)=>{
  console.log(err.message)
})

    
  },[])


  const handleAdd=()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title:title,
      body:body
    })
.then((resget)=>{
  setList([...list,resget.data])
setBody("")
setTitle("")
})
.catch((errget)=>{
  console.log(errget.message)

    })}

    const handleDelete=()=>{
      axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then((resdelete)=>{  
        console.log('Deleted',resdelete.data)
      })
      .catch((errdelete)=>{
        console.log(errdelete.message)
      })
    }
   



  return (
    <div>
      <table border={1}>
        <thead>
          <tr><th>
            ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {list.map((item)=>
            <tr key={item.id}>
              <td>
                
                {item.id}</td>
              {/* <td>{item.title}</td> */}
                <input type="text" value={item.title} />

              <td>{item.body}</td>
              <td><button>Update</button>
              <button onClick={handleDelete}>Delete</button></td>
            </tr>
          )}


          </tbody>
          </table> <br /><br />
          <button onClick={handleAdd}>Add data</button>
   <br />
          <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} placeholder='Enter title'/> <br /><br />
          <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Enter body'/> <br /><br />    
       
    </div>
  )
}

export default AxiosExamle