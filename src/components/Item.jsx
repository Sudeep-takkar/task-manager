import React, { Component } from "react";
class Item extends Component {

    render() {
        return (
            <div key={this.props.itemDescription.id}>
                <span onClick={() => this.deleteItem(this.props.itemDescription.id)}>
                  {this.props.itemDescription.content}
                </span>
            </div>
        );
      }

}

export default Item;