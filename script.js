$(function(){
    console.log(location.pathname);
    if(location.pathname == "/" || location.pathname.indexOf("index.html") > 0){
        $("img").click(function(){
            location.href="image.html";
        });    
    } else if(location.pathname.indexOf("image.html") > 0){
    }

    
});