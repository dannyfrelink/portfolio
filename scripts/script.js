import getMatchingData from "./filterData.js";
import inputImages from "./inputImage.js";
import inputTexts from "./inputText.js";

const fetchData = () => {
    fetch('./projects.json')
        .then(res => res.json())
        .then(projects => getMatchingData(projects))
        .then(filteredProjects => inputImages(filteredProjects))
        .then(filteredProjects => inputTexts(filteredProjects))
}

fetchData();