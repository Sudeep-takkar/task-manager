import React, { Component } from "react";
class Item extends Component {

    render() {
        let input;
        return (
            <div key={this.props.id}>
                <span onClick={() => this.deleteItem(this.props.id)}>
                  {this.props.content}
                </span>
            </div>
        );
      }

}

export default Item;