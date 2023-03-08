import React from "react";
import { NavItem, Nav} from "reactstrap";
import classNames from "classnames";
import Logo from "../../logo.jpg";
import { CiViewList } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { BiTask, BiTaskX } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div className="sidebar-img">
        <img className="sidebar-logo" src={Logo} alt=".." />
      </div>
      <h1>My Todo</h1>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 nav-menu">
        <NavItem>
            <CiViewList className="item-icon"></CiViewList>
            <Link to="/" className="item-name">Tasks Broad</Link>
        </NavItem>
        <NavItem>
          <BiTaskX className="item-icon"></BiTaskX>
          <Link to="/timesheet" className="item-name">Time Sheet</Link>
        </NavItem>
        <NavItem>
          <BiTask className="item-icon"></BiTask>
          <Link to="/calendar" className="item-name">Calendar</Link>
        </NavItem>
        <NavItem>
            <RiContactsLine className="item-icon"></RiContactsLine>
            <Link to="/about" className="item-name">About</Link>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
