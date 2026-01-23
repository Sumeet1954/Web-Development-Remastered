    let targetId = document.querySelector('#abt');
    let targetId1 = document.querySelector('#msn');
    let targetId2 = document.querySelector('#pdt');
    targetId.addEventListener("click", function(){
        document.getElementById("About").scrollIntoView({ behavior: "smooth" });
        console.log(targetId);
    })
    targetId1.addEventListener("click", function(){
        document.getElementById("Mission").scrollIntoView({ behavior: "smooth" });
        console.log(targetId);
    })
    targetId2.addEventListener("click", function(){
        document.getElementById("Product").scrollIntoView({ behavior: "smooth" });
        console.log(targetId);
    })

    function scrollToSection() {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    }