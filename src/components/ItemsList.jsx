import React, { Component } from "react";

class ItemsList extends Component {

    render() {
        let input;
        return (
          <div>
            <div>
              {this.props.items.map(item => {
                return (
                  <div key={item.id}>
                    <span onClick={() => this.deleteItem(item.id)}>
                      {item.content}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

}

export default ItemsList;