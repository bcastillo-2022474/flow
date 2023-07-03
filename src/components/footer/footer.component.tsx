import "./footer.component.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCircleCheck,
    faHome,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    const changeView = (e: any) => {
        const btn = e.target.closest("li");
        if (!btn) return;

        const btns = document.querySelectorAll(".list li");
        btns.forEach((btn) => btn.classList.remove("primary-color-bold"));
        btn.classList.add("primary-color-bold");
    };

    return (
        <div>
            <ul className="list" onClick={changeView}>
                <li className="flex flex-col primary-color hover:cursor-pointer">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    <div>Home</div>
                </li>
                <li className="flex flex-col primary-color hover:cursor-pointer">
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    <div>My Tasks</div>
                </li>
                <li className="flex flex-col primary-color hover:cursor-pointer">
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    <div>Inbox</div>
                </li>
                <li className="flex flex-col primary-color hover:cursor-pointer">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    <div>Search</div>
                </li>
                <li className="flex flex-col primary-color hover:cursor-pointer">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <div>Profile</div>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
