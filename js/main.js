
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.gft.com/br/pt/index/");//em outra aba
    window.location.href = "https://www.gft.com/br/pt/index/";//na mesma aba

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert  ("Trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
/*
function clicou(){
    alert("Obrigado por clicar")
}*/




/*
function validaidade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

//var idade = prompt("Qual a sua idade?");
//console.log(validaidade(idade));
*/

/*function soma (n1,n2){
    return n1+n2;
}
alert(soma(5,10))
*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getFullYear());
*/



/* for
var count;
for(count=0; count<=5; count++){
    alert(count);
};*/

/* while
var count = 0 ;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/


/* if e else
var idade = prompt ("Qual a sua idade");
if(idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}*/




/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*//dicionario
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/



//tupla
/*var lista = ["maça","pera","laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString()[0]);
console.log(lista.length);
console.log(lista.join(" | "));


alert(lista);*/



/*var nome = "Renan Bezerra";
var idade1 = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade1 + " anos" );
//alert(idade1 + idade2);
console.log(nome);
console.log(idade1+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());*/