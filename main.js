nameofstudentarray=[];
function submit(){
    var name1=document.getElementById("student1").value
    var name2=document.getElementById("student2").value
    var name3=document.getElementById("student3").value
    var name4=document.getElementById("student4").value
   nameofstudentarray.push(name1)
   nameofstudentarray.push(name2)
   nameofstudentarray.push(name3)
   nameofstudentarray.push(name4)
   console.log(nameofstudentarray)
   document.getElementById("display_names").innerHTML=nameofstudentarray
   document.getElementById("Butt_on_table").style.display="none"
   document.getElementById("Sorting_robot").style.display="inline-block"
}
function sort(){
    nameofstudentarray.sort()
    document.getElementById("display_names").innerHTML=nameofstudentarray
    console.log(nameofstudentarray)

}
