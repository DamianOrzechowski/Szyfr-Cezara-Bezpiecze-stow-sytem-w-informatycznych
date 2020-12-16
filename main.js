//pobranie input
const inputtext = document.getElementById('changetext');
const inputnumber = document.getElementById('number');
//pobranie btn
const btnchangetxt = document.getElementById('btncipher');
const btndescrypttext = document.getElementById('btndescrypt');
//pobranie wartości zaszyfrowanej lub odszyfrowanej
const message = document.getElementById('message')
//alfabet
alphabet = ['a','b', 'c','d', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n',  'o',  'p', 'r', 's','t', 'u', 'w', 'y', 'z','a','b', 'c','d', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n',  'o',  'p', 'r', 's','t', 'u', 'w','y','z'];
alphabet2 = ['z','y','w' ,'u' ,'t','s' ,'r' ,'p' ,'o' ,'n' ,'m','l' ,'k' ,'j' ,'i' ,'h' ,'g' ,'f','e' ,'d','c' ,'b','a','z' ,'y' ,'w' ,'u' ,'t','s' ,'r' ,'p' ,'o' ,'n' ,'m','l' ,'k' ,'j' ,'i' ,'h' ,'g' ,'f','e' ,'d','c' ,'b','a']
//pobieranie wartości z inputa
inputtext.addEventListener('input',(e)=>{
    text = e.target.value
})
//pobieranie wartości z inputa numeru 
inputnumber.addEventListener('input',(e)=>{
    number = e.target.value
})

//funkcja cezara
function Caesar(){
    console.log(text + ' '+ number)

  let textchange = '';

for (let i = 0; i < text.length; i++) {
    const char = text[i];
    //jeśli coś nie jest w alfabecie
    const isaLetter = alphabet.includes(char);
    if(isaLetter === false){
        textchange += char;
    }
    else{
      
        const charIndex = alphabet.findIndex((c) => c === char);
//problem z watością liczobwą number !!!!
       console.log(number)
       var number2 = parseInt(number)


      textchange += alphabet[charIndex + number2] ;
      //textchange += alphabet[charIndex + 2] ;

    }   
}
message.textContent = textchange
}
//funkcja cezara w drugą stronę 
function Caesar2(){
    console.log(text + ' '+ number)

  let textchange = '';

for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const isaLetter = alphabet2.includes(char);
    if(isaLetter === false){
        textchange += char;
    }
    else{
      
        const charIndex = alphabet2.findIndex((c) => c === char);

       console.log(number)
       var number2 = parseInt(number)


      textchange += alphabet2[charIndex + number2] ;
     

    }   
}
message.textContent = textchange
}

btnchangetxt.addEventListener('click',Caesar);
btndescrypttext.addEventListener('click',Caesar2)

