import React, { useState } from "react";
import Todolist from "./Todolist";
import AddIcon from '@material-ui/icons/Add';

const Note  = () =>{

    const [inputList , setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }; 

    const listOfItems = () =>{
        setItems((oldItems ) =>{
        return [...oldItems, inputList]
        }); 

        setInputList("");

    };

    return(
        <>
        <div>
            <div>
                <br />

                <h1>Todo list</h1>
                <br />
                <input type="text" placeholder="enter"
                value={inputList}
                onChange={itemEvent} />
                <button onClick={listOfItems}> Add to List</button>
                <button>  <AddIcon /></button>
                <ol>
                    

                    {
                        Items.map((itemval) => {
                            return <Todolist text={itemval} />
                        })
                    }
                </ol>
            </div>
        </div>
        </>
    );
};
export default Note;





