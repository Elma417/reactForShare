import React from 'react';
import { ResumeData } from './data';
import './index.css';

function BasicInfo(props) {
    const { name, description, school, profession, sex, education, workage, phone, email } = props.basicinfo;
    return (
        <section className="basicinfo" >
            <div className="text-info name">
                {name}
            </div>
            <div className="text-info description">
                {description}
            </div>
            <div className="text-info">
                <i className="fa fa-university"></i>
                {school}·{profession}
            </div>
            <div className="text-info">
                <i className="fa fa-user"></i>
                {sex}·{education}·{workage}
            </div>
            <div className="phone text-info inline-block">
                {!phone ? "" :
                    <div>
                        <i className="fa fa-phone"></i>
                        <a href={"tel:" + phone}>{phone}</a>
                    </div>
                }
            </div>
            <div className="email text-info inline-block">
                {!email ? "" :
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <a href={"mailto:" + email} target='_blank' rel="noreferrer">{email}</a>
                    </div>
                }
            </div>
        </section>
    )
}

function Resume(props) {
    const { avatar, social, basicinfo, Awards, schoolExperiences, InternExperiences, ProjectExperience } = props.resume;
    return (
        <div className="resume-container animated fadeInUp">
            <header>
                <img className="avatar" src={avatar} alt='avatar' />
            </header>
            <BasicInfo basicinfo={basicinfo} />
            <Social social={social} />
            <ExperienceList type="工作经历" experiences={InternExperiences} />
            <ExperienceList type="项目经验" experiences={ProjectExperience} />
            <ExperienceList type="获奖经历" experiences={Awards} />
            <ExperienceList type="校园经历" experiences={schoolExperiences} />
        </div>
    )
}

function Social(props) {
    return (
        <section className="social">
            {props.social.map(function (item) {
                return (
                    <a href={item.link} key={item.type + item.link} target='_blank' rel="noreferrer">
                        <img src={item.icon} alt='social-icon' />
                    </a>
                )

            })}
        </section>
    )
}

function ExperienceList(props) {
    const { type, experiences } = props;
    return (
        <section className="experiencelist">
            <div className="experience-type">
                {type}
            </div>
            {experiences.map(function (experience) {
                return (
                    <Experience experience={experience} key={experience.name} />
                )
            })}
        </section>
    )
}

function Experience(props) {
    const { icon, name_link, name, title, time, description, location } = props.experience;
    return (
        <section className="experience">
            <div className="clearfix item">
                {
                    icon ? (
                        <div className="icon fl">
                            <img src={icon} alt='icon' />
                        </div>
                    ) : null
                }
                <div className="fl name-title">
                    <div className="name">
                        {!name_link ?
                            <span>{name}</span> :
                            <a href={name_link} target='_blank' rel="noreferrer">{name}</a>
                        }
                        {!name_link ? "" :
                            <i className="fa fa-link"></i>
                        }
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
                <div className="fr time-location">
                    <div className="time">
                        {time}
                    </div>
                    <div className="location">
                        {!location ? "" :
                            <div>
                                <i className="fa fa-map-marker"></i>
                                {location}
                            </div>
                        }
                    </div>
                </div>
            </div>
            {!description ? "" :
                <div className="description">
                    {description}
                </div>
            }
        </section>
    )
}

export default function App() {
    return (
        <Resume resume={ResumeData} />
    )
}