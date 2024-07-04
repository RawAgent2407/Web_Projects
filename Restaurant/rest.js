import React, {useState} from "react"
import "./style.css"
import Menu from "./menuAPI"
import MenuCard from "./MenuCard"
import Navbar from "./navbar";

const uniquelist =[
    ...new Set(
        Menu.map((currEle)=>{
            return currEle.category
        })
    ), "All"
]
// console.log(uniquelist)


const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)     // useState is used to manage data
    const [menuList] = useState(uniquelist)
    const filterItem = (category) => {          // to select break, lunch onclick
        if (category==='All'){
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((currElem)=>{
            return currElem.category === category
        })
        setMenuData(updatedList)
    }
    // console.log(menuData)
    return(
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
