import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../image/logo.png";
import hat from "../image/hat.png";
import designer from "../image/Designer.png";
import frontEndDevelopment from "../image/Front-end-development.png";
import backEndDevelopment from "../image/Back-end-development.png";
import whiteLogo from "../image/White-Logo.png";
import { SocialIcon } from 'react-social-icons';
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}



export const Home = () => {
    const [workData, setWorkData] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const date = new Date().getFullYear();

    let years = date - 2018;

    useEffect(() => {

        sanityClient.fetch(`*[_type == "author"]{
            image
        }`)
            .then((img) => setProfileImage(img[0]))
            .catch(console.error)

        sanityClient.fetch(`*[_type == "work"]{
            logo,
            description,
            altTitle,
            url
        }`)
            .then((data) => setWorkData(data))
            .catch(console.error)
    }, [])

    return (
        <div>
            <header>
                <div className="container">
                    <nav className="head-section">
                        <img src={logo} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="logo" />
                        <Link to="/contact" className="contact-button">Contact Me</Link>
                    </nav>
                    <section className="header-info">
                        <h1 className="header-info__title">Designer &amp; Web Developer</h1>
                        <h2 className="header-info__description">I am fond of coding and designing in a simple but convenient way.</h2>

                        {
                            profileImage &&

                            <img loading="eager" src={urlFor(profileImage?.image).url()} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="my-image" />
                        }


                        <img src={hat} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="hat" />
                    </section>
                </div>
            </header>

            <section className="introduction">
                <div className="container">
                    <div className="introduction__center">
                        <h1 className="introduction__title">
                            Hi, I’m Yobin.Pleasure to meet you.
                        </h1>
                        <h2 className="introduction__description">
                            I started my web development journey around {years} years ago . I completed my Bachelor’s Degree in Computer Science and Engineering from Bangalore, India. I have worked with the major software companies of Nepal. I’m quite confident on working with my domain.
                        </h2>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="container">
                    <div className="box">
                        <div className="column">
                            <img src={designer} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="skills__logo" />
                            <div className="domian">
                                <h1 className="skills__header">
                                    Designer
                                </h1>

                                <h2 className="skills__description">
                                    I value simple content
                                    structure , clean design
                                    patterns, and
                                    meaningful interaction.
                                </h2>
                            </div>

                            <div className="area">
                                <h1 className="skills__header-medium">
                                    Things I enjoy designing :
                                </h1>

                                <h2 className="skills__description">
                                    UI, Web , Apps , Logos
                                </h2>
                            </div>

                            <div className="tolls">
                                <h1 className="skills__header-medium">
                                    Design Tools :
                                </h1>

                                <h2 className="skills__description">
                                    <ul>
                                        <li>Figma</li>
                                    </ul>

                                </h2>
                            </div>


                        </div>
                        <div className="column">

                            <img src={frontEndDevelopment} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="skills__logo" />
                            <div className="domian">
                                <h1 className="skills__header">
                                    Front-end Developer
                                </h1>

                                <h2 className="skills__description">
                                    I like to code things from scratch,
                                    and enjoy brigning ideas to life in
                                    browser.
                                </h2>
                            </div>

                            <div className="area">
                                <h1 className="skills__header-medium">
                                    Languages I speak :
                                </h1>

                                <h2 className="skills__description">
                                    HTML, CSS, SASS, JavaScript
                                </h2>
                            </div>

                            <div className="tolls">
                                <h1 className="skills__header-medium">
                                    Design Tools :
                                </h1>

                                <h2 className="skills__description">
                                    <ul>
                                        <li>Bootstrap</li>
                                        <li>Github</li>
                                        <li>Gitlab</li>
                                        <li>Terminal</li>
                                        <li>Code Pen</li>
                                        <li>PWA</li>
                                        <li>React JS</li>
                                    </ul>

                                </h2>
                            </div>

                        </div>
                        <div className="column">

                            <img src={backEndDevelopment} alt="Yobin Kumar Pun | Designer &amp; Web Developer" className="skills__logo" />
                            <div className="domian">
                                <h1 className="skills__header">
                                    Back-end Developer
                                </h1>

                                <h2 className="skills__description">
                                    I structure and manipulate the
                                    datas to deliver it in an efficient
                                    way.
                                </h2>
                            </div>

                            <div className="area">
                                <h1 className="skills__header-medium">
                                    Languages I speak :
                                </h1>

                                <h2 className="skills__description">
                                    JavaScript
                                </h2>
                            </div>

                            <div className="tolls">
                                <h1 className="skills__header-medium">
                                    Design Tools :
                                </h1>

                                <h2 className="skills__description">
                                    <ul>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>Sanity IO</li>
                                    </ul>

                                </h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="work">
                <div className="container">

                    <h1 className="work__title">My Recent Work</h1>
                    <h2 className="work__second-title">Here are few of my web app projects I’ve worked on recently.</h2>

                </div>

            </section>

            <section className="work-cards">
                <div className="container">
                    <div className="flex-grid">

                        {
                            workData?.map((work, indx) =>

                                <div className="col" key={indx}>
                                    <div className="card">
                                        <img src={urlFor(work.logo).url()} alt={work.altTitle} className="card__image" />
                                        <p className="card__description">
                                            {work.description}
                                        </p>
                                        <a
                                            target="_blank"
                                            alt="Yobin Kumar Pun"
                                            href={work.url}
                                            rel="noopener noreferrer"
                                            className="card__link"
                                        >

                                            {work.url.replace("https://", "www.")}
                                        </a>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="start-project">
                        <h1 className="start-project__header">Start a project</h1>

                        <h2 className="start-project__description">
                            Interested in working together
                            or hiring me? We should queue up
                            a chat.
                        </h2>

                        <Link to="/contact" className="start-project__link">Let's do this</Link>
                    </div>

                    <div className="footer-container">
                        <img
                            src={whiteLogo}
                            alt="Yobin Kumar Pun"
                            className="footer-container__logo"
                        />
                        <h3 className="footer-container__quote">
                            Code, learn &amp; thrive in life
                            with one step at a time.
                        </h3>

                        <div className="footer-container__social-icons-list">
                            <SocialIcon
                                url="https://www.facebook.com/pun.yobinkumar/"
                                className="footer-container__icons"
                                target="_blank"
                                fgColor="#fff"
                                style={{ height: 40, width: 40 }}
                                rel="noopener noreferrer"
                            />
                            <SocialIcon
                                url="https://www.linkedin.com/in/yobin-kumar-pun-411697142/"
                                className="footer-container__icons"
                                target="_blank"
                                fgColor="#fff"
                                style={{ height: 40, width: 40 }}
                                rel="noopener noreferrer"
                            />
                            <SocialIcon
                                url="https://github.com/yobin7364"
                                className="footer-container__icons"
                                target="_blank"
                                fgColor="#fff"
                                style={{ height: 40, width: 40 }}
                                rel="noopener noreferrer"
                            />
                        </div>

                        <div className="creator">
                            Handcrafted by me.
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}
