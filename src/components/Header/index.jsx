import style from './Header.module.css'

function Header({inputText,inputHandler,children}) {
  return (
    <div className={style.wrapHeader}>
      <h2 className={style.Heading}>{children}</h2>
      <span className={style.taskSearch}>
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
