// main.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description for Project One',
            image: 'path/to/image1.jpg',
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description for Project Two',
            image: 'path/to/image2.jpg',
            link: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'Description for Project Three',
            image: 'path/to/image3.jpg',
            link: 'https://github.com/user/project-three'
        }
    ];

    const projectListContainer = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectListContainer.appendChild(projectCard);
    });
});