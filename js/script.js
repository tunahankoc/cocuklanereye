var popularBtn = document.querySelector(".btn-popular");
var lastestBtn = document.querySelector(".btn-lastest");
var ctrlLeft = document.querySelector(".news-left-ctrl");
var ctrlRight = document.querySelector(".news-right-ctrl");
var popularCont = document.querySelector(".popular-news-container");
var lastestCont = document.querySelector(".lastest-news-container");
var twitCont = document.querySelector(".twit-container");
var twitCtrlUp = document.querySelector(".twit-up");
var twitCtrlDown = document.querySelector(".twit-down");



/*
if(popularBtn){
    popularBtn.addEventListener("click", function(){
    if (popularCont.classList.contains("hidden")) {
        
        popularCont.classList.remove("hidden");
        popularCont.classList.add("visible");
        popularBtn.classList.remove("sidebar-deactive");
        popularBtn.classList.add("sidebar-active");
        lastestBtn.classList.remove("sidebar-active");
        lastestBtn.classList.add("sidebar-deactive");
        lastestCont.classList.remove("visible");
        lastestCont.classList.add("hidden");
        console.log("d-block");
    }
    console.log(lastestCont.classList);
    console.log(popularCont.classList);
})
}
*/

var popular = {
    popularBtn: document.querySelector(".btn-popular"),
    lastestBtn: document.querySelector(".btn-lastest"),
    lastestCont: document.querySelector(".lastest-news-container"),
    popularCont: document.querySelector(".popular-news-container"),
    
    popularShow: function (){
        
        popular.popularBtn.addEventListener("click", function(){
        if (popularCont.classList.contains("hidden")) {

            popular.popularCont.classList.remove("hidden");
            popular.popularCont.classList.add("visible");
            popular.popularBtn.classList.remove("sidebar-deactive");
            popular.popularBtn.classList.add("sidebar-active");
            popular.lastestBtn.classList.remove("sidebar-active");
            popular.lastestBtn.classList.add("sidebar-deactive");
            popular.lastestCont.classList.remove("visible");
            popular.lastestCont.classList.add("hidden");
            console.log("d-block");
        }
        console.log(popular.lastestCont.classList);
        console.log(popular.popularCont.classList);
    })
    
    },
    
    lastestShow: function (){
        lastestBtn.addEventListener("click", function(){
            if (lastestCont.classList.contains("hidden")) {

                popular.lastestCont.classList.remove("hidden");
                popular.lastestCont.classList.add("visible");
                popular.lastestBtn.classList.remove("sidebar-deactive");
                popular.lastestBtn.classList.add("sidebar-active");
                popular.popularBtn.classList.remove("sidebar-active");
                popular.popularBtn.classList.add("sidebar-deactive");
                popular.popularCont.classList.remove("visible");
                popular.popularCont.classList.add("hidden");
                console.log("d-block");
            }
            console.log(popularCont.classList);
            console.log(lastestCont.classList);
        });
    }
}




/*
if(lastestBtn){
    lastestBtn.addEventListener("click", function(){
    if (lastestCont.classList.contains("hidden")) {
        
        lastestCont.classList.remove("hidden");
        lastestCont.classList.add("visible");
        lastestBtn.classList.remove("sidebar-deactive");
        lastestBtn.classList.add("sidebar-active");
        popularBtn.classList.remove("sidebar-active");
        popularBtn.classList.add("sidebar-deactive");
        popularCont.classList.remove("visible");
        popularCont.classList.add("hidden");
        console.log("d-block");
    }
    console.log(popularCont.classList);
    console.log(lastestCont.classList);
});
}
*/



if(popular.popularCont){
    
    popular.popularShow();
    
    var pNewsIndex = 1;
    showPNews(pNewsIndex);

    function changePNews(n) {
        showPNews(pNewsIndex += n);
    }

    function showPNews (n) {
        var i;
        var pNews = document.getElementsByClassName("popular-news");

        if(n > pNews.length) {
            pNewsIndex = 1;
        }

        if (n < 1) {
            pNewsIndex = pNews.length;
        }

        for (i=0; i < pNews.length ; i++) {
            pNews[i].style.display="none";
        }

        pNews[pNewsIndex-1].style.display = "block";
    }

}

if(popular.lastestCont){
    
    popular.lastestShow();
    
    var lNewsIndex = 1;
    showLNews(lNewsIndex);

    function changeLNews(n) {
        showLNews(lNewsIndex += n);
    }

    function showLNews (n) {
        var i;
        var lNews = document.getElementsByClassName("lastest-news");

        if(n > lNews.length) {
            lNewsIndex = 1;
        }

        if (n < 1) {
            lNewsIndex = lNews.length;
        }

        for (i=0; i < lNews.length ; i++) {
            lNews[i].style.display="none";
        }

        lNews[lNewsIndex-1].style.display = "block";
    }
}






/*
twitCtrlUp.addEventListener("click", function () {
    var i=0;
    var n=Number(twitCont.childElementCount);
    var j=0;
    
    if (j==twitCont.childElementCount) {
        j=0;
    } else {
        j++;
        console.log(j);
    }
    
    i++;
    for (i; i<=n;i++) {
        console.log(i);
        document.querySelector(".twit-content-"+i).classList.remove("d-block");
        document.querySelector(".twit-content-"+i).classList.add("d-none");
        console.log(document.querySelector(".twit-content-"+i).classList);
        
    } 
    
})
*/


















