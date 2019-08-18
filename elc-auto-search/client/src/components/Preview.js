import React from 'react';
import Item from 'components/Item';
import {Row} from 'react-bootstrap';
import style from 'components/Preview.module.scss';

type Props = {
  list: Object[], isVisible: boolean
}

const Preview = ({list, isVisible}: Props) => {
  const firstThree: Object[] = list.slice(0, 4)

  return (
    <Row className={style.preview_wrapper} style={{visibility: isVisible ? 'visible' : 'hidden'}} >
      {
        firstThree.length !== 0 
        && firstThree.map( (item, i)=> (
            <Item key={i} item={item}/>
          ))
      }
    </Row>
  )
}

export default Preview;