import { useState } from "react";
import "./Style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdditem = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items);
    setNewItem("");
  };
  const handleDeleteItem = (event) => {
    event.preventDefault();
    alert();
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
        {items.map((item, index) => (
          <li key="item">
            <label>
              {item}
              <button
                className="btn btn-danger"
                type="submit"
                onClick={handleDeleteItem}
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
