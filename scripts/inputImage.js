
const introImage = document.querySelector('#introImage');
const ulImage1_1 = document.querySelector('#ul1_1');
const ulImage1_2 = document.querySelector('#ul1_2');
const ulImage1_3 = document.querySelector('#ul1_3');
const ulImage2_1 = document.querySelector('#ul2_1');
const ulImage2_2 = document.querySelector('#ul2_2');
const ulImage2_3 = document.querySelector('#ul2_3');
const ulImage3_1 = document.querySelector('#ul3_1');
const ulImage3_2 = document.querySelector('#ul3_2');
const ulImage3_3 = document.querySelector('#ul3_3');
const ulImage4_1 = document.querySelector('#ul4_1');
const ulImage4_2 = document.querySelector('#ul4_2');
const ulImage4_3 = document.querySelector('#ul4_3');

const sectionThree = document.querySelector('section:nth-of-type(3)');
const sectionFour = document.querySelector('section:nth-of-type(4)');

function inputImages(filteredProjects) {
    const filteredImages = filteredProjects.images;
    const filteredAltImages = filteredProjects.altImages;

    // Set image src
    filteredImages.introImage ? introImage.src = filteredImages.introImage : introImage.remove();
    filteredImages.ul1_1 ? ulImage1_1.src = filteredImages.ul1_1 : ulImage1_1.remove();
    filteredImages.ul1_2 ? ulImage1_2.src = filteredImages.ul1_2 : ulImage1_2.remove();
    filteredImages.ul1_3 ? ulImage1_3.src = filteredImages.ul1_3 : ulImage1_3.remove();
    filteredImages.ul2_1 ? ulImage2_1.src = filteredImages.ul2_1 : ulImage2_1.remove();
    filteredImages.ul2_2 ? ulImage2_2.src = filteredImages.ul2_2 : ulImage2_2.remove();
    filteredImages.ul2_3 ? ulImage2_3.src = filteredImages.ul2_3 : ulImage2_3.remove();
    filteredImages.ul3_1 ? ulImage3_1.src = filteredImages.ul3_1 : ulImage3_1.remove() & sectionThree.remove();
    filteredImages.ul3_2 ? ulImage3_2.src = filteredImages.ul3_2 : ulImage3_2.remove();
    filteredImages.ul3_3 ? ulImage3_3.src = filteredImages.ul3_3 : ulImage3_3.remove();
    filteredImages.ul4_1 ? ulImage4_1.src = filteredImages.ul4_1 : ulImage4_1.remove() & sectionFour.remove();
    filteredImages.ul4_2 ? ulImage4_2.src = filteredImages.ul4_2 : ulImage4_2.remove();
    filteredImages.ul4_3 ? ulImage4_3.src = filteredImages.ul4_3 : ulImage4_3.remove();

    // Set image alt
    introImage.alt = filteredAltImages.introImage;
    ulImage1_1.alt = filteredAltImages.ul1_1;
    ulImage1_2.alt = filteredAltImages.ul1_2;
    ulImage1_3.alt = filteredAltImages.ul1_3;
    ulImage2_1.alt = filteredAltImages.ul2_1;
    ulImage2_2.alt = filteredAltImages.ul2_2;
    ulImage2_3.alt = filteredAltImages.ul2_3;
    ulImage3_1.alt = filteredAltImages.ul3_1;
    ulImage3_2.alt = filteredAltImages.ul3_2;
    ulImage3_3.alt = filteredAltImages.ul3_3;
    ulImage4_1.alt = filteredAltImages.ul4_1;
    ulImage4_2.alt = filteredAltImages.ul4_2;
    ulImage4_3.alt = filteredAltImages.ul4_3;

    return filteredProjects;
}

export { inputImages, introImage };