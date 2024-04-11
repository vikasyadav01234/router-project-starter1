import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    //console.log("ye rha mera form type");
//    console.log(formtype)
  return (

    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div>
            <h1
             className="text-richblack-5  font-semibold text-[1.875rem] leading-[2.375rem]"
            >{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className="text-richblack-100">{desc1}</span>
                <br/>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className="flex w-full items-center my-4 gap-x-2">
                <div className='h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font medium leading-[1.375]'>OR</p>
                <div className='h-[1px] bg-richblack-700'></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"/>    
        </div>

    </div>
  )
}

export default Template
