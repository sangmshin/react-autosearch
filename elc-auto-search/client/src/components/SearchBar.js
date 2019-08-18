import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import style from 'components/SearchBar.module.scss';

type Props = {|
  searchItems:  (term: string)=> void, 
  addAllResults: ()=> void, 
  searching:  (bool: boolean)=> void, 
  setVisible:  (bool: boolean)=> void
|}

const SearchBar = ({searchItems, addAllResults, searching, setVisible}: Props) => {

  const search_bar: ?HTMLInputElement  = useRef();

  const [ searchTerm: string, changeTerm: ()=> void ] = useState('')


  const handleChange = ({target: { value }}: SyntheticInputEvent<HTMLInputElement>): void => changeTerm(value)
  

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addAllResults()
    changeTerm('')
    search_bar.current.blur();
  }

  useEffect(()=> {
    
    search_bar.current.addEventListener('focus', ()=> {
      searching(true);
      document.body.style.overflow = 'hidden'
    })
    
    search_bar.current.addEventListener('blur', ()=> {
      searching(false)
      setVisible(false)
      changeTerm('')
      document.body.style.overflow = 'auto'

    })

  }, [])

  useEffect(()=> {
    if(searchTerm.length >= 3) {
      searchItems(searchTerm)
      setVisible(true)
    }else{
      setVisible(false)
    }
  }, [ searchTerm ])


  

  return (
    <Row className={style.wrapper}>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-5">
        <form onSubmit={handleSubmit} width="300">
          <input type="text" className={style.search_bar} ref={search_bar} value={searchTerm} onChange={handleChange} placeholder="Enter search term"></input>
        </form>
      </Col>
    </Row>
  )
}

export default SearchBar;