// ======================Dom part===================
// ----------player no.1
let playerOne = document.querySelector('.playerone')
let playeroneinput = document.querySelector('.playeroneinput')
//---------- player no. 2
let playerTwo = document.querySelector('.playerTwo')
let playerTwoinput = document.querySelector('.playerTwoinput')
// --------Common---------
let error = document.querySelector('.Error')
let PlayerName = document.querySelector('.PlayerName')
let winner = document. querySelector('.winner')
let chance =  0
let chanceNumber =  document.querySelector('.Joy')
// ==================Function===============
chanceNumber.innerHTML=chance
let btn=()=>{
    if(playeroneinput.value==''){
        error.innerHTML='Error'
    }else{
        if(playeroneinput.value>10){
            error.innerHTML='Inavaild'
        }else{
            if(playeroneinput.value<-5){
                error.innerHTML='Invaild Number'
            }else{
                playerOne.style = 'display: None'
                error.innerHTML=''
                playerTwo.style= 'display: block'
            }
            
        }
    }
}


let button=()=>{
    if(playerTwoinput.value ==''){
        error.innerHTML='Error'
    }else{
        if(playerTwoinput.value>10){
            error.innerHTML='Invaild Number'
        }else{
            error.innerHTML=''
            if(playeroneinput.value==playerTwoinput.value){
                error.innerHTML='Player-2 Win'
                winner.style = 'Display:Block'
                playerTwo.style='display:none'
            }else{
                chance++
                chanceNumber.innerHTML = chance
                if(chance== 5){
                    error.innerHTML='Player-1 Win'
                    winner.style = 'Display:Block'
                    playerTwo.style='display:none'
                }
                
            }
            
        }
    }if (playerTwoinput.value<-5) {
        error.innerHTML='Invalid Number'
    }else{
        if(playeroneinput.value==playerTwoinput.value){
            error.innerHTML='Player-2 Win'
            winner.style = 'Display:Block'
            playerTwo.style='display:none'
        }else{
            if(chance== 5){
                error.innerHTML='Player-1 Win'
                winner.style = 'Display:Block'
                playerTwo.style='display:none'
            }
            
        }
    }
    playerTwoinput.value=''
}
let entwr=(item)=>{
    if(item.key=='Enter'){
        button()
        btn()
        
    }
}