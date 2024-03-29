import React, { useRef, useState } from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
import { modifyURL } from '../../util/util'
import { AUTOSUGESSTION_URL } from '../../const/const'
import SerachResBox from './component/serachResBox'
export default function Search() {
  const [search_res, setsearch_res] = useState([])
  const location = useSelector((store) => store.location.location)
  let autosugesstion_url = modifyURL(AUTOSUGESSTION_URL, location.data[0].geometry.location.lat, location.data[0].geometry.location.lng)

  let inputRef = useRef()

  const fetchData = async (e) => {
    let input_val = inputRef.current.value;
    let sugeestion_url = autosugesstion_url.replace("SEARCHED_STR", input_val)
    try {
      let res = await fetch(sugeestion_url)
      let data = await res.json()
      setsearch_res(data?.data?.suggestions)
    } catch (error) {
      console.error(error);
    }
  }
  const debouce = (func, delay)=>{
    let timeout;
    return ()=>{
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        func()
      }, delay);
    }
  }

  const loadData = debouce(fetchData, 1000)


  return (
    <div className='search-page'>
      <div className="search-section">
        <div className="search-section-input">
          <input ref={inputRef} type="text"
            placeholder='Search for Restaurants and foods'
            className='search-input-bar'
            name="" id="" onChange={loadData} />
        </div>
        <div className="search-result-container">
          <div className="search-result-list">
            {
              search_res.map((result) => <SerachResBox data={result} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
