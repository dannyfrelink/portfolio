const titleHead = document.querySelector('title');
const headerText = document.querySelector('#h1');
const pWhen = document.querySelector('#pWhen');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const nextProject = document.querySelector('#nextProject');

export default function inputTexts(filteredProjects) {
    const filteredParagraph = filteredProjects.paragraph;

    filteredProjects.title ? titleHead.innerHTML = filteredProjects.title : titleHead.innerHTML = 'Case Study'
    filteredProjects.h1 ? headerText.innerHTML = filteredProjects.h1 : headerText.innerHTML = 'Case Study';
    filteredProjects.when ? pWhen.innerHTML = filteredProjects.when : pWhen.innerHTML = 'Unknown';
    filteredParagraph.first ? p1.innerHTML = filteredParagraph.first : p1.remove();
    filteredParagraph.second ? p2.innerHTML = filteredParagraph.second : p2.remove();
    filteredParagraph.third ? p3.innerHTML = filteredParagraph.third : p3.remove();
    filteredParagraph.fourth ? p4.innerHTML = filteredParagraph.fourth : p4.remove();
    filteredProjects.nextProject ? nextProject.href = filteredProjects.nextProject : nextProject.remove();
}