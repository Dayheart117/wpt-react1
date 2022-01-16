import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Menu(props) {

  const {
    menuList = [],

  } = props;

  return (
    <div className={styles["menu-container"]}>
      {
        menuList.map(item => {
          return (
            <Link to={item.path} key={item.name}>
              <div className={ styles["menu-item"] }>
                <div
                  className={ styles["menu-item-icon"] }
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
                <div className={ styles["menu-item-text"] }>
                  {item.title}
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
}

export default Menu;