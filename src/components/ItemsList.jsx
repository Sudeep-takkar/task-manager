import React, { Component } from "react";
import Item from './Item'
class ItemsList extends Component {

  render() {
        return (
            <div>
            {this.props.items.map(item => {
                console.log(item)
                return (
                  <Item itemDescription={item} deleteItem={ this.props.deleteItem} />
                );
              })}
            </div>
        );
      }

}

export default ItemsList;