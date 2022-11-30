import React from "react";

import ListItem from "./ListItem";

const Item = ({ todo }) => {
  const AllItems = todo.map((entry, index) => {
    return <li key={index}>{entry}</li>;
  });
  return <>{AllItems}</>;
};

class List extends React.Component {
  state = {
    todo: ["1. Finish Site lol"],
  };

  render() {
    return (
      <div className="todo">
        TODO:
        <ul>
          <Item todo={this.state.todo} />
        </ul>
      </div>
    );
  }
}

export default List;
