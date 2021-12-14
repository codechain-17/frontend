import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";

const Sidebar = ({id}) => {
  return (
    <div className="col-md-3 pr-md-4">
      <div className="sidebar-left">
        <ul className="list-unstyled sidebar-menu pl-md-2 pr-md-0">
          <li>
            <NavLink exact to={`/dashboard/${id}`} activeClassName="active">
              Dashboard
              <span>
                <AiFillDashboard />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`/dashboard/${id}/perfil`} activeClassName="active">
              Mi perfil
              <span>
                <FaUser />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`/dashboard/${id}/postulaciones`} activeClassName="active">
              Mis postulaciones
              <span>
                <RiFileCopy2Fill />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`/dashboard/${id}/guardado`} activeClassName="active">
              Guardados
              <span>
                <MdOutlineWork />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='' activeClassName="active">
              Salir
              <span>
                <IoExit />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
