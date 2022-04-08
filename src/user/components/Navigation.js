import React from "react";
import {
    Navbar,
  } from "shards-react";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }    
    render() {
      return (
        <Navbar type="dark" className="navigation pl-5 pr-5" style={{backgroundColor: this.state.color}} expand="md" sticky="true">
        </Navbar>
      )
    }
}
export default Navigation;
