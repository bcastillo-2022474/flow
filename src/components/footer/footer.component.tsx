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
import { Link } from "react-router-dom";

const IconButton = ({
    icon,
    text,
    isActive,
    onClick,
    link,
}: {
    icon: IconDefinition;
    text: string;
    isActive: boolean;
    onClick: () => void;
    link: string;
}) => {
    const classes = "flex flex-col primary-color hover:cursor-pointer";
    return (
        <Link
            to={link}
            onClick={onClick}
            className={isActive ? `${classes} primary-color-bold` : classes}
        >
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <div>{text}</div>
        </Link>
    );
};

const Footer = () => {
    const [buttons, setButtons] = useState([
        { icon: faHome, text: "Home", isActive: true, link: "/" },
        { icon: faCircleCheck, text: "My Tasks", isActive: false, link: "/" },
        { icon: faBell, text: "Inbox", isActive: false, link: "/" },
        { icon: faSearch, text: "Search", isActive: false, link: "/" },
        { icon: faUser, text: "Profile", isActive: false, link: "/" },
    ]);

    const changeView = (iconButtonText: string) => {
        const newButtons = buttons.map((button) => {
            if (button.text === iconButtonText)
                return { ...button, isActive: true };
            return { ...button, isActive: false };
        });
        setButtons(newButtons);
    };
    return (
        <div>
            <ul className="list">
                {buttons.map(({ icon, text, isActive, link }) => (
                    <IconButton
                        link={link}
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
