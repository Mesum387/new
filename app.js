var std1 = {
name:"Ali",
fathernmae:"Talib",
rollno:"1",
contact:"234554345",
result:"pass",
};
var std2 = {
name:"Hussain",
fathernmae:"Hasan",
rollno:"2",
contact:"864235234",
result:"fail",
};
var std3 = {
name:"Hamza",
fathernmae:"Haider",
rollno:"3",
contact:"2523434534",
result:"pass",
};
var std4 = {
name:"Saleem",
fathernmae:"Nadeem",
rollno:"4",
contact:"4252354353",
result:"pass",
};
var std5 = {
name:"Jaffar",
fathernmae:"Ali",
rollno:"5",
contact:"3564334324",
result:"fail",
};
var liststd = [std1,std2,std3,std4,std5];
var tbdy = document.getElementById("tbdy")
for (var i = 0;i<liststd.length;i++){
    var myobj = liststd[i];
    tbdy.innerHTML+="<tr><td>"+myobj.name+"</td><td>"+myobj.fathernmae+"</td><td>"+myobj.rollno+"</td><td>"+myobj.contact+"</td><td>"+myobj.result+"</td></tr>";
}


function clicku(){
    var inp = document.getElementById("inp")
    var namee = document.getElementById("namee")
    var fathernamee = document.getElementById("fathernamee")
    var rollnoo = document.getElementById("rollnoo")
    var contactt = document.getElementById("contactt")
    var resultt = document.getElementById("resultt")

for(var i = 0;i<liststd.length;i++){
    var student =liststd[i] ;
    if( inp.value==student.rollno)
    {
        namee.innerHTML=student.name;
        fathernamee.innerHTML=student.fathernmae;
        rollnoo.innerHTML=student.rollno;
        contactt.innerHTML=student.contact;
        resultt.innerHTML=student.result;
    }
}




}