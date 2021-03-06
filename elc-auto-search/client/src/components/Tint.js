import React from 'react';
import style from 'components/Tint.module.scss';

type Props = {
  isSearching: boolean
}

const Tint = ({isSearching}: Props) => isSearching ? <div className={style.tint} ></div> : null

export default Tint