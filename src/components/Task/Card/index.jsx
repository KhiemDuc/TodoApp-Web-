import React, { useState, useEffect } from "react";
import EditTask from "../../Modal/EditTask";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Card.module.css";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);

    const nextCurrentDate = new Date();
    nextCurrentDate.setDate(nextCurrentDate.getDate() - 1);

    const inputDate = new Date(taskObj.time);

    if (inputDate < currentDate && taskObj.status !== "Done") {
      setWarning("warning: your job is coming to an end!! ");
    }
    if (inputDate < nextCurrentDate && taskObj.status !== "Done") {
      setWarning("warning: your job was ended!! ");
    }
  }, []);

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
    <div className={style.wrapper}>
      <div className={style.holder}>
        <div className={style.Header}>{taskObj.Name}</div>
        <p className={style.Des}>{taskObj.Description}</p>
        <div className={`card-status ` + taskObj.status}>{taskObj.status}</div>
        <span className={style.time}>
          <FiCalendar size={18} />
          <span className={style.timeDone}>
            {moment(taskObj.time).endOf("day").fromNow()}
          </span>
        </span>
        <p className={style.warning}>{warning}</p>

        <div
          style={{
            display: "flex",
            right: "20px",
            bottom: "20px",
            justifyContent: "space-between",
            marginTop: "20px",
            borderTop: "2px solid",
            borderColor: colors[index % 5].secondaryColor,
            padding: "5px 0",
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
