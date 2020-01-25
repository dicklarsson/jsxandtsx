import * as React from "react";
import * as ReactDOM from "react-dom";

class Bob extends React.Component {
  render() {
    return <div>Bob - JSX</div>;
  }
}

class Asdf extends HTMLElement{
    connectedCallback(){
        ReactDOM.render(<Bob/>, this);
    }
}

window.customElements.define("shb-bob", Asdf);
