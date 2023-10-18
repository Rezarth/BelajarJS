
    //fungsi dasar JS
//console.log()
//alert("menampilkan notifikasi")
//prompt("pinjem dulu 100rb boleh gak digantinya pake nomor aku")



    //variable
//var Promnet = "Coding is lifestyles"
//console.log(Promnet)
//var Promnet = "Coding is not a lifestyles"
//console.log(Promnet)

//let Promnet = "Coding is lifestyles"
//console.log(Promnet)
//Promnet = "Coding is not a lifestyles"
//console.log(Promnet)

//const Promnet = "Coding is lifestyles"
//console.log(Promnet)
//Promnet = "Coding is not a lifestyles"
//console.log(Promnet)

// let totalPoin = prompt ("Masukkan Poin Ada")
//     if (totalPoin > 100){
//         documnet.write("<h1>Congratulation<h1>");
//         }
//         else{
//         document.write("<h1>selamat anda kurang beruntung<h1>");
//     }



    //Aritmatika
//buatan sendiri
// let x = 6;
// let y = 3;

// let a = (x<10 && y>1);
// let b = (x<10 && y<1);
// let c = (x==5 || y==5);
// let d = (x==6 || y==5);
// let e = !(x==y);

// console.log(a, b, c, d, e)

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//hasil spesifik yang diterangkan
// let x = 6;
// let y = 3;

// console.log(x<10 && y>1);
// console.log(x<10 && y<1);
// console.log(x==5 || y==5);
// console.log(x==6 || y==5);
// console.log(!(x==y));



    //document Object Model (DOM)
//let p = document.querySelector("p")
//let button = document.querySelector("button")
//let input = document.querySelector("input")

//button.addEventListener("click", function(){
    //let isi = input.value
    //console.log(isi)
    //p.innerHTML = isi
//})


        //Tugas
function addTask() {
const newTaskText = document.getElementById("new-task").value;
    if (newTaskText.trim() === "") {
        alert("Masukkan teks tugas!");
        return;
    }

    const taskList = document.getElementById("todo-list");
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            newTask.classList.add("completed");
        } else {
            newTask.classList.remove("completed");
        }
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(newTaskText));
    taskList.appendChild(newTask);
    document.getElementById("new-task").value = "";
}  
