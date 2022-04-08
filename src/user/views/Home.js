import React from "react";
import { observer } from "mobx-react";
import {
	withRouter
} from 'react-router-dom';

@observer
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <div className="home-page">
        <h1>hello world</h1>
      </div>
    )
  }
}
export default withRouter(Home);
