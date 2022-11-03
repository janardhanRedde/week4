function addmore(){
    
    console.log("name")
    let name = document.getElementById("new-task-input").value;
    console.log("name",name)
    if (name==""){
     document.getElementById("jagadish").innerHTML='please enter item'  
    }else{
        let box=document.getElementById("list");
// console.log("box",box)
        let li=document.createElement("li");
        li.textContent= name;
        console.log(li);
        let a =document.createElement('a');
        a.textContent="❎"
        a.href='javascript:void(0)';
        a.className='remove';
        li.appendChild(a);
        box.appendChild(li);
        
    }
    document.getElementById("name").value="";
}
let btn=document.querySelector("ul");
btn.addEventListener('click',function(e){
    let box=document.getElementById("list");
    let li=e.target.parentNode;
    box.removeChild(li);
})
