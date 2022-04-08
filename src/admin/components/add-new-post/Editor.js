import React, { cloneElement, useState } from "react";
import dynamic from 'next/dynamic';
import { Card, CardBody, Form, FormInput, Button } from "shards-react";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import {Quill} from "react-quill"
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
var Image = Quill.import('formats/image');
Quill.register(Image, true);

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        body: "",
        shortBody: "",
        myArray: [],
    };
  }

  render(){
    return(
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <ReactQuill 
              className="add-new-post__editor mb-1"
              ref={el => {
                this.quill = el;
              }}
              modules={{
                toolbar: {
                  container: [
                    [{header: [1, 2, 3, 4, 5, 6] }, { font: [] } ],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image", "video"],
                    ["clean"],
                    ["code-block"],
                  ],
                }
              }}
              formats={Editor.formats}
              placeholder="Add a description of your post"  
              onChange={this.handleBody}
              value={this.state.body} 
              id="txtDescription"   
            />
          </Form>
        </CardBody>
      </Card>
    )
  }
}
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];
export default Editor;
