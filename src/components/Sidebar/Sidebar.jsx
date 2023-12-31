import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";
import { IoExitSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import quiz from '../../assets/Quiz.png'


const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const locationPath = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const goBack = () => {
    window.scrollTo(0, 0);
    window.history.back();
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__menu_desktop">
          <section className="sidebar__header">
            <img src={quiz} alt="" className="sidebar__header-img"/>
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
            <IoExitSharp className="exit" onClick={goBack}/>
          </section>
        </div>

        <section className="sidebar__mobile_menu">
        <img src={quiz} alt="" className="sidebar__mobile-img"/>
          <div className="sidebar__mobile_menu-icons">
            {toggle ? (
              <AiOutlineClose
                fontSize={24}
                cursor="pointer"
                onClick={() => setToggle(false)}
              />
            ) : (
              <FiMenu
                fontSize={24}
                cursor="pointer"
                onClick={() => setToggle(true)}
              />
            )}
          </div>

          {toggle && (
            <div className="sidebar__mobile_toggle slide-right ">
              <section className="sidebar__mobile_toggle__header">
              <img src={quiz} alt="" className="sidebar__mobile-img"/>
                <div className="sidebar__mobile_toggle__header_icons">
                  <Link to="/">
                    <AiFillHome
                      className={`${locationPath("/") ? "icons" : "icon"}`}
                    />
                  </Link>
                  <Link to="/quizes">
                    <MdQuiz
                      className={`${
                        locationPath("/quizes") ? "icons" : "icon"
                      }`}
                    />
                  </Link>
                </div>
              </section>
              <section className="sidebar__mobile_toggle__footer">
                <IoExitSharp className="exit" onClick={goBack}/>
              </section>
            </div>
          )}
        </section>
      </nav>
    </>
  );
};

export default Sidebar;
