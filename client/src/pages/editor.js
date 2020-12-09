import React from "react";
import EditorPreview from "../components/editorPreview";
import EditorUpload from "../components/editorUpload";
import EducatorResults from "../components/educatorResults";
import FilesList from "../components/filesList";
import "./editor.css";

const Editor = (props) => {
  return (
    <div className="editorPage">
      <div className="jumbotron">
        <h1 className="display-4">Educational Data Stream</h1>
        <h2 className="subhead">Where data meets implementation</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="searchContainer">
                  <h2>How to use this page</h2>
                  <ol>
                    <li>Review Articles and download corresponding file</li>
                    <li>
                      Create lesson plan and submit while uploading file using
                      drag and drop
                    </li>
                    <li>
                      Be sure to indicate which grade level your lesson plan
                      best correlates to
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <EditorPreview />
            {/* <FilesList /> */}
          </div>
          <div className="col-md-6">
            <EditorUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

Editor.propTypes = {};

export default Editor;
