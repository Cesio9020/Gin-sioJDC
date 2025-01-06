




let words = [""]
returnText()
    




function displayRadioValue() {
    const ele = document.getElementsByName('select');
    

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked && ele[i].value=="Gamer")
            words.push("heeeeee")

        else if(ele[i].checked && ele[i].value=="Hoje")
            words.push("hojeeeeeeeeeeeeee")
        
        else if(ele[i].checked)
        document.getElementById("result").innerHTML
        = "Gender: " + ele[i].value;
    }    

}


function returnText(){
    let ans1 =  document.getElementById("input1").value;
    let ans2 =  document.getElementById("input2").value;
    let ans3 =  document.getElementById("input3").value;
    let ans4 =  document.getElementById("input4").value;
    let ans5 =  document.getElementById("input5").value;
    let ans6 =  document.getElementById("input6").value;

    let res1 = Number(ans1)
    let res2 = Number(ans2)
    let res3 = Number(ans3)
    let res4 = Number(ans4)
    let res5 = Number(ans5)
    let res6 = Number(ans6)
    
    //IMC Checker
    if( res5/(res6*res6*0.01*0.01) < 18 ){
        words.push("Está a baixo do peso ideal.")
    }
    if( (res5/(res6*res6*0.01*0.01) >= 25)  &&   res5/(res6*res6*0.01*0.01) <= 29 ){
        words.push("Está a cima do peso ideal.")
    }
    if( (res5/(res6*res6*0.01*0.01) >= 30)  && res5/(res6*res6*0.01*0.01) <= 29 ){
        words.push("Está a cima do peso ideal.")
    }  
    if( (res5/(res6*res6*0.01*0.01) >= 35) &&  res5/(res6*res6*0.01*0.01) <= 39 ){
        words.push("Obeso de grau II perca, peso")
    }
    if( res5/(res6*res6*0.01*0.01) >= (40)   ){
        words.push("Obesidade morbida, consulte um medico")
    }


    
    if( (res3 > 22) ){
        words.push("Foque em exercicios de perda de peso, o seu % de gordura esta alto")
    }
    if( (res2 > 13) ){
        words.push("Procure exercicios de perda de peso com foco na area visceral")
    }
    
    if ((res4 > 80) && (res1 >18)){
        words.push("A sua pulsação está alta, cosnulte um cardiológista")
        words.push("Evite exercicios de alta intensidade sem assistência profissional")
    }
    
}










const dynamicText = document.querySelector("h1 span")
  
  // Variables to track the position and deletion status of the word
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
  
      if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          setTimeout(typeEffect, 150);
      } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          setTimeout(typeEffect, 40);
      } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 1200);
      }
  }
  
  typeEffect();






  



  