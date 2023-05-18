const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId)
    element.scrollIntoView({behavior: "smooth", block: "center"});
};

const navigateTo = (path) => {
    window.location = path;
}

 
