import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [timeStart, setTimeStart] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "Time") {
      setTime(value);
    }
    if (name === "TimeStart") {
      setTimeStart(value);
    } 
    if(name === "status" ){
      setStatus(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setStatus(taskObj.status);
    setTime(taskObj.time);
    setTimeStart(taskObj.TimeStart);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    if (taskName === "") {
      tempObj["Name"] = "No title";
    } else {
      tempObj["Name"] = taskName;
    }
    if (status === "") {
      tempObj["status"] = "Not Doing";
    } else {
      tempObj["status"] = status;
    }
    if (time === "") {
      tempObj["time"] = "Today";
    } else {
      tempObj["time"] = time;
    }
    if (timeStart === "") {
      tempObj["TimeStart"] = "Today";
    } else {
      tempObj["TimeStart"] = timeStart;
    }
    if (description === "") {
      tempObj["Description"] = "No description";
    } else {
      tempObj["Description"] = description;
    }
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className={"form-select"}
            value={status}
            onChange={handleChange}
            name="status"
          >
            <option selected>Not Working</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Time Start</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange}
            name="TimeStart"
            value={timeStart}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange}
            name="Time"
            value={time}
            format={"dd MM yyyy"}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
