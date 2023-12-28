var input=document.querySelector(".input")
var form=document.querySelector(".form");
var span=document.querySelector(".s")
var form2=document.querySelector(".form2");


console.log(span);
console.log(input);
console.log(form2);


window.onload=function(){
  input.focus();
}
    form.addEventListener("click", function (e) {
        if (input.value === "" ) {
            e.preventDefault();
            input.addEventListener('input', function () {
                var inputValue = input.value;
                var numericValue = '';
            
                for (var i = 0; i < inputValue.length; i++) {
                    var char = inputValue.charAt(i);
                    if (char > '0' && char <= '9') {
                        numericValue += char;
                    } 
                    else if ( char = '0')
                    {
                        span.innerText = "Enter number greater than 0";
                        span.style.display = "block";
                            input.value = numericValue;
                            input.focus();
                    }
                    else {
                        span.innerText = "Enter numbers only";
                        span.style.display = "block";
                            input.value = numericValue;
                            input.focus();
                    }
                   
                    
                }
            
                input.value = numericValue;
            });
        }
         else {
            form.style.display = "none";
            form2.style.display = "inline";
            var table = document.querySelector(".tab");
            table.style.display = "table";
            table.style.position= "absolute";
            table.style.top= "90%";
            
            console.log(form2);
            e.preventDefault();
        }
    });
    
  /////////////////////////////////////////////
  var myurl=window.location.search;
var par=new URLSearchParams(myurl);
var number=par.get("number")
console.log(number);

function Author(name,email){
  this.name=name;
  this.email=email;
}

var bookName=[];
var pricebooks=[];
var authorbooks=[];
var emails=[];
var username=document.querySelector(".name");
var price=document.querySelector(".price");
var email=document.querySelector(".email");
var btn=document.querySelector(".add")

var spans=document.getElementsByTagName("span");
var authorName=document.querySelector(".Authorname");
console.log(form.action);

btn2=document.querySelector(".btn2")
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
window.onload=function(){
    username.focus();
    
}
var i=0;

form2.addEventListener("click", function (e) {
   
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var authorNamePattern = /^[A-Za-z\s]+$/;
    var namePattern = /^[A-Za-z\s]+$/;
    var pricePattern = /^\d+$/;
    if (!namePattern.test(username.value)) {
        e.preventDefault();
        spans[1].innerText = "Enter letters only";
        spans[1].style.display = "block";
        username.value = "";
        username.focus();
    }

    else if (!pricePattern.test(price.value) || parseInt(price.value) <= 10) {
        e.preventDefault();
        spans[1].style.display = "none";
        spans[2].innerText = "Enter numbers only";
        spans[2].style.display = "block";

        price.value = "";
        price.focus();
    } 

    else if (!authorNamePattern.test(authorName.value)) {
        e.preventDefault();
        spans[2].style.display = "none";
        spans[3].innerText = "Enter letters only";
        spans[3].style.display = "block";

        authorName.value = "";
        authorName.focus();
    } 

   else if (!(emailPattern.test(email.value))) {
        e.preventDefault();
        spans[3].style.display = "none";
        spans[4].innerText = "Enter pattern of email (aaa@aaa.com)";
        spans[4].style.display = "block";
        email.value = "";
        email.focus();
    }



else{
    
  e.preventDefault();
    spans[0].style.display="none";
    spans[1].style.display="none";
    spans[2].style.display="none";
    spans[3].style.display="none";
    spans[4].style.display="none";
    console.log("hello");
   
    function Book(){
      this.name=username.value;
      this.price=price.value;
      this.author= new Author (authorName.value,email.value)
    
    
    }
    var n=new Book();
    bookName.push(n.name)
    pricebooks.push(n.price)
    emails.push(n.author.email);
    authorbooks.push(n.author.name);
    // console.log(n.name)
    // console.log(n.price)
    // console.log(n.author.name)
    // console.log(n.author.email)
    // console.log(input.value)
    // console.log(bookName);
    // console.log(emails);
    username.value="";
    price.value="";
    email.value="";
    authorName.value="";
    username.focus();
    i++;
    if (i >= input.value) {
        form2.style.display = "none";
        form.style.display = "none";
        var table = document.querySelector(".tab");
        table.style.display = "table";
        table.style.top= "40%";

        var tbody = document.querySelector(".tab tbody");
        for (var m = 0; m < input.value; m++) {
            var newRow = tbody.insertRow();
            newRow.innerHTML = `<td class="tbd1">${bookName[m]}</td><td class="tbd2">${pricebooks[m]}</td><td class="tbd3">${authorbooks[m]}</td><td class="tbd4">${emails[m]}</td><td><button class="edit" onclick="editRow(this)">Update</button></td><td><button class="delete-button" onclick="deleteRow(this)">Delete</button></td>`;
        }
    }
}
});
function deleteRow(button) {
    var tr = button.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
}

function editRow(button) {
    var row = button.parentNode.parentNode;
  
    var id = row.querySelector(".tbd1").innerText;
    var name = row.querySelector(".tbd2").innerText;
    var price = row.querySelector(".tbd3").innerText;
    var author = row.querySelector(".tbd4").innerText;
  
    var cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    row.style.position ="relative";
    cancelButton.style.position = "absolute";
    cancelButton.style.top = "20%";
    cancelButton.style.right = "1%";
  
    cancelButton.onclick = function () {
      cancelEdit(row, id, name, price, author, button);
    };
    row.appendChild(cancelButton);
  
    row.querySelector(".tbd1").innerHTML = `<input class="n1" type="text" value="${id}">`;
    row.querySelector(".tbd2").innerHTML = `<input class="n2" type="text" value="${name}">`;
    row.querySelector(".tbd3").innerHTML = `<input class="n3" type="text" value="${price}">`;
    row.querySelector(".tbd4").innerHTML = `<input class="n4" type="text" value="${author}">`;
  
    button.innerText = "Save";
    button.onclick = function () {
      saveRow(button);
    };
  }
  
  function cancelEdit(row, id, name, price, author, button) {
    row.querySelector(".tbd1").innerText = id;
    row.querySelector(".tbd2").innerText = name;
    row.querySelector(".tbd3").innerText = price;
    row.querySelector(".tbd4").innerText = author;
  
    row.removeChild(row.lastChild);
  
    button.innerText = "Update";
    button.onclick = function () {
      editRow(button);
    };
  }
  
  function saveRow(button) {
    var row = button.parentNode.parentNode;
  
    var id = row.querySelector(".n1").value;
    var name = row.querySelector(".n2").value;
    var price = row.querySelector(".n3").value;
    var author = row.querySelector(".n4").value;
  
    row.querySelector(".tbd1").innerText = id;
    row.querySelector(".tbd2").innerText = name;
    row.querySelector(".tbd3").innerText = price;
    row.querySelector(".tbd4").innerText = author;
  
    row.removeChild(row.lastChild);
  
    button.innerText = "Update";
    button.onclick = function () {
      editRow(button);
    };
  }