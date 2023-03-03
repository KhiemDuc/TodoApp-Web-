import React, { useEffect, useState } from "react";
import CreateTask from "../../Modal/CreateTask"
import { IoIosAdd } from "react-icons/io";
import TypeTask from "../../Task/TypeTask";
import Header from "../../Header";


const TasksBroad = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [inputText, setInputText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

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

  
  let inputHandler = (e) => {
    setToggleFilter(false);
    const valueSearch = e.target.value.toLowerCase();
    setInputText(valueSearch);
  };

  const filteredData = taskList.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      const data = el.Name.toLowerCase().includes(inputText);
      if (data === false) {
        return el.Description.toLowerCase().includes(inputText);
      } else {
        return data;
      }
    }
  });

  const handleFilter = (e) => {
    setTypeFilter(e.target.value);
    setToggleFilter(true);
  };

  
  return (
    <>
      <div className="task_container">
        <Header inputText={inputText} inputHandler={inputHandler}>Tasks Broad</Header>
        <div className="task-action">
          <button
            className="btn btn-outline-secondary m-5 "
            onClick={() => setModal(true)}
          >
            <IoIosAdd size={32} />
            Create Task
          </button>
          <select name="filter" id="filter" onChange={handleFilter}>
            <option value="All">
                All
            </option>
            <option value="Not Working">
                Not Working
            </option>
            <option value="Doing">
                Doing
            </option>
            <option value="Done">
                Done
            </option>
          </select>
        </div>

        <div className="task-list">
          {taskList && !toggleFilter &&<TypeTask updateListArray={updateListArray} deleteTask={deleteTask} data={filteredData} type={"All"}/>
          }
          {typeFilter && toggleFilter && <TypeTask updateListArray={updateListArray} deleteTask={deleteTask} data={taskList} type={typeFilter}/>}           
        </div>

      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TasksBroad;
