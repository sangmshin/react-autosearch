import React, {useState} from 'react';
import './App.css';
import { SearchBar, ItemList, Tint, Preview } from 'components';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default () => {

  const [items: Object[], addItems: Function] = useState([])
  const [results: Object[], setResults: Function] = useState([])
  const [isSearching: boolean, searching: Function] = useState(false);
  const [isVisible: boolean, setVisible: Function] = useState(false)

  const handleSubmit = async (searchTerm) => {

    try{

      let response = await axios.get(`http://localhost:5000/?search=${searchTerm}`)
      console.log(response.data);
      addItems(response.data)

    }catch(err){
      console.log(err)
    }

  }

  const addAllResults = () => setResults(items)

  return (
    <Container fluid>
      <SearchBar searchItems={handleSubmit} addAllResults={addAllResults} searching={searching} setVisible={setVisible}/>
      <Preview list={items} isVisible={isVisible} />
      <Tint isSearching={isSearching}/>
      <ItemList list={results}/>
    </Container>
  )
}
