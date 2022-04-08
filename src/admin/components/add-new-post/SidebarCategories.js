import React from "react";
import ImageUploader from "react-images-upload";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "shards-react";
import { observer } from "mobx-react";
import CheckBoxCategories from "./CheckBoxCategories";


@observer
class SidebarCategories extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }


  //Checkbox Handle
  handleChange = e => {
    this.setState({checkedItems: !this.state.checkedItems})
  };

  
  render(){
    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Categories</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              <CheckBoxCategories
                name={"hello"}
                checked={this.state.checkedItems}
                onChange={this.handleChange}
                class="ml-1"
              />
              <CheckBoxCategories
                name={"test"}
                checked={this.state.checkedItems}
                onChange={this.handleChange}
                class="ml-1"
              />
              <CheckBoxCategories
                name={"test two"}
                checked={this.state.checkedItems}
                onChange={this.handleChange}
                class="ml-1"
              />
              <Button theme="primary" className="mt-2 w-100" onClick={this.applyCategories}>
                Apply
              </Button>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}


export default SidebarCategories;
