import "./footer.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleCheck,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

const IconButton = ({
  icon,
  text,
  isActive,
  onClick,
}: {
  icon: IconDefinition;
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const classes = "flex flex-col primary-color hover:cursor-pointer";
  return (
    <li
      onClick={onClick}
      className={isActive ? `${classes} primary-color-bold` : classes}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <div>{text}</div>
    </li>
  );
};

const Footer = () => {
  const [buttons, setButtons] = useState([
    { icon: faHome, text: "Home", isActive: true },
    { icon: faCircleCheck, text: "My Tasks", isActive: false },
    { icon: faBell, text: "Inbox", isActive: false },
    { icon: faSearch, text: "Search", isActive: false },
    { icon: faUser, text: "Profile", isActive: false },
  ]);

  const changeView = (iconButtonText: string) => {
    const newButtons = buttons.map((button) => {
      if (button.text === iconButtonText) return { ...button, isActive: true };
      return { ...button, isActive: false };
    });
    setButtons(newButtons);
  };
  return (
    <div>
      <ul className="list">
        {buttons.map(({ icon, text, isActive }) => (
          <IconButton
            key={text}
            icon={icon}
            text={text}
            isActive={isActive}
            onClick={() => changeView(text)}
          ></IconButton>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
