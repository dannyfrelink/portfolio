const headerText = document.querySelector('#h1');
const pWhen = document.querySelector('#pWhen');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');

export default function inputTexts(filteredProjects) {
    headerText.innerHTML = filteredProjects.h1;
    pWhen.innerHTML = filteredProjects.when;
    p1.innerHTML = filteredProjects.paragraph.first;
    p2.innerHTML = filteredProjects.paragraph.second;
    p3.innerHTML = filteredProjects.paragraph.third;
    p4.innerHTML = filteredProjects.paragraph.fourth;
}