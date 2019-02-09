import * as React from "react";
import { Link, Route } from "react-router-dom";
import { Routes } from "../../constants/routes";
import BinarySearchTree from "../data-structures/bst/BinarySearchTree";
import Dequeue from "../data-structures/dequeue/Dequeue";
import List from "../data-structures/list/List";
import Queue from "../data-structures/queue/Queue";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-table-of-contents">
          <ul>
            <li>
              <Link to={Routes.LIST}>List</Link>
            </li>
            <li>
              <Link to={Routes.QUEUE}>Queue</Link>
            </li>
            <li>
              <Link to={Routes.DEQUEUE}>Dequeue</Link>
            </li>
            <li>
              <Link to={Routes.BINARY_SEARCH_TREE}>Binary Search Tree</Link>
            </li>
          </ul>
        </div>

        <Route path={Routes.LIST} component={List} />
        <Route path={Routes.QUEUE} component={Queue} />
        <Route path={Routes.DEQUEUE} component={Dequeue} />
        <Route path={Routes.BINARY_SEARCH_TREE} component={BinarySearchTree} />
      </div>
    );
  }
}

export default App;
