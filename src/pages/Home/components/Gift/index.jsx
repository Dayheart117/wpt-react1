import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Gift(props) {

  const {
    giftList=[]
  } = props;

  return(
    <div className={styles['gift-container']}>
      <div className={styles['gift-title']}>

      </div>
      <div className={styles['gift-item']}>
        {
          giftList.map(item => {
            return (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className={styles['gift-item-img']}>
                  <img src={item.img} alt=""/>
                </div>
                <div className={styles['gift-item-price']}>
                  <div>
                    { item.price }
                  </div>
                  <div>
                    免费
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gift;
