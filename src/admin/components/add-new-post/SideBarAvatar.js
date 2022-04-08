/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "shards-react";
import ImageUploader from "react-images-upload";
class SideBarAvatar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Featured Image</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
                <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    singleImage={true}
                    withPreview={true}
                />
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}

export default SideBarAvatar;
