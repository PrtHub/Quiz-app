import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";
import { IoExitSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const locationPath = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__menu_desktop">
          <section className="sidebar__header">
            <h1 className="sidebar__header_title">QUIZ</h1>
            <div className="sidebar__header_icons">
              <Link to="/">
                <AiFillHome
                  className={`${locationPath("/") ? "icons" : "icon"}`}
                />
              </Link>
              <Link to="/quizes">
                <MdQuiz
                  className={`${locationPath("/quizes") ? "icons" : "icon"}`}
                />
              </Link>
            </div>
          </section>
          <section className="sidebar__footer">
            <IoExitSharp className="exit" />
          </section>
        </div>

        <section className="sidebar__mobile_menu">
          <h1 className="sidebar__header_title">QUIZ</h1>
          <div className="sidebar__mobile_menu-icons">
            {toggle ? (
              <AiOutlineClose fontSize={24}  cursor="pointer" onClick={() => setToggle(false)} />
            ) : (
              <FiMenu fontSize={24}  cursor="pointer" onClick={() => setToggle(true)} />
            )}
          </div>

           { toggle && (
            <div className="sidebar__mobile_toggle">
            <section className="sidebar__mobile_toggle__header">
              <h1 className="">QUIZ</h1>
              <div className="sidebar__mobile_toggle__header_icons">
                <Link to="/">
                  <AiFillHome
                    className={`${locationPath("/") ? "icons" : "icon"}`}
                  />
                </Link>
                <Link to="/quizes">
                  <MdQuiz
                    className={`${locationPath("/quizes") ? "icons" : "icon"}`}
                  />
                </Link>
              </div>
            </section>
            <section className="sidebar__mobile_toggle__footer">
              <IoExitSharp className="exit" />
            </section>
          </div>
           )}

        </section>
      </nav>
    </>
  );
};

export default Sidebar;
