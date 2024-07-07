import { useState } from "react";
import "./Style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdditem = (event) => {
    event.preventDefault();
    setItems(() => [...items, {id:crypto.randomUUID(),title:newItem,checked:false}]);
    setNewItem("");
  };


  const handleDeleteItem = (index) => {
    setItems(()=>items.filter((item)=>item.id!==index))
    alert('Item deleted')
  };

  const toggleTodo=(id,checked)=>{
    setItems(()=>items.map((item)=>{
      if(item.id===id){
        return {...item,checked}
      }
      return item
    }))
  };


  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(name) => setNewItem(name.target.value)}
          ></input>
        </div>
        <button className="btn" type="submit" onClick={handleAdditem}>
          Add
        </button>
      </form>
      <h1 className="header">Todo-Application</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <label>
              {item.title}
              <input type='checkbox' checked={item.checked} onChange={(e)=>{toggleTodo(item.id,e.target.checked)}}></input>
              <button
                className="btn btn-danger"
                text="submit"
                onClick={()=>{handleDeleteItem(item.id)}}
              >
                Delete
              </button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
