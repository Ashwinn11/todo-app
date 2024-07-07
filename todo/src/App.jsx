import { useState } from "react";
import "./Style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdditem = (event) => {
    event.preventDefault();
    setItems(() => [...items, newItem]);
    setNewItem("");
  };
  const handleDeleteItem = (index) => {
    setItems(()=>items.filter((item,i)=>i!==index))
    alert('Item deleted')
  };
//complete
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
        {items.map((itemCreated, index) => (
          <li key={itemCreated}>
            <label>
              {itemCreated}
              <button
                className="btn btn-danger"
                type="submit"
                onClick={()=>{handleDeleteItem(index)}}
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
