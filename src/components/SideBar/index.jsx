import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function SideBar(props) {
  const { data } = props;
  return (
    <div className={ styles['bar-container'] }>
      <div className={ styles['bar'] }>
        {
          data.map((item, index) => (
            <a key={ index } className={ styles['bar-item'] } href={ '#' + index }>
              { item.name }
            </a>
          ))
        }

      </div>
      <div className={ styles['content'] }>
        {
          data.map((item, index) => (
            <div key={ index } className={ styles['content-item'] } id={ index }>
              <h3>{ item.name }</h3>
              <div className={ styles['types-item'] }>
                {
                  item.data.map((item, index) => {
                    return (
                      <Link key={ index } to={ item.path } className={ styles['types-item-item'] }>
                        <div className={ styles['item-img'] } style={{background: `url(${item.img}) no-repeat center center`}}/>
                        <div className={ styles['item-text'] }>{ item.name }</div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default SideBar;