import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../../logo.jpg";
import { CiViewList } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { BiTask, BiTaskX } from "react-icons/bi";

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
          <p className="item-name">Tasks Broad</p>
        </NavItem>
        <NavItem>
          <BiTaskX className="item-icon"></BiTaskX>
          <p className="item-name">Time Sheet</p>
        </NavItem>
        <NavItem>
          <RiContactsLine className="item-icon"></RiContactsLine>
          <p className="item-name">Calendar</p>
        </NavItem>
        <NavItem>
          <RiContactsLine className="item-icon"></RiContactsLine>
          <p className="item-name">Contact</p>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
