// import './App.css';

import Content from './Content';
import Footer from './Footer';
import Header from './Header'

export default function App(){
//     var namelist=["vamsi","abdulla","bruh"]
//     // const myName="jay"
//     const [firstname,lastname]=namelist;
//     const changeName=()=>{
//         let index=Math.floor(Math.random()*namelist.length)
//         return namelist[index]
//     }
//    const person={
//     lastname:"bye",
//     firstname:"hii",
//     fullname: function (){
//         return this.firstname+" "+this.lastname
//     }
//    }
    return ( 
       <div className="App">
            
           <Header/>
           <Content color="green"/>
           <Footer/>

       </div>);
}
//  {/* {changeName()} */}
//            {/* {firstname + " "+ lastname} */}
//            {/* {person.fullname()} */}