import React, { useState } from 'react'
import ReactDOMServer from "react-dom/server";
import {Container, Row, Col} from "react-bootstrap";
import "../assets/css/home.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import linkedInIcon from "../assets/icons/linkedin.png";
import twitterIcon from '../assets/icons/twitter.png';
import emailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/phone.png';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import userImage from "../assets/img/profile-photo.png";
/* Editor for react */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* Js pdf for react */
import { jsPDF } from "jspdf"

function Home() {
  const [name, setName] = useState({
      firstname: "",
      lastname: "",
  })
  const [role, setRole] = useState("");
  const [email, setEmail ] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [editor, setEditor] = useState("");

  const generatePDF = () => {
      let Resume = () => {
         return(
            <div className="resume-pdfCol">
                <div className="resume-preview resume-pdf">
                    <Row>
                        <div style={{width: "30%"}}>
                            <div className="profile-basic">
                                <div className="profile-photo">
                                    <img src={userImage} className="img-fluid" alt="profile" />
                                </div>
                                <div className="profile-info">
                                    <div className="work-experience">
                                        <h4>Work Experience</h4>

                                        <div className="work-outline">
                                            <h5 className="work-title">Business Manager</h5>
                                            <p className="company">Airstate Solution</p>
                                            <p className="work-duration">Apr 2018 - Jan 2020</p>
                                        </div>

                                        <div className="work-outline">
                                            <h5 className="work-title">Business Manager</h5>
                                            <p className="company">Airstate Solution</p>
                                            <p className="work-duration">Apr 2018 - Jan 2020</p>
                                        </div>

                                        <div className="work-outline">
                                            <h5 className="work-title">Business Manager</h5>
                                            <p className="company">Airstate Solution</p>
                                            <p className="work-duration">Apr 2018 - Jan 2020</p>
                                        </div>
                                    </div>

                                    <div className="education">
                                        <h4>Education</h4>

                                        <div className="edu-outline">
                                            <h5 className="edu-title">Masters in Computer Science</h5>
                                            <p className="edu-uni">Airstate Solution</p>
                                            <p className="edu-date">Apr 2018 - Jan 2020</p>
                                            <p className="edu-cgpa">3.80 of 4.00</p>
                                        </div>

                                        <div className="edu-outline">
                                            <h5 className="edu-title">Bachelors in Science</h5>
                                            <p className="edu-uni">Airstate Solution</p>
                                            <p className="edu-date">Apr 2018 - Jan 2020</p>
                                            <p className="edu-cgpa">3.80 of 4.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width:"70%"}}>
                            <div className="profile-detail">
                                <div className="detail-basic">
                                    <h3 className="prof-name">{name.firstname} {name.lastname}</h3>
                                    <h5 className="prof-design">{role}</h5>

                                    <p className="profile-desc">I am a UI/UX Designer currently living in Bangladesh. <br/>
                                        Focused on creating a unique visualconcept through <br/>
                                        my design. Love quietness. consectetuer adipiscing elit, <br/> 
                                        sed diam nonummy </p>

                                    <ul className="social-list nav row">
                                        <li className="col-sm-12">
                                            <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                            <span className="info">{address}</span>
                                        </li>
                                        <div className="col-sm-6">
                                            <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                            <span className="info">Social link</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="icon"><img src={twitterIcon} alt="linkedin-icon" /></i>
                                            <span className="info">@design</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="icon"><img src={emailIcon} alt="linkedin-icon" /></i>
                                            <span className="info"> {email} </span>
                                        </div>
                                        <div className="col-sm-6">
                                            <i className="icon"><img src={phoneIcon} alt="linkedin-icon" /></i>
                                            <span className="info"> {phone} </span>
                                        </div>
                                    </ul>

                                    <div className="skill-section">
                                        <h3 className="section-title">Skill</h3>

                                        <div className="skill-item">
                                            <p style={{width:"30%"}}>Leadership</p>
                                            <div className="skill-rate">
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <p style={{width:"30%"}}>Teamwork</p>
                                            <div className="skill-rate">
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <p style={{width:"30%"}}>Communication</p>
                                            <div className="skill-rate">
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <p style={{width:"30%"}}>Work Ethic</p>
                                            <div className="skill-rate">
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <p style={{width:"30%"}}>Flexibility</p>
                                            <div className="skill-rate">
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq sq-fill"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                                <div className="sq"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="organization-section">
                                        <h3 className="section-title">Organization</h3>

                                        <div className="org-item">
                                            <h4 className="org-name">Bidyanondo Foundation</h4>
                                            <p>Graphic Designer</p>
                                            <p>Children & Education</p>
                                            <p>Sep 2016 - Present</p>
                                        </div>

                                        <div className="org-item">
                                            <h4 className="org-name">Bidyanondo Foundation</h4>
                                            <p>Graphic Designer</p>
                                            <p>Children & Education</p>
                                            <p>Sep 2016 - Present</p>
                                        </div>

                                        <div className="org-item">
                                            <h4 className="org-name">Bidyanondo Foundation</h4>
                                            <p>Graphic Designer</p>
                                            <p>Children & Education</p>
                                            <p>Sep 2016 - Present</p>
                                        </div>

                                        <div className="org-item">
                                            <h4 className="org-name">Bidyanondo Foundation</h4>
                                            <p>Graphic Designer</p>
                                            <p>Children & Education</p>
                                            <p>Sep 2016 - Present</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Row>
                </div> 
            </div>
         )
      };
      const doc = new jsPDF("p", "pt", "a4");
      doc.setFont('Roboto-Regular', 'normal');
      doc.setFontSize(8);
      doc.html(ReactDOMServer.renderToString(<Resume />), {
        x: 0,
        y: 0,
        callback: function (doc) {
          doc.save('sample.pdf');
        },
        width: 650, // <- here
        windowWidth: 650 // <- here
      });

    // doc.html(source, { x: 10, y: 10});
    // doc.save("test.pdf");
  }
  
  return (
    <div>
        <div className="top-strip">
            <div className="back-link">
                <a className="nav-link" href="/">Back to Main Interface</a>
            </div>
            <div className="button-group">
                <button className="btn btn-primary" onClick={generatePDF}>Download</button>
                <button className="btn btn-primary">:</button>
            </div>
        </div>
        <div className="main-content">
            <Row>
                <Col sm={2}>
                    <aside className="sidebar">
                        <ul className="nav flex-column">
                            <li>
                                <a href="/" className="nav-link">
                                    <i><AccountBoxIcon/></i>
                                    <span>Personal Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link">
                                    <i><ContactMailIcon/></i>
                                    <span>Profile Summary</span>
                                </a>
                            </li>
                            <li>
                                <button className="btn btn-sm btn-add">
                                    <i><AddIcon /></i>
                                    Add Section
                                </button>
                            </li>
                        </ul>
                    </aside>
                </Col>
                <Col sm={10}>
                    <main className="resume-section">
                        <Container>
                            <Row>
                                <Col sm={6} className="resume-colOne">
                                    <div className="resume-form">
                                        <div className="top-head">
                                            <h4 className="resume-name">Resume Name 
                                                <i><EditIcon /></i>
                                            </h4>
                                            <div className="lang-dropdown">
                                                <select name="" id="">
                                                    <option value="">English</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h3 className="section-title">PERSONAL DETAILS</h3>

                                            <form action="">
                                                <Row className='align-items-end'>
                                                    <div className="col-sm-9 form-field">
                                                        <label htmlFor="">Job Title</label>
                                                        <input type="text" value={role} onChange={(e) => { setRole(e.target.value) }} className="form-control" />
                                                    </div>
                                                    <div className="col-sm-3 form-field">
                                                        <button className="btn-photo">Add Photo</button>
                                                    </div>
                                                </Row>

                                                <div className="row">
                                                    <div className="col-sm-6 form-field">
                                                        <label htmlFor="">FirstName: </label>
                                                        <input type="text" value={name.firstname} onChange={(e) => { setName({...name, firstname: e.target.value}) }} className="form-control" />
                                                    </div>
                                                    <div className="col-sm-6 form-field">
                                                        <label htmlFor="">Last Name:</label>
                                                        <input type="text" value={name.lastname} onChange={(e) => { setName({...name, lastname: e.target.value}) }} className="form-control" />
                                                    </div>

                                                    <div className="col-sm-6 form-field">
                                                        <label htmlFor="">Email: </label>
                                                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" />
                                                    </div>
                                                    <div className="col-sm-6 form-field">
                                                        <label htmlFor="">Phone:</label>
                                                        <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="form-control" />
                                                    </div>

                                                    <div className="col-sm-12 form-field">
                                                        <label htmlFor="">Address:</label>
                                                        <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" />
                                                    </div>

                                                    <div className="col-sm-4 form-field">
                                                        <label htmlFor="">Country:</label>
                                                        <input type="text" className="form-control" />
                                                    </div>

                                                    <div className="col-sm-4 form-field">
                                                        <label htmlFor="">State:</label>
                                                        <input type="text" className="form-control" />
                                                    </div>

                                                    <div className="col-sm-4 form-field">
                                                        <label htmlFor="">City:</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="form-section mt-5">
                                            <h3 className="section-title">PROFILE SUMMARY</h3>
                                            <ReactQuill value={editor} onChange={(e) => setEditor(e.target.value)}/>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={6} className="resume-colTwo">
                                    <div className="resume-preview">
                                        <div className="row equal-row">
                                            <div className="col-sm-5">
                                                <div className="profile-basic">
                                                    <div className="profile-photo">
                                                        <img src={userImage} className="img-fluid" alt="profile" />
                                                    </div>
                                                    <div className="profile-info">
                                                        <div className="work-experience">
                                                            <h4>Work Experience</h4>

                                                            <div className="work-outline">
                                                                <h5 className="work-title">Business Manager</h5>
                                                                <p className="company">Airstate Solution</p>
                                                                <p className="work-duration">Apr 2018 - Jan 2020</p>
                                                            </div>

                                                            <div className="work-outline">
                                                                <h5 className="work-title">Business Manager</h5>
                                                                <p className="company">Airstate Solution</p>
                                                                <p className="work-duration">Apr 2018 - Jan 2020</p>
                                                            </div>

                                                            <div className="work-outline">
                                                                <h5 className="work-title">Business Manager</h5>
                                                                <p className="company">Airstate Solution</p>
                                                                <p className="work-duration">Apr 2018 - Jan 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="education">
                                                            <h4>Education</h4>

                                                            <div className="edu-outline">
                                                                <h5 className="edu-title">Masters in Computer Science</h5>
                                                                <p className="edu-uni">Airstate Solution</p>
                                                                <p className="edu-date">Apr 2018 - Jan 2020</p>
                                                                <p className="edu-cgpa">3.80 of 4.00</p>
                                                            </div>

                                                            <div className="edu-outline">
                                                                <h5 className="edu-title">Bachelors in Science</h5>
                                                                <p className="edu-uni">Airstate Solution</p>
                                                                <p className="edu-date">Apr 2018 - Jan 2020</p>
                                                                <p className="edu-cgpa">3.80 of 4.00</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                               </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="profile-detail">
                                                    <div className="detail-basic">
                                                        <h3 className="prof-name">{name.firstname} {name.lastname}</h3>
                                                        <h5 className="prof-design">{role}</h5>

                                                        <p className="profile-desc">I am a UI/UX Designer currently living in Bangladesh.Focused on creating a unique visualconcept through my design.
                                                         Love quietness. consectetuer adipiscing elit, sed diam nonummy </p>

                                                        <ul className="social-list nav row">
                                                            <li className="col-sm-12">
                                                                <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                                                <span className="info">{address}</span>
                                                            </li>
                                                            <div className="col-sm-6">
                                                                <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                                                <span className="info">Social link</span>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <i className="icon"><img src={twitterIcon} alt="linkedin-icon" /></i>
                                                                <span className="info">@design</span>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <i className="icon"><img src={emailIcon} alt="linkedin-icon" /></i>
                                                                <span className="info"> {email} </span>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <i className="icon"><img src={phoneIcon} alt="linkedin-icon" /></i>
                                                                <span className="info"> {phone} </span>
                                                            </div>
                                                        </ul>

                                                        <div className="skill-section">
                                                            <h3 className="section-title">Skill</h3>

                                                            <div className="skill-item">
                                                                <div className="col-sm-3">
                                                                    <p>Leadership</p>
                                                                </div>
                                                                <div className="col-sm-9 skill-rate">
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                </div>
                                                            </div>

                                                            <div className="skill-item">
                                                                <div className="col-sm-3">
                                                                    <p>Teamwork</p>
                                                                </div>
                                                                <div className="col-sm-9 skill-rate">
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                </div>
                                                            </div>

                                                            <div className="skill-item">
                                                                <div className="col-sm-3">
                                                                    <p>Communication</p>
                                                                </div>
                                                                <div className="col-sm-9 skill-rate">
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                </div>
                                                            </div>

                                                            <div className="skill-item">
                                                                <div className="col-sm-3">
                                                                    <p>Work Ethic</p>
                                                                </div>
                                                                <div className="col-sm-9 skill-rate">
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                </div>
                                                            </div>

                                                            <div className="skill-item">
                                                                <div className="col-sm-3">
                                                                    <p>Flexibility</p>
                                                                </div>
                                                                <div className="col-sm-9 skill-rate">
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq sq-fill"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                    <span className="sq"></span>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="organization-section">
                                                            <h3 className="section-title">Organization</h3>

                                                            <div className="org-item">
                                                                <h4 className="org-name">Bidyanondo Foundation</h4>
                                                                <p>Graphic Designer</p>
                                                                <p>Children & Education</p>
                                                                <p>Sep 2016 - Present</p>
                                                            </div>

                                                            <div className="org-item">
                                                                <h4 className="org-name">Bidyanondo Foundation</h4>
                                                                <p>Graphic Designer</p>
                                                                <p>Children & Education</p>
                                                                <p>Sep 2016 - Present</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </main>
                </Col>
            </Row>
        </div>
    </div>
  )
}

function Editor({value, setValue}) {
    return (
        <ReactQuill value={value} onChange={setValue}/>
    );
}

export default Home