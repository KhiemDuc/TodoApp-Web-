import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "Time") {
      setTime(value);
    }
    if (name === "status") {
      setStatus(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};

    if (taskName === "") {
      taskObj["Name"] = "No title";
    } else {
      taskObj["Name"] = taskName;
    }
    if (status === "") {
      taskObj["status"] = "Not working";
    } else {
      taskObj["status"] = status;
    }
    if (time === "") {
      taskObj["time"] = "Today";
    } else {
      taskObj["time"] = time;
    }
    if (description === "") {
      taskObj["Description"] = "No description";
    } else {
      taskObj["Description"] = description;
    }
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            // value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange}
            name="Time"
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            // value={status}
            onChange={handleChange}
            name="status"
          >
            <option>Not Working</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            // value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
