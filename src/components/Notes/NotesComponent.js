import React from "react";
import "./NotesStyles.scss";
import { Space, Typography } from "antd";
const { Paragraph } = Typography;

const Notes = (props) => {
  return (
    <div>
      <div className="notes">
        <div className="notes__header">All Notes</div>
        <div className="notes__content">
          Ant Design, a design language for  sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        {/* <Paragraph ellipsis className="notes__content">
          I tried using it as an attribute of but attribute no longer works like
          in the old version mentioned 
        </Paragraph> */}
        <div className="notes__footer">no of notes</div>
      </div>
    </div>
  );
};
export default Notes;
