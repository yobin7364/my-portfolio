import React from 'react'
import logo from "../image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import myImage from "../image/my-image.png";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";

interface FormValuesInterface {
    name: string,
    email: string,
    message: string
  }

type FormValues = {
    name: string,
    email: string,
    message: string
}


const ContactForm = (props:any) => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit = (data:FormValuesInterface) => console.log(data);

    return (
        <div>
            <nav className="border-bottom">
                <div className="container">
                    <div className="head-section no-padding">
                        <Link to="/" >
                            <img src={logo} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="logo" />
                        </Link>
                        <FontAwesomeIcon 
                        icon={faTimesCircle}
                        size="4x" 
                        className="pointer-button cross-button"
                        onClick={() => 
                            props.history.push("/")
                        }
                        />
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <div className="contact-first-row" >
                        <img src={myImage} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="my-image small-image" />
                        <h1 className="title line-height-small">
                            Thanks for taking the time to reach out. How can I help you today?
                     </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                        <div className="column-half-row">
                            <div className="column-half">
                                <label htmlFor="fullName" className="form-title">Name</label>
                                <input {...register("name",{ required: true }) } id="fullName" className="inputField" required/>
                                
                            </div>

                            {/* register your input into the hook by invoking the "register" function */}
                            <div className="column-half">
                                <label htmlFor="email" className="form-title">Email</label>
                                <input type="email" {...register("email",{ required: true })} id="email" className="inputField" required/>
                                
                            </div>
                        </div>

                        {/* include validation with required or other standard HTML validation rules */}
                        <div className="column-full-row">
                                <label htmlFor="message" className="form-title">Message</label>
                                <textarea 
                                {...register("message",{ required: true })} 
                                id="message" 
                                className="inputField" 
                                rows={6}
                                required/>
                                
                        </div>

                        <input className="contact-button pointer-button padding-medium margin-medium" type="submit" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default withRouter(ContactForm);