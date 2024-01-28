const button=document.getElementById("yes");
const button1=document.getElementById("no");
let img=document.getElementById("gif");
let please=document.getElementById("please");
let final=document.getElementById("finalimg");
let answer;

button.onclick=function(){
    
    document.getElementById("h3").textContent="Are you sure?";
    button.onclick=function(){
        document.getElementById('h3').textContent="Congratulations ,you are now married";
        button.remove();
        button1.remove();
        img.remove();
        please.remove();
        final.style.visibility='visible';
        
        
        
        
    }
    
}
button1.onclick=function(){
    document.getElementById("h3").textContent="Why? "
    img.remove();
    please.style.visibility='visible';
    button1.onclick=function(){
        document.getElementById("h3").textContent="Why? click on yes"
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
