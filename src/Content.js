import React,{useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './AddTask.js';
import Search from './Search.js';

// import UseStateDemo from './hooks/UseStateDemo';

const Content = (props) => {
    const [todolist,settodolist] = useState(JSON.parse(localStorage.getItem('todolist')))
    
    const [search,setSearch]=useState("") //passing to search_bar.js
    // [
    //     {
    //         id:1,
    //         descr:"Complete the Yoga",
    //         checked:false
    //     },
    //     {
    //         id:2,
    //         descr:"Pray to God",
    //         checked:false
    //     },
    //     {
    //         id:3,
    //         descr:"Complete today Assignment",
    //         checked:false
    //     },
    //     {
    //         id:4,
    //         descr:"Go To Gym",
    //         checked:true
    //     }
    //     ]


        const  handleChange=  (id)=>{
          const newTodoList =  todolist.map((row)=>{
            return row.id===id ? { ...row, checked:!row.checked} : row
          })

           settodolist(newTodoList);
           localStorage.setItem('todolist',JSON.stringify(newTodoList))
        //   console.log(todolist)
          // todolist.map((row)=>(
          //    row.id===id ? row.checked= !row.checked : row
          // ))
        }
        
        const handleDelete = (id)=>{
          const newTodoList =  todolist.filter((row)=>(row.id!==id))
          settodolist(newTodoList)
          console.log(todolist)
          localStorage.setItem('todolist', JSON.stringify(newTodoList))
        }

    return(
        <main className='container'>
           {/* <Search search={search} setSearch={setSearch} ></Search> */}
           <Search  search={search} setSearch={setSearch} ></Search>


          <AddTask todolist={todolist} settodolist={settodolist}></AddTask>
          
            <ul className='container list-group'>
                {
                  

                    todolist.filter(
                        (item)=> (item.descr.toLowerCase().includes(search.toLowerCase()))
                    ).
                    map(
                        (item) =>

                            <li key={item.id} className='list-group-item'>
                            <input type="checkbox" name="checkbox" id="" onChange={()=>{handleChange(item.id)}} 
                            className="me-2 form-check-input" checked={item.checked} />
    
                            <label className="col-11">{item.descr}</label>  
                            <FaTrashAlt role='button' onClick={()=>(handleDelete(item.id)) }  />
                            {/* <button onChange={()=>{handleChange(item.id)} } >  <FaTrashAlt  ></FaTrashAlt></button> */}
                            </li>
                            
                        // <div>
                        //     <li key={item.id}>
                        //     <input type="checkbox" name=""  />
                        //         {item.descr}
                        //         <button>Delete</button>
                        //     </li>
                        //     </div>
                    )
                }

            </ul>
            {todolist.length===0 && <p>done </p>}
            {/* <UseStateDemo/> */}
           
        </main>
    );
}

export default Content;