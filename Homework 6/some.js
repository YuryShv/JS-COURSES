var data = '';
var url = "http://localhost:3000/posts/";
var http = new XMLHttpRequest();
var local = new URL(window.location.href);
function Obj(){
    this.userId = '';
    this.id = '';
    this.title='';
    this.body ='';
}
getData = function(){
    http.open("GET",url,false);
    http.send();
    if(http.status == 200){
        data = JSON.parse(http.response);
    }
    console.log(data);
}
getData();
document.getElementById("tid").value = data[data.length-1].id+1;
function createPost(){
    var obj = new Obj();
    if (local.searchParams.get('rowID')) {
        obj.userId = document.getElementById("userid").value;
        obj.title = document.getElementById("title").value;
        obj.body = document.getElementById("body").value;
        var newData = JSON.stringify(obj);
        http.open('PUT', url + local.searchParams.get('rowID'), false);
        http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        http.send(newData);
    } else {
        obj.userId = document.getElementById("userid").value;
        obj.title = document.getElementById("title").value;
        obj.body = document.getElementById("body").value;
        var newData = JSON.stringify(obj);
        http.open('POST', url, false);
        http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        http.send(newData);
    }
}
function getValue(){
    var newPost = new Obj();
    newPost.userId = document.getElementById("userid").value;
    newPost.title = document.getElementById("title").value;
    newPost.body =  document.getElementById("body").value;
    return newPost;
}
function getObj() {
    var obj;
    for(var i = 0; i<data.length; i++) {
        if(data[i].id == local.searchParams.get('rowID')) {
            obj = data[i];
            break;
        }
    }
    return obj;
}
if(local.searchParams.get('rowID')){
    var obj = getObj();
    var rowID = local.searchParams.get('rowID') - 1;
    document.getElementById("tid").value = obj.id;
    document.getElementById("userid").value = obj.userId;
    document.getElementById("title").value = obj.title;
    document.getElementById("body").value = obj.body;
} else {
    document.getElementById("tid").value = data[data.length - 1].id + 1;
}