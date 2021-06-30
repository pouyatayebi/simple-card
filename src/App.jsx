import {useState,useEffect} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';




function App() {
  const [users,setUsers]=useState([]);
  const [searchField,setSearchField]=useState('')
  const filterdUser=users.filter(
    user=>{
      const name=user.first_name+user.last_name+user.email
      return name.toLowerCase().includes(searchField)
    }
    )
 
  useEffect(()=>{fetch('https://reqres.in/api/users')
  .then(response => response.json()
  .then(json => setUsers(json.data)))},[])
  

  return (
    <div className="App">
          <h1>Rolling Card</h1>
          <SearchBox placeholder="search user" onChange={e=>setSearchField
            (e.target.value)} />  
          

          <CardList data={filterdUser} />
    </div>
  );
}

export default App;
