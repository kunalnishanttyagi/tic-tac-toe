const currentplayershow=document.querySelector("#currentplayer");
const boxes=document.querySelectorAll(".box")
const newgamebtn = document.querySelector('#button');




let currentplayer="X",gamegrid;
let win=0;
const winningpositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// boxes[0].classList.add("win")
function firstjeetgya(){
    currentplayershow.innerText="Player 1 Won"
    win=2;
    gamegrid=["", "", "", "", "", "", "", "", ""]
    newgamebtn.classList.add("active");
}
function secondjeetgya(){
    currentplayershow.innerText="Player 2 Won"
    win=2;
    gamegrid=["", "", "", "", "", "", "", "", ""]
    newgamebtn.classList.add("active");
    
}
function drawhogya(){
    currentplayershow.innerText="Match Drawn"
    win=2;
    gamegrid=["", "", "", "", "", "", "", "", ""]
    newgamebtn.classList.add("active");
}
let u=0;
function initialisegame(){
    currentplayershow.innerText=`Current Player: ${currentplayer}`
    gamegrid = ["", "", "", "", "", "", "", "", ""]
}
let a,b,c,count1,count2;
function checkwin(){
    // for(let i=0;i<9;i++){
    //     let count1=0,count2=0;
    //     for(let j=0;j<3;j++){
    //         if(gamegrid[winningpositions[i][j]]=="X") count1++;
    //         if(gamegrid[winningpositions[i][j]]=="O") count2++;
    //     }
    //     if(count1==3) firstjeetgya();
    //     else if(count2==3) secondjeetgya();
    //     else u=0;
    // }
    
    for(let i=0;i<9;i++){
        a=-1,b=-1,c=-1,count1=0,count2=0;
        for(let j=0;j<3;j++){
            if(gamegrid[winningpositions[i][j]]=="X"){
                count1++;
                if(count1==1) a=winningpositions[i][j];
                if(count1==2) b=winningpositions[i][j];
                if(count1==3) c=winningpositions[i][j];
            }
            else if(gamegrid[winningpositions[i][j]]=="O"){
                count2++;
                if(count2==1) a=winningpositions[i][j];
                if(count2==2) b=winningpositions[i][j];
                if(count2==3) c=winningpositions[i][j];
            }
            else u=0;
        
        if(count1==3){
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");
            firstjeetgya();
            break;
        }
        else if(count2==3){
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");
            secondjeetgya();
            break;
        }
        else u=0;
    }
    }
}
initialisegame();
function handleclick(index){
    if(gamegrid[index]==""){
        if(win==9) drawhogya();
        else if(win%2==0){
            currentplayer="O"
            currentplayershow.innerText=`Current Player: ${currentplayer}`
            boxes[index].innerText="X";
            gamegrid[index]="X";
            win++;
            checkwin();
        }
        else{
            currentplayer="X"
            currentplayershow.innerText=`Current Player: ${currentplayer}`
            boxes[index].innerText="O";
            gamegrid[index]="O";
            win++;
            checkwin();
        }
    }
}
boxes.forEach((box,index) => {
    box.addEventListener("click",() =>{
        handleclick(index);
    });
});

function clearkrdo(){
    
    
    boxes.forEach((box) =>{
        box.classList.remove("win")
        box.innerText="";
        win=0;
        currentplayer="X";
        initialisegame();
    });
    
    // currentplayershow.innerHTML="HEYYYYY"

}
newgamebtn.addEventListener("click",clearkrdo);