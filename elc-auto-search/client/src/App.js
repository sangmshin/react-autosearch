import React, {useState} from 'react';
import './App.css';
import { SearchBar, ItemList, Tint, Preview } from 'components';
import type { ItemType } from 'component/Item'
import axios from 'axios';
import { Container } from 'react-bootstrap';

type Res = {
  data: Array<ItemType>,
  status: number,
  statusText: string,
  header: {'content-type':string},
  config: Object,
  request: Object
}

export default () => {

  const [ items: Array<ItemType>, addItems: ()=> void ] = useState([])
  const [ results: Array<ItemType>, setResults: ()=> void ] = useState([])
  const [ isSearching: boolean, searching: ()=> void ] = useState(false);
  const [ isVisible: boolean, setVisible: ()=> void ] = useState(false)

  const handleSubmit = async (searchTerm): void => {

    try{

      let response: Res = await axios.get(`http://localhost:5000/?search=${searchTerm}`)
      console.log(response);
      addItems(response.data)

    }catch(err){
      console.log(err)
    }

  }

  const addAllResults = (): void => setResults(items)

  return (
    <Container fluid>
      <SearchBar searchItems={handleSubmit} addAllResults={addAllResults} searching={searching} setVisible={setVisible}/>
      <Preview list={items} isVisible={isVisible} />
      <Tint isSearching={isSearching}/>
      <ItemList list={results}/>
    </Container>
  )
}
