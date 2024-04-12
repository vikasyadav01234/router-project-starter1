import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div>
                    <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                        <p>First Name<sup className='text-pink-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                        <p>Last Name<sup className='text-pink-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
            </div>
            {/* email Add */}
            <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                    <p>Email Address<sup className='text-pink-600'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div>
                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                    <p>Create Password<sup className='text-pink-600'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'>
                    <p>Confirm Password<sup className='text-pink-600'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
        <button>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
