import React, { useState } from "react";
import EditTask from "../../Modal/EditTask";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="card-wrapper">
      <div className="task-holder">
        <div className="card-header">{taskObj.Name}</div>
        <p className="card-des">{taskObj.Description}</p>
        <div className={`card-status `+ taskObj.status} >{taskObj.status}</div>
        <span className="card-time">
          <FiCalendar size={18}/>
          <span className="card-time--done">{taskObj.time}</span>
        </span>
        <div
          style={{
            display: "flex",
            right: "20px",
            bottom: "20px",
            justifyContent: "space-between",
            marginTop: "20px",
            borderTop: '2px solid',
            borderColor: colors[index % 5].secondaryColor,
            padding:"5px 0"
          }}
        >
          <AiOutlineEdit
            className="ml-1"
            size={24}
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></AiOutlineEdit>
          <AiOutlineDelete
            size={24}
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></AiOutlineDelete>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
