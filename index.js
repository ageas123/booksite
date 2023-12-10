function myFunction(){
    document.getElementsByClassName("div1")[0].style.backgroundColor = "blueviolet";
}


    let acc = document.getElementsByClassName("accordion");
    let panelArray = document.getElementsByClassName("panel");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = panelArray[0];
        let compStyles = window.getComputedStyle(panel);
        if (compStyles.getPropertyValue("max-height") == "0px") {
        panel.style.maxHeight = "100%";
        } else {
        panel.style.maxHeight = "0px";
        }
    });
    }
