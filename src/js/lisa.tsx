import * as React from "react";
import * as ReactDOM from "react-dom";

class Lisa extends React.Component {
  render() {
    return <div>Lisa - TSX</div>;
  }
}

class X extends HTMLElement{
    connectedCallback(){
        ReactDOM.render(<Lisa/>, this);
    }
}

window.customElements.define("shb-lisa", X);
