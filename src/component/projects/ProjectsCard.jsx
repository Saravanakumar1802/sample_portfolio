import React from 'react';
import './projects.css';
import ProjectPic from "../../assets/project-img.jpg";

const ProjectsCard = () => {
    return (
        <section className="projects" id="projects">
            <h1 className="projects-title">Some of my Recent Projects</h1>
            <div className="projects-container">
                <div className="project-container project-card">
                    <img
                        src={ProjectPic}
                        alt="expense-tracker"
                        loading="lazy"
                        className="project-pic"
                    />
                    <h3 className="project-title">Expense Tracker</h3>
                    <p className="project-details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                        ratione vel inventore labore commodi modi quos culpa aut saepe!
                        Alias!
                    </p>

                    <div className="project_links">
                        <a href="javascript(void)" target="_blank" className="project-link">Demo
                        <i className="project_preview uil uil-arrow-up-right"></i>
                        </a>
                        <a href="javascript(void)" target="_blank" className="project-link">Source Code
                        <i className="project_github uil uil-github"></i>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProjectsCard