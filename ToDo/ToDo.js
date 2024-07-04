import React, {useEffect, useState} from "react"
import "./style.css"
const ToDo = () => {
    const getLocalData = () =>{
        const list = localStorage.getItem("todolist")
        if(list){
            return JSON.parse(list)
        }
        else{
            return []
        }
    }
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData)
    const [EditItem, setEditItem] = useState("")
    const [togglebtn, settogglebtn] = useState(false)

    // to add the data
    const addItem = () =>{
        if(!inputData){
            alert("Fill the data")
        }
        else if (inputData && togglebtn){
            setItems(
                items.map((index)=>{
                    if(index.id===EditItem){
                        return{...index, name:inputData}
                    }
                    return index
                })
            )
            setInputData("")
            setEditItem(null)
            settogglebtn(false)
        }
        else{
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    // edit the items
    const editItem = (index) =>{
        const item_todo = items.find((cuEl)=>{
            return cuEl.id===index
        })
        setInputData(item_todo.name)
        setEditItem(index)
        settogglebtn(true)
    }

    // to delete a item
    const deleteItem= (index) =>{
        const updatedItem = items.filter((curElem)=>{
            return curElem.id !== index
            }
        )
        setItems(updatedItem)
    }

    // to remove all
    const removeAll = () =>{
        setItems([])
    }

    //adding local storage
    useEffect(()=>{
        localStorage.setItem("todolist", JSON.stringify(items))
    }, [items])
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={"./images/todo.svg"} alt="todo logo"/>
                        <figcaption>Add your items here 🤟🏻</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items"
                               value={inputData}
                               onChange={(event)=>setInputData(event.target.value)}
                               className="form-control"/>
                        {togglebtn ? <i className="fa-solid fa-edit add-btn" onClick={addItem}></i>:
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                    </div>
                    {/*show our items*/}
                    <div className="showItems">
                        {items.map((currEle, index)=>{
                            return(
                                <div className="eachItem" key={currEle.id}>
                                    <h3>{currEle.name}</h3>
                                    <div className="todo-btn">
                                        {/*<image alt={currEle.name}></image>*/}
                                        <i className="fa-solid fa-edit add-btn" onClick={()=>editItem(currEle.id)}></i>
                                        <i className="fa-solid fa-trash-alt add-btn" onClick={()=>deleteItem(currEle.id)}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>EMPTY LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo
