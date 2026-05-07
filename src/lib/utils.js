

export const scrollToSection = (sectionId, navHeight) => {
    const element = document.getElementById(sectionId);
    if(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
            top: offsetPosition - 20,
            behavior: 'smooth'
        });
    }

    
};