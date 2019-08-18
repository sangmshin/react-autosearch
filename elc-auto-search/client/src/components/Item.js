import React from 'react';
import { Col, Image } from 'react-bootstrap';
import style from 'components/Item.module.scss';

type ItemType = {
  about: string,
  isActive: "true" | "false",
  name: string,
  picture: string,
  price: string,
  _id: string,
  tags: string[],
}

type Props = {
  item: ItemType
}


const Item = ({item}: Props) => {
  return (
    <Col xs={6} sm={6} md={6} lg={4} xl={3} className="col-12">
      <div className={style.wrapper}>
        <h3>{item.name}</h3>
        <Image src={item.picture} alt={item.name} width="100px" className={style.product_img} fluid/>
        <p className="text-right">{item.price}</p>
        <hr></hr>
      </div>
    </Col>
  )
}

export type { ItemType }
export default Item