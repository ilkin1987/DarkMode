var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');})

    var yas = prompt("Yasinizi Daxil Edin");
    if (yas>18) {
   
   alert("Xos Gelmisiniz");
    }
   
    else  {
        alert("Yasiniz Catmir")
        document.body.style.display = 'none'
    }




 /* if(confirm('Sayta daxil olmaq isteyirsiniz?') === true) {
        alert('Xos gelmisiniz')
    }
    else{
       alert('Saytdan cixarilirsiniz')
       document.body.style.display = 'none'
   }
*/
  