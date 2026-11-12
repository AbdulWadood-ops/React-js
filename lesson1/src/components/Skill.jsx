import { useState } from "react";


const Skill = (props) => {
    const [skills, setSkills] = useState([]);
    function handleChange(e) {
        console.log(e.target.value, e.target.checked)
        if(e.target.checked==true){
            setSkills([...skills, e.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }

    return (
        <>
            <input type="checkbox" name="HTML" id="HTML" value={"HTML"} onChange={handleChange}/>
            <label htmlFor="HTML" style={props.style}>HTML</label>
            <br />
            <input type="checkbox" name="css" id="Css" value={"CSS"} onChange={handleChange} /> 
            <label htmlFor="Css" style={props.style}>CSS</label>
            <br />
            <input type="checkbox" name="javascript" id="Javascript" value={"Javascript"} onChange={handleChange} /> 
            <label htmlFor="Javascript" style={props.style}>Javascript</label>
            <br />
            <input type="checkbox" name="react" id="React" value={"React"} onChange={handleChange} />
            <label htmlFor="React" style={props.style}>React</label>
            <br />
            <input type="checkbox" name="node" id="Node" value={"Node"} onChange={handleChange} />
            <label htmlFor="Node" style={props.style}>Node</label>
            <br />
            <input type="checkbox" name="express" id="Express" value={"Express"} onChange={handleChange} />
            <label htmlFor="Express" style={props.style}>Express</label>
            <br />
            <input type="checkbox" name="mongodb" id="Mongodb" value={"Mongodb"} onChange={handleChange} />
            <label htmlFor="Mongodb" style={props.style}>Mongodb</label>
            <br />
            <input type="checkbox" name="tailwind" id="Tailwind" value={"Tailwind"} onChange={handleChange} />
            <label htmlFor="Tailwind" style={props.style}>Tailwind</label>
            <br />
            <input type="checkbox" name="materialui" id="Materialui" value={"Materialui"} onChange={handleChange} />
            <label htmlFor="Materialui" style={props.style}>Materialui</label>
            <br />
            <h4>List of skills</h4>
            <h4 style={props.style}>
                {skills.toString()}
            </h4>
            

            
        </>
    )
}

export default Skill