const button=document.querySelector('button');
const gameArea=document.querySelector(".game");
const message=document.querySelector(".message");
let gamePlay=false;
let score=0;

button.addEventListener('click', function(){
    if(!gamePlay){
        gamePlay=true;
        score=0;
        gameArea.innerHTML="";
        message.innerHTML="";
        maker();
        button.innerHTML="Check Combo";
    }else{
        score++;
        message.innerHTML='Guesses: '+ score;
        const numbers=document.querySelectorAll(".numsize");
        let winCondition=0;
        for(i=0;i<numbers.length;i++){
            if(numbers[i].value==numbers[i].correct){
                numbers[i].style.backgroundColor='rgb(121, 187, 55)';
                numbers[i].style.color='white';
                winCondition++;
            }else{
                let color = (numbers[i].value<numbers[i].correct)? 'blue':'red';
                numbers[i].style.backgroundColor=color;
                numbers[i].style.color='black';
            }
            
            if(winCondition==numbers.length){
                gameEnd();

        }}
    }
})

function gameEnd(){
    gamePlay=false;
    message.innerHTML='You solved the combo in '+ score+ ' guesses.';
    button.innerHTML="Restart game";
}


function maker(){
for(x=0;x<5;x++){
    let ele=document.createElement("input");
    gameArea.appendChild(ele);
    ele.setAttribute('type', 'number');
    ele.max=9;
    ele.min=0;
    ele.size=1;
    ele.order=x;
    ele.correct=Math.floor(Math.random()*10);
    ele.value= 0;
    ele.style.width="80px";
    ele.style.height="100px";
    ele.classList.add('numsize');
}
}

