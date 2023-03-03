function Header({inputText,inputHandler,children}) {
  return (
    <div className="wrapper-header">
      <h2 className="task-header">{children}</h2>
      <span className="form-group task-search">
        <input
          type="text"
          className="form-control"
          value={inputText}
          onChange={inputHandler}
          name="search"
          placeholder={`Search Here...`}
        />
      </span>
    </div>
  );
}

export default Header;
