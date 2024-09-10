let slideIcons = document.querySelectorAll(".slideIcon");
let textSlides = document.querySelectorAll(".textSlide");
let banner = document.getElementById("banner");
let contentElements = document.getElementById("contentElements");
let navBar = document.getElementById("navBar");
let navDrop = document.getElementById("navDrop");
let expandedNav = document.getElementById("expandedNav");

/*Banner carusel*/

const sliderLoop = setInterval(looper, 4000);

function looper() {
    
               let bannerClass = banner.className

           

            switch (bannerClass) {
                case "bannerOne":
                    slideIcons[1].classList.add("slideIconActive");
                    slideIcons[0].classList.remove("slideIconActive");
                    textSlides[1].classList.add("textSlideActive");
                    textSlides[0].classList.remove("textSlideActive");
                    banner.classList.replace("bannerOne", "bannerTwo");
                    if (contentElements.className == "contentElements") {
                        contentElements.classList.replace("contentElements", "contentElementsActive");
                    }
                    else if (contentElements.className == "contentElementsActive") {
                        contentElements.classList.replace("contentElementsActive", "contentElements");
                    };
                    break;
                case "bannerTwo":
                    slideIcons[0].classList.add("slideIconActive");
                    slideIcons[1].classList.remove("slideIconActive");
                    textSlides[0].classList.add("textSlideActive");
                    textSlides[1].classList.remove("textSlideActive");
                    banner.classList.replace("bannerTwo", "bannerOne");
                    if (contentElements.className == "contentElements") {
                        contentElements.classList.replace("contentElements", "contentElementsActive");
                    }
                    else if (contentElements.className == "contentElementsActive") {
                        contentElements.classList.replace("contentElementsActive", "contentElements");
                    };
                    break

            }
 
}

slideIcons.forEach((slide, index) => slide.addEventListener("click" , () => {      
        

            
            if (index === 0) {
                slideIcons[0].classList.add("slideIconActive");
                slideIcons[1].classList.remove("slideIconActive");
                textSlides[0].classList.add("textSlideActive");
                textSlides[1].classList.remove("textSlideActive");
                banner.classList.replace("bannerTwo", "bannerOne");
                if (contentElements.className == "contentElements") {
                    contentElements.classList.replace("contentElements", "contentElementsActive");
                }
                else if (contentElements.className == "contentElementsActive") {
                    contentElements.classList.replace("contentElementsActive", "contentElements");
                }

                
            }
            
            if (index === 1) {
                slideIcons[1].classList.add("slideIconActive");
                slideIcons[0].classList.remove("slideIconActive");
                textSlides[1].classList.add("textSlideActive");
                textSlides[0].classList.remove("textSlideActive");
                banner.classList.replace("bannerOne", "bannerTwo");
                if (contentElements.className == "contentElements") {
                    contentElements.classList.replace("contentElements", "contentElementsActive");
                }
                else if (contentElements.className == "contentElementsActive") {
                    contentElements.classList.replace("contentElementsActive", "contentElements");
                }
              
            }
                    
       
    }))







/* Sticky nav */


window.addEventListener("scroll", () => {
    if (window.scrollY > navBar.offsetTop) {
        navBar.classList.replace("navBar", "stickyNavBar")
        document.querySelector(".navButtons").style.color = "#000";        
        document.getElementById("logoImage").style.filter = "brightness(0%)"
        document.getElementById("chievron").style.filter = "brightness(0%)"
       
    }
    else {
        navBar.classList.replace("stickyNavBar", "navBar");
        document.querySelector(".navButtons").style.color = "#FFF";
        document.getElementById("logoImage").style.filter = "none"
        document.getElementById("chievron").style.filter = "none"
}
})


/*Expanded Nav */

navDrop.addEventListener("mouseover", () => {
    
    expandedNav.classList.replace("expandedNav", "expandedNavOpen")
    navBar.classList.replace("navBar", "navBarOpen");
    document.getElementById("expandedNavContent").classList.replace("expandedNavContent", "expandedNavContentVisible");
    document.querySelector(".navButtons").style.color = "#000";
    document.getElementById("logoImage").style.filter = "brightness(0%)"
    document.getElementById("chievron").style.filter = "brightness(0%)"
   
})

expandedNav.addEventListener("mouseleave", () => {


    hideExpandedNav();
})

const hideExpandedNav = () => {
    expandedNav.classList.replace("expandedNavOpen", "expandedNav");
    navBar.classList.replace( "navBarOpen", "navBar");
    document.getElementById("expandedNavContent").classList.replace("expandedNavContentVisible", "expandedNavContent");
    document.querySelector(".navButtons").style.color = "#FFF";
    document.getElementById("logoImage").style.filter = "none"
    document.getElementById("chievron").style.filter = "none"
   
}
