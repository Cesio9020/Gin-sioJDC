




let words = [""]
returnText()
    






function returnText(){
    let ans1 =  document.getElementById("input1").value;
    let ans2 =  document.getElementById("input2").value;
    let ans3 =  document.getElementById("input3").value;
    

    let res1 = Number(ans1)
    let res2 = Number(ans2)
    let res3 = Number(ans3)
   
    
    
    if (res1 != 0 ){
        var result = Math.trunc(res1*4 + res2*4 + res3*9)
        words.push("Olá!!, em 100g do seu alimento, estão contidas " + result.toString() +" calorias")
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






  



  