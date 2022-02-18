const fetchData = () => {
    fetch('./projects.json')
        .then(res => res.json())
        .then(projects => getMatchingData(projects))
        .then(filteredProjects => inputProjects(filteredProjects))
}

fetchData()

const getMatchingData = (projects) => {
    const valuePage = location.search.substring(1);
    return projects[valuePage];
}

const introImage = document.querySelector('#introImage');
const ulImage1_1 = document.querySelector('#ul1_1')

const inputProjects = (filteredProjects) => {
    introImage.src = filteredProjects.images.introImage;
    introImage.alt = filteredProjects.altImages.introImage

    ulImage1_1.src = filteredProjects.images.ul1_1;
    ulImage1_1.alt = filteredProjects.altImages.ul1_1





    console.log(filteredProjects.images.introImage)
}