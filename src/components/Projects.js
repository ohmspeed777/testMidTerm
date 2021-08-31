import React from 'react';
import Project__list from './Project__list';

const Projects = ({ data }) => {

  const listItem1 = data.slice(0, 4)
  const listItem2 = data.slice(3, -1)

  return (
    <React.Fragment>
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>
      <Project__list data={listItem1} />
      <Project__list data={listItem2} />
    </React.Fragment>
  );
};

export default Projects;
