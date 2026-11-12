import { useState } from "react";
const RadioButtonAndDropDownList = () => {
    const [gender, setGender] = useState("male");
    const [country, setCountry] = useState("Pakistan");
    function handleChange(e) {
        setGender(e.target.value);
    }
    function handleCityChange(e) {
        setCountry(e.target.value);
    }
    return (
        <>

            <input type="radio" name="gender"checked={gender === "male"} value={"male"} onChange={handleChange} id="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="gender"checked={gender === "female"} value={"female"} onChange={handleChange} id="female" />
            <label htmlFor="female">Female</label>
            <br />
            <input type="radio" name="gender"checked={gender === "other"} value={"other"} onChange={handleChange} id="other" />
            <label htmlFor="other">Other</label>
            <br />
            <select name="country" id="country" onChange={handleCityChange} defaultValue={"Pakistan"}>
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
            </select>
            <h1>Gender: {gender}</h1>
            <h1>Country: {country}</h1>

        </>
    )
}

export default RadioButtonAndDropDownList