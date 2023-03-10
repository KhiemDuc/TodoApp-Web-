import React from "react";
import { NavItem, Nav} from "reactstrap";
import classNames from "classnames";
import Logo from "../../logo.jpg";
import { CiViewList } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { BiTask, BiTaskX } from "react-icons/bi";
import { Link } from "react-router-dom";
import style from "./sideBar.module.css"

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className={style.sidebarHeader}>
      <span color="info" onClick={toggle} style={{ color: "#000" }}>
        &times;
      </span>
      <div className={style.img}>
        <img className={style.logo} src={Logo} alt=".." />
      </div>
      <h1>My Todo</h1>
    </div>
    <div className={style.menu}>
      <Nav vertical className="list-unstyled pb-3 nav-menu">
        <NavItem>
            <CiViewList className={style.itemIcon}></CiViewList>
            <Link to="/" className={style.itemName}>Tasks Broad</Link>
        </NavItem>
        <NavItem>
          <BiTaskX className={style.itemIcon}></BiTaskX>
          <Link to="/timeSheet" className={style.itemName}>Time Sheet</Link>
        </NavItem>
        <NavItem>
          <BiTask className={style.itemIcon}></BiTask>
          <Link to="/calendar" className={style.itemName}>Calendar</Link>
        </NavItem>
        <NavItem>
            <RiContactsLine className={style.itemIcon}></RiContactsLine>
            <Link to="/about" className={style.itemName}>About</Link>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
