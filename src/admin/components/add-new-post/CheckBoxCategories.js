import React from "react";
import {
  FormCheckbox
} from "shards-react";
import "../../assets/checkbox/style.css"

class CheckBoxCategories extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static defaultProps = {
    checked: false
  }
  render() {
      return (
        <div className={"mb-1 admin-checkbox-container" + " " + this.props.class}>
          <input type="checkbox" className="admin-checkbox" name={this.props.name} value={this.props.name} checked={this.props.checked} onChange={this.props.onChange} key={this.props.key}>
          </input>
          <label className="admin-checkbox-label">{this.props.name}</label>
        </div>
      );
  }
}


export default CheckBoxCategories;
