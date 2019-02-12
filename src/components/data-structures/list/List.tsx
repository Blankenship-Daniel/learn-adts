import * as React from "react";
import Node from "../node/Node";
import "./List.css";

class List extends React.Component {
  public render() {
    return (
      <div className="List">
        <Node data={112312312321412421} pointerRight={true} />
        <Node data={2} pointerRight={true} />
        <Node data={3} pointerRight={true} />
        <Node data={4} />
      </div>
    );
  }
}

export default List;
