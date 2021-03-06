import React from 'react';
import Item from 'components/Item';
import type { ItemType } from 'components/Item';
import {Row} from 'react-bootstrap';

type Props = {
  list: Array<ItemType>
}

const ItemList = ({list}: Props) => {
  console.log(list)

  return (
    <Row className="bg-white">
      {
        list.length !== 0 
        && list.map( (item, i)=> (
              <Item key={i} item={item}/>
            ))
      }
    </Row>
  )
}

export default ItemList;