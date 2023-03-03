import Card from "../Card";

function TypeTask({ data, deleteTask, updateListArray, type }) {
  const filteredStatus = data.filter((el) => {
    if (type === "All") {
      return el;
    }
    if (type === "Done") {
      return el.status.toLowerCase().includes("done");
    }
    if (type === "Doing") {
      return el.status.toLowerCase().includes("doing");
    }
    return el.status.toLowerCase().includes("not");
  });
  return (
    <>
      {data &&
        filteredStatus.map((obj, index) => (
          <Card
            key={index}
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
    </>
  );
}

export default TypeTask;
