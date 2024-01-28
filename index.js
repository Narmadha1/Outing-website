const button=document.getElementById("yes");
const button1=document.getElementById("no");
let img=document.getElementById("gif");
let please=document.getElementById("please");
let final=document.getElementById("finalimg");
let cel=document.getElementById("celeb");
let bc=document.getElementById("bc");
const bgImage = document.querySelector('.bg-image');
let answer;

button.onclick=function(){
    
    document.getElementById("h3").textContent="Are you sure boo?";
    button.onclick=function(){
        document.getElementById('h3').textContent="Congratulations ,we are now married boo!!!";
        button.remove();
        button1.remove();
        img.remove();
        please.remove();
        final.style.visibility='visible';
        cel.style.visibility='visible';
        bc.style.backgroundColor="lightcoral";
        bgImage.style.backgroundImage.visibility='visible';
        bgImage.style.backgroundImage ="url('Falling\ Confetti\ Happy\ Birthday\ Gif\ Pictures\,\ Photos\,\ And\ Images\ For\ \ DDE.gif')";
        
        
        
        
    }
    
}
button1.onclick=function(){
    document.getElementById("h3").textContent="Why boo? "
    img.remove();
    please.style.visibility='visible';
    button1.onclick=function(){
        document.getElementById("h3").textContent="Why? click on yes boo"
        button1.onclick=function(){
            document.getElementById("h3").textContent=" click on yes,now"
            button1.onclick=function(){
        
                document.getElementById("h3").textContent=" just click on yes,now"
                button1.remove();
                img.remove();
                
               


            }
         

        }
        
    }
    


}

function showElement() {
    element = document.getElementById('please');
    element.style.visibility = 'visible';
}
