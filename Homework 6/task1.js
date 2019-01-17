var http = new XMLHttpRequest();
var url = 'http://localhost:3000/posts/';
var data = '';
function Obj(){
    this.userId = '';
    this.id = '';
    this.title='';
    this.body ='';
}
getAll = function(){
    http.open("GET",url,false);
    http.send();
    if(http.status == 200){
        data = JSON.parse(http.response);
    }
    console.log(data);
    var table = "<tr><th>userId</th><th>id</th><th>title</th><th>body</th><th colspan=2><button onclick='openFormPage()'>Create</button></th></tr>";
    for(var i=0;i<data.length;i++){
        table += "<tr><td>" +
        data[i].userId + "</td><td>" +
        data[i].id + "</td><td>" +
        data[i].title + "</td><td>" +
        data[i].body + "</td><td><button class='delete' onclick='deleteElement("+data[i].id+")'>Delete</button></td><td><button class='edit' onclick = 'openPage("+data[i].id+")'>Edit</button></td></tr>"
    }
    document.getElementById("main-table").innerHTML = table;
}
function deleteElement(param){
    http.open('DELETE', url + param);
    http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    http.send();
    if(http.status == 200){
       // document.location.href = "task1.html";
    }
}
function openFormPage(){
  document.location.href = "form.html";
}
function openPage(param){
    document.location.href = ("form.html" + "?rowID=" + param);
}

