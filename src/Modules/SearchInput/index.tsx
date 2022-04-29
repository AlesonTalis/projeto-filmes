import { useState, useRef } from "react";

import { FaSearch } from "react-icons/fa";

import './style.css'

export default function SearchInput()
{
  const [focus,setFocus] = useState(false)
  const inputValue = useRef<HTMLInputElement>(null);

  return(
    <form action="/search" method="get" className={"search flex-row search-block" + (focus ? ' inp-focus' : '')}>
      <label 
        htmlFor="search"
        className="hiden"
        onClick={() => {
          setFocus(true)
        }}
      >
      </label>
      <input 
        type="search" 
        name="search" 
        id="search" 
        className="inp-text"
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        ref={inputValue}
      />
      <button 
        type="submit"
        className={"btn-icon"}
        onClick={(e) => {
          if (inputValue.current?.value === "")
          {
            e.preventDefault()
            inputValue.current.focus()
            setFocus(true)
            return
          }
          if (!focus)
          {
            setFocus(true)
            e.preventDefault()
          }
        }}
      >
        <FaSearch color="icon-color"/>
      </button>
    </form>
  )
}