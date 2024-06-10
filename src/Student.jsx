
import Prototype from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

Student.Prototype = {
    name: Prototype.string,
    age: Prototype.number,
    isStudent: Prototype.bool
}

Student.defaultProps = {
    name: "Gust",
    age: 0,
    isStudent: false
}

export default Student