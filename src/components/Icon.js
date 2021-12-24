import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"; //Importing the icons from the react-icons here we import the font awesome icons there are many more in react-icons which we can use

const Icon = (props) => {

    return (
        <h1><FaTimes className = "icon" /> <FaPen className="icon" /> <FaRegCircle className="icon" /></h1>
    );
};

export default Icon;