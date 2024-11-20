


let words = [""]
returnCalories()




function returnCalories(){
    let ans1 =  document.getElementById("input1").value;
    let ans2 =  document.getElementById("input2").value;
    let ans3 =  document.getElementById("input3").value;
    let ans4 =  document.getElementById("input4").value;
    let ans5 =  document.getElementById("input5").value;
    let ans6 =  document.getElementById("input6").value
    let ans7 =  document.getElementById("input7").value
    
    
  
    let res1 = Number(ans1)
    let res6 = Number(ans6)
    let res4 = Number(ans4)


    
    
    
    //Calories burned daily
    // 18 - 30  (Mulher activa)

    //Manter o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "manter" || ans7 == "Manter")){
        
        var result = Math.trunc((((14.818*res6)+486.6)*1.84))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){
        
        var result = Math.trunc((((14.818*res6)+486.6)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Perder" || ans7 == "perder")){
        
        var result = Math.trunc((((14.818*res6)+486.6)*1.84))
        var result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    //Manter o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "manter" || ans7 == "Manter")){
            
        var result = Math.trunc((((14.818*res6)+486.6)*1.55))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar Peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){

            
        var result = Math.trunc((((14.818*res6)+486.6)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder Peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "Perder" || ans7 == "perder")){
 
        var result = Math.trunc((((14.818*res6)+486.6)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    // Manter o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "manter" || ans7 == "Manter") ){
        
        var result = Math.trunc((((14.818*res6)+486.6)*2.2))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Ganhar" || ans7 == "ganhar") ){
        
        var result = Math.trunc((((14.818*res6)+486.6)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Perder" || ans7 == "perder") ){
        
        var result = Math.trunc((((14.818*res6)+486.6)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }






    //Manter peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((14.818*res6)+486.6)*1.9))
        var result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Ganhar peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((14.818*res6)+486.6)*1.9))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //  Perder Peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Perder" || ans7 == "perder")){

        var result = Math.trunc((((14.818*res6)+486.6)*1.9))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    //Mulher com idade 30-60


    // Manter o peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "manter" || ans7 == "Manter")){
        
        var result = Math.trunc((((8.126*res6)+845.6)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){
    
        var result = Math.trunc((((8.126*res6)+845.6)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
   }
   // Perder peso
   if (((res1  >= 30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "perder" || ans7 == "Perder")){
    
        var result = Math.trunc((((8.126*res6)+845.6)*1.84))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }



    // Manter o perso 
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "manter" || ans7 == "Manter")){

        var result = Math.trunc((((8.126*res6)+845.6)*1.55))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "ganhar" || ans7 == "Ganhar")){

        var result = Math.trunc((((8.126*res6)+845.6)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    // Perder peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "perder" || ans7 == "Perder")){

        var result = Math.trunc((((8.126*res6)+845.6)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    // Manter peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((8.126*res6)+845.6)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((8.126*res6)+845.6)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
    (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
    (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
    (ans7== "Perder" || ans7 == "perder")){

    var result = Math.trunc((((8.126*res6)+845.6)*2.2))
    var  result1 = result-500
    words.push("Você gasta em média " + result.toString() + "kcal por dia")
    words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
}


    // Manter peso 
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){


        var result = Math.trunc((((8.126*res6)+845.6)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){


        var result = Math.trunc((((8.126*res6)+845.6)*1.9))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    //Perder peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Perder" || ans7 == "perder")){


        var result = Math.trunc((((8.126*res6)+845.6)*1.9))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }


    // Mulheres a cima dos 60

    //Manter o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){
        
        var result = Math.trunc((((9.082*res6)+658.5)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){
        
        var result = Math.trunc((((9.082*res6)+658.5)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    // Perder peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Perder" || ans7 == "perder")){
     
        var result = Math.trunc((((9.082*res6)+658.5)*1.84))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }

    
    // Manter o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.55))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    // Perder  o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Perder" || ans7 == "perder")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }


    // Manter peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((9.082*res6)+658.5)*2.2))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganahr peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((9.082*res6)+658.5)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    // Perder peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Perder" || ans7 == "perder")){

        var result = Math.trunc((((9.082*res6)+658.5)*2.2))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }


    // Manter o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.86))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.86))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
   }
    // Perder o peso
    if (((res1 >= 60)) && (ans2 == "feminino" || ans2 == "Feminino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((9.082*res6)+658.5)*1.86))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }




    // Homens entre 18-30

    //Manter o peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "manter" || ans7 == "Manter")){
        
        var result = Math.trunc((((15.1*res6)+692.2)*1.84))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar o peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){
        
        var result = Math.trunc((((15.1*res6)+692.2)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder o peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Perder" || ans7 == "perder")){
        
        var result = Math.trunc((((15.1*res6)+692.2)*1.84))
        var result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }





   /* if (((res1 > 18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")){
        
        var result = Math.trunc((((15.1*res6)+692.2)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")

    }*/
   //777777777777

   
    //Manter o peso
    if (((res1 > 18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "manter" || ans7 == "Manter")){
            
        var result = Math.trunc((((15.1*res6)+692.2)*1.55))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar Peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){

            
        var result = Math.trunc((((15.1*res6)+692.2)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder Peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não") &&
        (ans7== "Perder" || ans7 == "perder")){
 
        var result = Math.trunc((((15.1*res6)+692.2)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    /*if (((res1 > 18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
        var result = Math.trunc((((15.1*res6)+692.2)*1.55))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/





    
    // Manter peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((15.1*res6)+692.2)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((15.1*res6)+692.2)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder peso
    if (((res1  >=  18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Perder" || ans7 == "perder")){

    var result = Math.trunc((((15.1*res6)+692.2)*2.2))
    var  result1 = result-500
    words.push("Você gasta em média " + result.toString() + "kcal por dia")
    words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }

   /*

    if (((res1 > 18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim"))
        {
        var result = Math.trunc((((15.1*res6)+692.2)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/


 // Manter peso 
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino")&& 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){


        var result = Math.trunc((((15.1*res6)+692.2)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
 //Ganhar peso
   if (((res1  >=  30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
       (ans7== "Ganhar" || ans7 == "ganhar")){


       var result = Math.trunc((((15.1*res6)+692.2)*1.9))
       var  result1 = result+500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
   }
 //Perder peso
   if (((res1  >=  30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
       (ans7== "Perder" || ans7 == "perder")){


       var result = Math.trunc((((15.1*res6)+692.2)*1.9))
       var  result1 = result-500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }


    /*if (((res1 > 18) && (res1 < 30)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
        var result = Math.trunc((((15.1*res6)+692.2)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/




    // Homens entre 30-60

    // Manter o peso
    if (((res1  >=  30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "manter" || ans7 == "Manter")){
        
        var result = Math.trunc((((11.5*res6)+873.1)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "Ganhar" || ans7 == "ganhar")){
    
        var result = Math.trunc((((11.5*res6)+873.1)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
   }
   // Perder peso
   if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim") &&
        (ans7== "perder" || ans7 == "Perder")){
    
        var result = Math.trunc((((11.5*res6)+873.1)*1.84))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }


    /*if (((res1 > 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")){
        
        var result = Math.trunc((((11.5*res6)+873.1)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/



    // Manter o perso 
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "manter" || ans7 == "Manter")){

        var result = Math.trunc((((11.5*res6)+873.1)*1.55))
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "ganhar" || ans7 == "Ganhar")){

        var result = Math.trunc((((11.5*res6)+873.1)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    // Perder peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "perder" || ans7 == "Perder")){

        var result = Math.trunc((((11.5*res6)+873.1)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }

/*
    if (((res1 > 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
            var result = Math.trunc((((11.5*res6)+873.1)*1.55))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/

    // Manter peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((11.5*res6)+873.1)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    //Ganhar peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((11.5*res6)+873.1)*2.2))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + " calorias na sua alimentação")
    }
    //Perder peso
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Perder" || ans7 == "perder")){

        var result = Math.trunc((((11.5*res6)+873.1)*2.2))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }


    /*if (((res1 > 30) && (res1 < 60)) && ((ans2 == "masculino" || ans2 == "Masculino")) && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim"))
        {
        var result = Math.trunc((((11.5*res6)+873.1)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/



     // Manter peso 
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){


        var result = Math.trunc((((11.5*res6)+873.1)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
       (ans7== "Ganhar" || ans7 == "ganhar")){


       var result = Math.trunc((((11.5*res6)+873.1)*1.9))
       var  result1 = result+500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
   }
 //Perder peso
   if (((res1 >= 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
       (ans7== "Perder" || ans7 == "perder")){


       var result = Math.trunc((((11.5*res6)+873.1)*1.9))
       var  result1 = result-500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }
    

    /*if (((res1 > 30) && (res1 < 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
        var result = Math.trunc((((11.5*res6)+873.1)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/

    //Homem a cima dos 60

    //Manter o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){
        
        var result = Math.trunc((((11.71*res6)+587.7)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){
        
        var result = Math.trunc((((11.71*res6)+587.7)*1.84))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    // Perder peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Perder" || ans7 == "perder")){
     
        var result = Math.trunc((((11.71*res6)+587.7)*1.84))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    /*if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")){
        
        var result = Math.trunc((((11.71*res6)+587.7)*1.84))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/

    // Manter o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((11.71*res6)+587.7)*1.55))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
    }
    // Ganhar o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((11.71*res6)+587.7)*1.55))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
    }
    // Perder  o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Perder" || ans7 == "perder")){

        var result = Math.trunc((((11.71*res6)+587.7)*1.55))
        var  result1 = result-500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }



    /*if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="sentado" || ans3 == "Sentado" || ans3 == "Sentada" || ans3 == "sentada") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
        var result = Math.trunc((((11.71*res6)+587.7)*1.55))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/

     // Manter peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
        (ans7== "Manter" || ans7 == "manter")){

     var result = Math.trunc((((11.71*res6)+587.7)*2.2))
     words.push("Você gasta em média " + result.toString() + "kcal por dia")
     words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
   }
 // Ganahr peso
   if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
       (ans7== "Ganhar" || ans7 == "ganhar")){

       var result = Math.trunc((((11.71*res6)+587.7)*2.2))
       var  result1 = result+500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
 }
 // Perder peso
   if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "sim" || ans5== "Sim")&&
       (ans7== "Perder" || ans7 == "perder")){

       var result = Math.trunc((((11.71*res6)+587.7)*2.2))
       var  result1 = result-500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
    }

    
    /*if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "sim" || ans5== "Sim"))
        {
        var result = Math.trunc((((11.71*res6)+587.7)*2.2))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/
   
     // Manter o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Manter" || ans7 == "manter")){

        var result = Math.trunc((((11.71*res6)+587.7)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
        words.push("Para manter o seu peso consuma a mesma quantidade calórica que gasta")
   }
 // Ganhar o peso
    if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
        (ans7== "Ganhar" || ans7 == "ganhar")){

        var result = Math.trunc((((11.71*res6)+587.7)*1.9))
        var  result1 = result+500
        words.push("Você gasta em média " + result.toString() + "kcal por dia")
        words.push("Para ganhar peso, distribua pelo menos " + result1.toString() + "kcal na sua alimentação")
   }
 // Perder o peso
   if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino") && 
       (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
       (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não")&&
       (ans7== "Ganhar" || ans7 == "ganhar")){

       var result = Math.trunc((((11.71*res6)+587.7)*1.9))
       var  result1 = result-500
       words.push("Você gasta em média " + result.toString() + "kcal por dia")
       words.push("Para perder peso consuma em média " + result1.toString() + "kcal por dia")
   }
   

    /*if (((res1 >= 60)) && (ans2 == "masculino" || ans2 == "Masculino")  && 
        (ans3 =="fisico" || ans3 == "Fisico" || ans3 == "Físico" || ans3 == "físico") && 
        (res4 < 12) && (ans5== "nao" || ans5== "Nao" || ans5== "Não" || ans5== "não"))
        {
        var result = Math.trunc((((11.71*res6)+587.7)*1.9))
        words.push("Você gasta em média " + result.toString() + " calorias por dia")
    }*/


    
   
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






  



  