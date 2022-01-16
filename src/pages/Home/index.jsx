import React, { useState } from "react";

import ImgCard from "./../../components/ImgCard";
import WaterFall from "./../../components/WaterFall";
import Menu from './components/Menu';

import styles from './index.module.css';
import './global.css'
import SearchBar from "../../components/SearchBar";
import Gift from './components/Gift'

const createMockImgs = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    const isBig = (Math.random() > 0.5);
    if (isBig) {
      res.push({
        src: 'https://cdn.weipaitang.com/imgwebp/20201224ge2caqof-lrgg-oqtg-22vt-0ecah5hf4id0-W1125H2000/w/320',
        title: '大'
      });
    } else {
      res.push({
        src: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20211026/cb63efc70eae4fcf90758de5d3a6f860-W800H800/w/320',
        title: '小'
      })
    }

  }
  return res;
}

const useGetMenu = () => {
  return [ {
    title: "拍卖行",
    name: "auction",
    path: "/auction",
    icon: "https://cdn.weipaitang.com/sky/common/houtaitp/image/20211118/85bb79f75eb3496494b651f0ac0aaeb8-W212H212"
  }, {
    title: "众筹",
    name: "crowdfunding",
    path: "/crowdfunding",
    icon: "https://cdn.weipaitang.com/sky/common/houtaitp/image/20211118/6a40c4f071cf4b24aac67538be3639fe-W212H212"
  }, {
    title: "直播",
    name: "stream",
    path: "/stream",
    icon: "https://cdn.weipaitang.com/sky/common/houtaitp/image/20211118/38b7d5e9729141bca2db899bae6cdfd7-W212H212"
  }, {
    title: "鉴宝",
    name: "appreciate",
    path: "/appreciate",
    icon: "https://cdn.weipaitang.com/sky/common/houtaitp/image/20211118/0fd1833a7d9b4ba8ace73473f28231dc-W212H212"
  } ]
}

const useGetGift = () => {
  return [ {
    id: 1001,
    img: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20220107/759204df12304e4b94fa5916dba5fec3-W800H800/w/320',
    price: 19
  }, {
    id: 1002,
    img: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20211119/70f3844d64904e0297c0b3ed6a129ad3-W3200H3200/w/320',
    price: 19
  }, {
    id: 1003,
    img: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20220111/910e5147510848959ed9d156c4be57b8-W2569H2569/w/320',
    price: 168
  }, {
    id: 1004,
    img: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20211212/489261b60e9443a8b337d4d3efcec4fd-W3200H3200/w/320',
    price: 49
  }, {
    id: 1005,
    img: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20210722/d3c41ee0c4594c8b990a6598f4cdf9f1-W800H800/w/320',
    price: 49
  }, ]
}

const Home = () => {
  const [ imgList, setImgList ] = useState(createMockImgs());

  const handleLoadImgs = (entries, dataSource) => {
    if (entries[0].isIntersecting) {
      const newImgList = [ ...dataSource, ...createMockImgs() ];
      setImgList(newImgList);
    }
  }

  const menuList = useGetMenu();
  const giftList = useGetGift();

  return (
    <div className={ styles['page-home'] }>
      <div className={ styles['search-bar'] }>
        <SearchBar placeholder="紫砂壶全手工" hasBtn={ true }/>
      </div>

      <div className={ styles['menu'] }>
        <Menu menuList={ menuList }/>
      </div>

      <div className={ styles['newcomer-gift'] }>
        <Gift giftList={ giftList }/>
      </div>

      <WaterFall
        lineNo={ 3 }
        el="#observer-target-el"
        callback={ handleLoadImgs }
        dataSource={ imgList }
      />
      <div id="observer-target-el">别拉了，我是有底线的。</div>
    </div>
  );
};

export default Home;
