import React from 'react'
import {  SEARCH_RESULT_URL } from '../../../const/const'
import "./style.css"

export default function SerachResBox({data}) {
    console.log(SEARCH_RESULT_URL+""+data.cloudinaryId);
  return (
    <div className='search-result-box-container'>
        <div className="search-result-box">
            <div className="search-result-img-container">
                <img src={SEARCH_RESULT_URL+""+data.cloudinaryId} alt="" className="search-result-img" />
            </div>
            <div className="search-result-box-content">
                {data.text}
            </div>
        </div>
    </div>
  )
}
