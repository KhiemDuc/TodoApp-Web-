import React, { useEffect, useState } from "react";
import CreateTask from "../Modal/CreateTask";
import Card from "../Card";
import SideBar from "../SideBar/SideBar";
import { IoIosAdd } from "react-icons/io";
import { BiFilter } from "react-icons/bi";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <div className="Wrapper">
      {/* <div className="header text-center">
      <div class="text-center">
            <img className="logo-img " src="https://culturedvulttures.com/wp-content/uploads/2022/10/Naruto-Fate-Boruto-803x452.jpg" alt="..."/>
        </div>
        <h3 className="header_logo">Quản Lý Công Việc</h3>
      </div> */}
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <div className="task_container">
        <h2 className="task-header">All Tasks</h2>
        <div className="task-action">
          <button
            className="btn btn-outline-secondary m-5 "
            onClick={() => setModal(true)}
          >
            <IoIosAdd size={32} />
            Create Task
          </button>
          <button className="btn btn-outline-secondary filter m-5">
            {" "}
            Filter <BiFilter size={32} />
          </button>
        </div>
        <div className="task-list">
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                key={index}
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
        </div>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export default TodoList;
