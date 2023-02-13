import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../../logo.jpg";
import {CiViewList} from "react-icons/ci"
import {RiContactsLine} from "react-icons/ri"
import {BiTask,BiTaskX} from "react-icons/bi"

const SideBar = ({ isOpen, toggle }) => (

  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <div className="sidebar-img">
        <img className="sidebar-logo" src={Logo} alt ='..'/>
      </div>
      <h1>My Todo</h1>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 nav-menu">
        <NavItem>
            <CiViewList></CiViewList>
            All Tasks
        </NavItem>
        <NavItem>
            <BiTask></BiTask>
            Tasks Done
        </NavItem>
        <NavItem>
            <BiTaskX></BiTaskX>
            Not Done
        </NavItem>
        <NavItem>
            <RiContactsLine></RiContactsLine>
            Contact
        </NavItem>
        
      </Nav>
    </div>
  </div>
);


export default SideBar;