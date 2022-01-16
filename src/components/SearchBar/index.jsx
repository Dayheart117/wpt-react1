import React from 'react';
import styles from './index.module.css';

function SearchBar(props) {
  const {
    hasBtn = true,
    btnText = '搜索',
    placeholder = '搜索',
    onSubmit = (value) => {
      console.log(value);
    },
  } = props;

  const inputRef = React.useRef(null);

  const keyDownHandler = (e) => {
    if (e.key !== 'Enter') return;
    onSubmit(inputRef.current === '' ? placeholder : e.target.value);
  };

  return (
    <div className={ styles['search-container'] }>
      <div className={ styles['search-content'] }>
        <svg t="1642213995434" className={ styles['search-icon'] } viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="8203">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6c3.2 3.2 8.4 3.2 11.6 0l43.6-43.5c3.2-3.2 3.2-8.4 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            p-id="8204" fill="#cdcdcd"/>
        </svg>

        <input
          type="text"
          ref={ inputRef }
          className={ styles['search-input'] }
          placeholder={ placeholder }
          onKeyDown={ e => keyDownHandler(e) }
        />
        {
          hasBtn && <div className={ styles['submit-btn'] } onClick={() => onSubmit(inputRef.current === '' ? placeholder : inputRef.current.value)}>
            { btnText }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchBar;