   
import { Link } from "react-router-dom";
import "./topbar.css";


export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <a href='https://www.facebook.com/react/' target="_blank" rel="noopener noreferrer"> <i className="topIcon fa-brands fa-facebook"/> </a> 
     <a href = 'https://twitter.com/reactjs' target="_blank" rel="noopener noreferrer"> <i className="topIcon fa-brands fa-twitter" />  </a>
     <a href = 'https://www.instagram.com/reactjsofficial' target="_blank" rel="noopener noreferrer"> <i className="topIcon fa-brands fa-instagram"></i> </a>
    <a href = 'https://github.com/facebook/react' target="_blank" rel="noopener noreferrer"> <i className="topIcon fa-brands fa-github"></i> </a>
   
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to ="/about">  ABOUT </Link>
          
            </li>
          <li className="topListItem">
            <Link className="link" to ="/contact"> CONTACT </Link></li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://www.github.com/Codegrammer2002.png"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
