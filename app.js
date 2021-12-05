const buton= document.getElementById("change");
const text= document.getElementById("tl");
const inputnumber=document.getElementById("amount");

function design(){
    buton.style.width="400px";
    buton.style.marginLeft="40px";

    inputnumber.style.width="400px";
    inputnumber.style.marginLeft="5px";

    text.style.width="400px";
    text.style.marginLeft="10px";


 
}

design();

buton.addEventListener("click",change);

function change(){
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://api.fastforex.io/fetch-all?api_key=e7a3028100-af0e8439e5-r3nm79");

    xhr.onload=function(){
        if(this.status==200){
            //console.log(this.responseText);

            const response=JSON.parse(this.responseText);
       
            console.log(response); //bu değerler içerisinde TL karşılığını bulursak çevirme işlemi yapmış oluruz
           // console.log(response.results.TRY); //sonuç özellikleri arasından TRY alınacak
            const rate= response.results.TRY; //number değer
            //girilecek euro değeri number tipine dönüştürme
            const amount = Number(inputnumber.value);
            // console.log(typeof amount); //number
            text.value=amount*rate;
        }
    }

    xhr.send();

}