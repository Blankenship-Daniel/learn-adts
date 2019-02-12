import * as React from "react";
import "./Node.css";

interface IncomingProps {
  data: any;
  pointerLeft: boolean;
  pointerRight: boolean;
}
type Props = IncomingProps;

class Node extends React.Component<Props, {}> {
  public static defaultProps = {
    pointerLeft: false,
    pointerRight: false
  };

  public render() {
    return (
      <div>
        {this.props.pointerLeft && <span>&larr;</span>}
        <div className="Node">{this.props.data}</div>
        {this.props.pointerRight && <span>&rarr;</span>}
      </div>
    );
  }
}

export default Node;
