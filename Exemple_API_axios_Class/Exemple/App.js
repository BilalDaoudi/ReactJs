import React from "react";
import axios from "axios";
import { render } from "enzyme";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      utilisateurs : [],
      posts : [],
      iddetail : 0
    }
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => this.setState( {utilisateurs : reponse.data} ));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((reponse) => this.setState( {posts : reponse.data}));
  }

  changeId(id) {
   this.setState( {iddetail : id})
  }

  render() {
    return (
      <div>
        {this.state.utilisateurs.map((use) => (
          <p key={use.id}>
            {use.name}
            <button onClick={() => this.changeId(use.id)}>Post</button>
            {this.state.iddetail == use.id
              ? this.state.posts
                  .filter((p) => p.userId == use.id)
                  .map((po) => <li>{po.title}</li>)
              : null}
          </p>
        ))}
      </div>
    );
  }
}
