//20_.js
import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));
  };

  removeItem = index => {
    this.setState(prevState => ({
      items: prevState.items.filter((item, i) => i !== index)
    }));
  };

  getTotalPrice = () => {
    return this.state.items.reduce((total, item) => total + item.price, 0);
  };

  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${this.getTotalPrice()}</p>
        <div>
          <button onClick={() => this.addItem('Item 1', 10)}>Add Item 1</button>
          <button onClick={() => this.addItem('Item 2', 20)}>Add Item 2</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
