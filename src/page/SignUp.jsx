import React, { useState } from "react";

const initState = {
    fName: "",
    lName: "",
    email: "",
    contact: ""
};

function SignUp() {
    const [sigupData, setSignupData] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sigupData);
    };

    const handleReset = () => {
        setSignupData(initState);
    };

    return (
        <div className="App">
            <h1>Sign Up</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="fName"
                        id="firstname"
                        value={sigupData.fName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lName"
                        id="lastname"
                        value={sigupData.lName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                    />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={sigupData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={sigupData.contact}
                        onChange={handleChange}
                        placeholder="Enter Mobile number"
                        required
                    /><br/>
                    <button
                        type="reset"
                        value="reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button><p></p>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default SignUp;
