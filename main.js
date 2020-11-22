var block=document.getElementById('block');
var hole=document.getElementById('hole');
var cha=document.getElementById('cha');
var re=document.getElementById('retry');
var jumping=0;
var sail=0;
hole.addEventListener('animationiteration',()=>{
    document.getElementById('score').innerText=sail;
    var random=-((Math.random()*300)+150);
    console.log(random);
    hole.style.top=random+'px';
    if(jumping==3){
        block.style.animation='none';
        hole.style.animation='none';
        cha.style.height='0px';
        re.style.display='flex';
    }
    sail++;
});
var AniM=setInterval(function(){
    var top=parseInt(window.getComputedStyle(cha).getPropertyValue('top'));
    var blockl=parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var holel=parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    var ctop=-(400-top);
    console.log(ctop);
    if(top>385){
        jumping=3;
    }
    else if(((blockl<20)&&(blockl>-50))&&((ctop<holel)||(ctop>holel+145))){
        
        jumping=3;  
    }
    if(jumping==0){
       
        cha.style.top=(top+3)+'px';
    }
    
});
var have=parseInt(window.getComputedStyle(cha).getPropertyValue('top'));

function jump(){
    if(jumping==0){
        jumping=1;
        var jumpCount=0;
        var jumpTime=setInterval(function(){
            var top=parseInt(window.getComputedStyle(cha).getPropertyValue('top'));
            if(top<2){
                jumping=0;
                jumpCount=0;
                clearInterval(jumpTime);

            }
            if((jumpCount<20)){
                cha.style.top=(top-5)+'px';
            }
            else if(jumpCount>25){
                jumping=0;
                jumpCount=0;
                clearInterval(jumpTime);
            }
            jumpCount++;

        },10)
    }
}
function res(){
    jumping=0;
    block.style.animation='ltr 2s infinite linear';
    hole.style.animation='ltr 2s infinite linear';
    cha.style.height='35px';
    re.style.display='none';
    sail=0;
    document.getElementById('score').innerText=sail;
}