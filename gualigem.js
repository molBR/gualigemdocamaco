
const dictionary = ['A','a','E','e','I','i','O','o','U','u'];
const dicAdd = ['N','n','M','m','r','R','s','S'];
let linguagem = "ai ";
linguagem = linguagem.toLowerCase();
let lingSep = linguagem.split(" ");
let gualigem = [];
lingSep.forEach((gl) => {
    let i = 0;
    let silaba1 = '';
    let silaba2 = '';
    let restoSilabas = '';
    let silabas = [silaba1, silaba2, restoSilabas];
    let aux = 0;
    for(i = 0; i < gl.length; i++){
        for(j = 0; j< dictionary.length; j++){
            if(gl[i] === dictionary[j] && aux < 2){
                silabas[aux] = silabas[aux] + gl[i];    
                i++;
                
                for(k = 0; k < dicAdd.length; k++){
                    if(gl[i] === dicAdd[k] && aux < 2 && i != 1){
                        silabas[aux] = silabas[aux] + gl[i]; 
                        i++;
                    }
                }
                for(l = 0; l < dictionary.length; l++){
                    if(gl[i] === dictionary[l]){
                        silabas[aux] = silabas[aux] + gl[i];
                        i++;
                    }
                }
                aux++;    
            }
            
        }
        silabas[aux] = silabas[aux] + gl[i];
    }
    let auxSilaba = silabas[0];
    silabas[0] = silabas[1];
    silabas[1] = auxSilaba;
    for(i=0; i< 3; i++){
        if(silabas[i] === 'undefined')
            silabas[i] = '';
    }
        
    silabas = silabas.join('');
    console.log('silabas', silabas);
    gualigem.push(silabas);
    gualigem.push(' ');

})
console.log(gualigem.join(''));