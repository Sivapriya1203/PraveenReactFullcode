import React, { useState } from 'react'

function SpreadOperator() {
    const[input,setInput]=useState("")
    const[list,setList]=useState([])
const handleClick=()=>{
    setList([...input,list])
    setInput("")
}
const handleClick1=()=>{
    setList([...list,input])
    setInput("")
}

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>First</button>
        <button onClick={handleClick1}>LAST</button>
        <h1>{list}</h1>
    </div>
  )
}

export default SpreadOperator






// import React, { useState } from 'react';

// function SpreadOperator() {
//   const [input, setInput] = useState('');
//   const [list, setList] = useState([]);

//   const handleClick = () => {
  
//       setList([input, ...list]); // add at the start
//       setInput('');
    
//   };

//   const handleClick1 = () => {
 
//       setList([...list, input]); // add at the end
//       setInput('');
    
//   };

//   return (
//     <div>
//       <style>{`
//         .container {
//           max-width: 400px;
//           margin: 80px auto;
//           padding: 20px;
//           background: #f9fafb;
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           font-family: 'Poppins', sans-serif;
//         }

//         h2 {
//           color: #333;
//           margin-bottom: 20px;
//         }

//         .input-group {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//         }

//         input {
//           width: 80%;
//           padding: 10px;
//           border: 2px solid #ddd;
//           border-radius: 8px;
//           font-size: 16px;
//           outline: none;
//           transition: border 0.3s ease;
//         }

//         input:focus {
//           border-color: #007bff;
//         }

//         .button-group {
//           display: flex;
//           gap: 10px;
//         }

//         button {
//           padding: 8px 16px;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           color: white;
//           font-weight: bold;
//           transition: background 0.3s ease;
//         }

//         .first-btn {
//           background-color: #28a745;
//         }

//         .first-btn:hover {
//           background-color: #218838;
//         }

//         .last-btn {
//           background-color: #007bff;
//         }

//         .last-btn:hover {
//           background-color: #0069d9;
//         }

//         .list {
//           list-style-type: none;
//           padding: 0;
//           margin-top: 20px;
//           text-align: left;
//         }

//         .list li {
//           background: #ee0808ff;
//           border: 1px solid #ddd;
//           border-radius: 6px;
//           padding: 8px 12px;
//           margin-bottom: 8px;
//           transition: transform 0.2s ease;
//         }

//         .list li:hover {
//           transform: translateX(5px);
//         }
//       `}</style>

//       <div className="container">
//         <h2>Spread Operator Example</h2>
//         <div className="input-group">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter something..."
//           />
//           <div className="button-group">
//             <button onClick={handleClick} className="first-btn">
//               Add First
//             </button>
//             <button onClick={handleClick1} className="last-btn">
//               Add Last
//             </button>
//           </div>
//         </div>
//         <ul className="list">
//           {list.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SpreadOperator;
