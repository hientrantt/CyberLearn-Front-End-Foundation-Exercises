
/* Truncate Card Text */
window.addEventListener("load",function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-text");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text,45);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}
