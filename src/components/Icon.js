import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"; //Importing the icons from the react-icons here we import the font awesome icons there are many more in react-icons which we can use

const Icon = (props) => {

    switch(props.name){
        case "circle": return <FaRegCircle className="icons"/>
        case "cross" : return <FaTimes className="icons" />
        default: return <FaPen className="icons" />
    }
    
};

export default Icon;