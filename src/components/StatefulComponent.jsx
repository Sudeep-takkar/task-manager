import React, { Component } from "react";

class StatefulComponent extends Component {
  state = {
    items: []
  };

  deleteItem = id => {
    const items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items: items });
  };

  addItem = (e, input) => {
    this.setState({
      items: [...this.state.items, { id: input.value, content: input.value }]
    });
    input.focus();
  };

  render() {
    let input;
    return (
      <div>
        <div>
          <h1>Simple Todo List</h1>
          {this.state.items.map(item => {
            return (
              <div key={item.id}>
                <span onClick={() => this.deleteItem(item.id)}>
                  {item.content}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <input
            type="text"
            placeholder="Add item.."
            ref={node => (input = node)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                this.addItem(e, input);
                input.value = "";
              }
            }}
          />
          <button
            type={"submit"}
            onClick={e => {
              this.addItem(e, input);
              input.value = "";
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default StatefulComponent;