import React,{createContext,useState,useEffect} from 'react';
import {fetchDataApi} from '../utils/api'
export const Context=createContext();

export const AppContext=(props)=>{
    const [loading,setLoading]=useState(false)
    const [searchResult,setSearchResult]=useState([]);
    const [selectCategory,setSelectCategory]=useState("New");
    const [mobile,setMobile]=useState(false);
  

    useEffect(()=>{
      fetchSelectCategory(selectCategory)
    },[selectCategory])
    
    const fetchSelectCategory=(query)=>{
      setLoading(true);
      fetchDataApi(`search/?q=${query}`).then(({contents})=>{
        console.log(contents);
        setSearchResult(contents)
        setLoading(false);
      })
    }
    return <>
    <Context.Provider
      value={{
        loading,setLoading,searchResult,selectCategory,setSelectCategory,mobile,setMobile
      }}
    >
        {props.children}
    </Context.Provider>
    </>
}