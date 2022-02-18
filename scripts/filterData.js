export default function getMatchingData(projects) {
    const valuePage = location.search.substring(1);
    return projects[valuePage];
}