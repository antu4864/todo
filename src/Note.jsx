import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import images from "./images.jpg";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const getLocalItems =()=>{
    let list = localStorage.getItem('lists');

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else{
        return[];
    }
}

const Note  = () =>{

   const [inputData, setinputData] = useState(" ");
   const [items, setItems] = useState(getLocalItems());
   const [toggleSubmit, setToggleSubmit] = useState(true);
   const [isEditItem, setisEditItem] = useState(null);

   const additem = () =>{
        if(!inputData){
            alert('pls fii data');
        }else if(inputData && !toggleSubmit){
                setItems(
                    items.map((elem) => { 
                       if (elem.id === isEditItem){
                           return { ...elem, name:inputData}
                       }  
                       return elem;
                    })
                )
                setToggleSubmit(true);
                setinputData('');
                setisEditItem(null);
        
        }else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setinputData('');
        }
   }
        const deleteItem=(index)=>{
            const updateditems = items.filter((elem)=>{
                return index !== elem.id ;
            });
            setItems(updateditems);
        }

        const editItem=(id)=>{
            let newEditItem = items.find((elem) => {
                    return elem.id === id
            });
            setToggleSubmit(false);

            setinputData(newEditItem.name)

            setisEditItem(id)
      
        }

        useEffect(()=>{
            localStorage.setItem('lists', JSON.stringify(items))
        }, [items]);
    return(
        <>
                <div className="main">
                    <div className="main1">
                        <figure>
                        <img src={images} alt="logo" className="main_img"/>
                        <figcaption>Add Your List ✍️</figcaption>
                        </figure>
                    </div>

                    <div >
                        <input type="text" placeholder="  Enter your list ...   " className="input"
                         value={inputData} onChange={(e) => setinputData(e.target.value)}/> 

                         {
                             toggleSubmit ?  <AddIcon onClick={additem}/> :
                             <EditIcon  onClick={additem}/>
                         }
                       

                    </div>

                    <div> 
                        {
                            items.map((elem) => {
                                return(
                                    <div className="datashow" key={elem.id}>
                                    <h3>{elem.name}
                                    <EditIcon onClick={()=> editItem(elem.id)}/> 
                                    <DeleteIcon onClick={()=> deleteItem(elem.id)}/></h3>
                                                                   
                                </div>
                                )
                            })
                        }
                      
                    </div>
                </div>

               
                
        </>
    );
};
export default Note;





