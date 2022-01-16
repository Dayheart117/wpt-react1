import React from 'react';
import SearchBar from './../../components/SearchBar';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import SideBar from "../../components/SideBar";


const Classification = () => {
  const data = [
    {
      name: '推荐分类',
      data: [
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
        {
          name: '翡翠',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1002.jpg?t=12',
          path: '/classification/1',
        },
      ]
    },
    {
      name: '玉翠珠宝',
      data: [
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
        {
          name: '和田玉',
          img: 'https://cdn.weipaitang.com/res/img/category20180803/1_1001.jpg?t=12',
          path: '/classification/2',
        },
      ]
    }
  ]

  return (
    <div>
      <div className={ styles['search-bar'] }>
        <SearchBar
          placeholder={ '南疆石狮子头23' }
          hasBtn={ false }
        />
      </div>
      <div className={ styles['content'] }>
        <SideBar
          data={ data }
        />
      </div>

    </div>
  )
}


export default Classification;