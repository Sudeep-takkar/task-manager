import React, { Component } from "react";
import Item from './Item'
class ItemsList extends Component {

    render() {
        return (
          <div>
            <div>
              {this.props.items.map(item => {
                return (
                    <Item itemDescription={ item} />
                );
              })}
            </div>
          </div>
        );
      }

}

export default ItemsList;