
const Search = ({search,setSearch}) => {
  
     

 const handleSearch = () => {
 }

    return(
    <form className="form-group" onSubmit={(event)=>{handleSearch(event)}} >
      <input 
      id="searchbar"
      value={search}
      autoFocus
      className='form-control'
      type="text"
      required
      placeholder='Search here'
      onChange={(event)=>{setSearch(event.target.value)}} //set the changes to local variable
      style={{ width: '99%' }} 
    />
   

    </form>
 );
}
 
export default Search;