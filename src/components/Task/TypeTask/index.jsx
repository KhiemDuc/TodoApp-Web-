import Card from "../Card";

function TypeTask({ data, deleteTask, updateListArray, type }) {
  const filteredStatus = data.filter((el) => {
    console.log(type.toLowerCase());
    if (type === "All") {
      return el;
    }
    else{
      return el.status.toLowerCase().includes(type.toLowerCase());
    }
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
