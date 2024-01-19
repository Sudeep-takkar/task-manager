import React, { Component } from "react";
class Item extends Component {

  render() {
    console.log(this.props)
        return (
            <div key={this.props.itemDescription.id}>
                <span onClick={() => this.props.deleteItem(this.props.itemDescription.id)}>
                  {this.props.itemDescription.content}
                </span>
            </div>
        );
      }

}

export default Item;