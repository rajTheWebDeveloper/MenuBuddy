import React,{useState} from 'react'
import MenuData from '../utils/data'
import Buttons from './Buttons'
import MenuCard from './MenuCard'

const Menu = () => {
    
    let [menuData,setMenuData]=useState(MenuData)
    let [filteredData,setFilteredData]=useState(menuData)
    let buttons=['All',...new Set(menuData.map((items)=>
    {
        return items.category
    }))]

    let filterMenu=(category)=>
    {
        if(category.toLowerCase()==='all')
        {
          setFilteredData(menuData)
          return
        }
        let filteredMenu=menuData.filter((items)=>
        {
          return items.category.toLowerCase()===category.toLowerCase()
        })
        setFilteredData(filteredMenu)
    }

  return (
    <main className="text-center mx-auto h-screen overflow-x-hidden w-[100vw] bg-gray-50 pb-16">
      <h2 className="my-4 mt-16 text-3xl text-sky-950">Our Menu</h2>
      <div className="underline p-[2px] w-[100px] bg-amber-500 text-center mx-auto mt-4 mb-8"></div>
      <Buttons buttons={buttons} filterMenu={filterMenu} />
      <MenuCard buttons={buttons} filteredData={filteredData} />
    </main>
  );
}
export default Menu