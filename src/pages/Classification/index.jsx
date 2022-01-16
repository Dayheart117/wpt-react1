import React from 'react';
import SearchBar from './../../components/SearchBar';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Classification = () => {
    return (
      <div>
        <div className={ styles['search-bar'] }>
          <SearchBar
            placeholder={'南疆石狮子头23'}
            hasBtn={false}
          />
        </div>
        <div className={styles['content']}>

        </div>

      </div>
    )
}


export default Classification;