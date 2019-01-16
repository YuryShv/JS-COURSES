const http = new XMLHttpRequest();
const url = 'db.json';
const localurl = 'db.json'
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
        data[i].body + "</td><td><button class='delete'>Delete</button></td><td><button class='edit'>Edit</button></td></tr>"
    }
    document.getElementById("main-table").innerHTML = table;
    
}

function openFormPage(){
    document.location.href = "form.html";
}
function createPost(){
    http.open('POST',localurl,false);
    http.send(JSON.stringify(getValue()));
    alert(JSON.stringify(getValue()));

}
function getValue(){
    var newPost = new Obj();
    newPost.id = data.length + 1;
    newPost.userId = document.getElementById("userid").value;
    newPost.title = document.getElementById("title").value;
    newPost.body =  document.getElementById("body").value;
    return newPost;
}