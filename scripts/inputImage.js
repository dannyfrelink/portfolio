
const introImage = document.querySelector('#introImage');
const ulImage1_1 = document.querySelector('#ul1_1');
const ulImage1_2 = document.querySelector('#ul1_2');
const ulImage2_1 = document.querySelector('#ul2_1');
const ulImage2_2 = document.querySelector('#ul2_2');
const ulImage2_3 = document.querySelector('#ul2_3');
const ulImage3_1 = document.querySelector('#ul3_1');
const ulImage3_2 = document.querySelector('#ul3_2');
const ulImage3_3 = document.querySelector('#ul3_3');
const ulImage4_1 = document.querySelector('#ul4_1');
const ulImage4_2 = document.querySelector('#ul4_2');
const ulImage4_3 = document.querySelector('#ul4_3');

export default function inputImages(filteredProjects) {
    // Set image src
    introImage.src = filteredProjects.images.introImage;
    ulImage1_1.src = filteredProjects.images.ul1_1;
    ulImage1_2.src = filteredProjects.images.ul1_2;
    ulImage2_1.src = filteredProjects.images.ul2_1;
    ulImage2_2.src = filteredProjects.images.ul2_2;
    ulImage2_3.src = filteredProjects.images.ul2_3;
    ulImage3_1.src = filteredProjects.images.ul3_1;
    ulImage3_2.src = filteredProjects.images.ul3_2;
    ulImage3_3.src = filteredProjects.images.ul3_3;
    ulImage4_1.src = filteredProjects.images.ul4_1;
    ulImage4_2.src = filteredProjects.images.ul4_2;
    ulImage4_3.src = filteredProjects.images.ul4_3;

    // Set image alt
    introImage.alt = filteredProjects.altImages.introImage;
    ulImage1_1.alt = filteredProjects.altImages.ul1_1;
    ulImage1_2.alt = filteredProjects.altImages.ul1_2;
    ulImage2_1.alt = filteredProjects.altImages.ul2_1;
    ulImage2_2.alt = filteredProjects.altImages.ul2_2;
    ulImage2_3.alt = filteredProjects.altImages.ul2_3;
    ulImage3_1.alt = filteredProjects.altImages.ul3_1;
    ulImage3_2.alt = filteredProjects.altImages.ul3_2;
    ulImage3_3.alt = filteredProjects.altImages.ul3_3;
    ulImage4_1.alt = filteredProjects.altImages.ul4_1;
    ulImage4_2.alt = filteredProjects.altImages.ul4_2;
    ulImage4_3.alt = filteredProjects.altImages.ul4_3;

    return filteredProjects;
}