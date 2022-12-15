let day = document.getElementById("day");
let supermarket = document.getElementById("supermarket");
let electricty = document.getElementById("electricty");
let gas = document.getElementById("gas");
let school = document.getElementById("school");
let total = document.getElementById("total");
let entertainment = document.getElementById("entertainment");
let saving = document.getElementById("saving");
let medical = document.getElementById("medical");
let servent = document.getElementById("servent");
let submit = document.getElementById("submit");
let mood ="create";
let temp;


//get total
function getTotal() {
  if (day.value != "") {
    let result =
      +supermarket.value +
      +electricty.value +
      +gas.value +
      +school.value +
      +saving.value +
      +entertainment.value +
      +medical.value +
      +servent.value;

    total.innerHTML = result;
    total.style.background = "grey";
  } else {
    total.innerHTML = "";
    total.style.background = "orange";
  }
}
// create submit
// تخزين البانات فى ابليكشن اللوكال
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

// let dataPro =[];
// لان الجافا بيقراء من فوف لتحت هيجد البرو فاضى فهيمسح مع الريلود فلازم اضيف الجزء اللى فوق
submit.onclick = function () {
  let newPro = {
    day: day.value,
    supermarket: supermarket.value,
    electricty: electricty.value,
    gas: gas.value,
    school: school.value,
    total: total.innerHTML,
    saving: saving.value,
    entertainment: entertainment.value,
    medical: medical.value,
    servent: servent.value,
  };
  //  البيانات الجديده تنضاف ورا بعض داخل الكونسول
  dataPro.unshift(newPro);
  // مع عمل ريلود تتمسح الداتا اعمل التالى لحفظها
  localStorage.setItem("product", JSON.stringify(dataPro));
  clrearData();
  showData();
};
// بعد اضافة البيانات فى اللوكال نمسح البيانات من الصفحة الخارجيه
// clear
function clrearData() {
  day.value = "";
  supermarket.value = "";
  electricty.value = "";
  gas.value = "";
  school.value = "";
  entertainment.value = "";
  saving.value = "";
  medical.value = "";
  servent.value = "";
  total.innerHTML = "";
}
// تعرض البيانات فى الصفحه البروزر
// // // // show

function showData() {
  let table = "";

  for (let i = 0; i < dataPro.length; i++) {
    table += `

          <tr>

            <td>${i + 1}</td>
            <td>${dataPro[i].day}</td>
            <td>${dataPro[i].supermarket}</td>
            <td>${dataPro[i].electricty}</td>
            <td>${dataPro[i].gas}</td>
            <td>${dataPro[i].school}</td> 
            <td>${dataPro[i].entertainment}</td>
            <td>${dataPro[i].saving}</td>
            <td>${dataPro[i].medical}</td>
            <td>${dataPro[i].servent}</td>
            <td>${dataPro[i].total}</td>
      <td><button onClick= "updateData(${i})"
      id="update">update</button></td>

      <td><button onClick= "deleteData(${i})"
       id="delete">delete</button></td>
          </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
}

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.setItem = JSON.stringify(dataPro);

}
showData();

function updateData(i){
      day.value = dataPro[i].day;
      supermarket.value = dataPro[i].supermarket;
      electricty.value = dataPro[i].electricty ;
      gas.value =dataPro[i].gas;
      school.value =dataPro[i].school;
      getTotal()
      saving.value = dataPro[i].saving;
      medical.value = dataPro[i].medical;
      servent.value = dataPro[i].servent;
      submit.innerHTML="update";
      mood ="update";
      temp= i;
      scroll ({ top:0,
        behavior:"smooth"  })

      }






// ########################################
// اختراعى
// #########################################

// // // //count
// // // //update

// // // if (mood === "create"){
// // //   if( newPro.count > 1 ){
// // //     for(i= 0 ; i<newPro.count; i++)
// // //     {dataPro.push(newPro)};
// // //   }
// // //   else{dataPro.push(newPro);
// // //   }
// // // }else{
// // //       dataPro[tembr]=  newPro;
// // //       mood= "create";
// // //       submit.innerHTML ='create';
// // //       count.style.display="block";

// // // }
// // // // save
// // // clrearData()
// // // showData()

// // // }

// // // // show

// // function showData(){
// //   getTotal()
// //   let table= '';

// //   for(let i= 0 ; i<dataPro.length; i++ ){
// //   table += `

// //           <tr>

// //             <td>${i+1}</td>
// //             <td>${dataPro[i].supermarket}</td>
// //             <td>${dataPro[i].electricty}</td>
// //             <td>${dataPro[i].gas}</td>
// //             <td>${dataPro[i].school}</td>
// //             <td>${dataPro[i].saving}</td>
// //             <td>${dataPro[i].entertainment}</td>
// //             <td>${dataPro[i].medical}</td>
// //             <td>${dataPro[i].servent}</td>
// //           <td>
// //           <button onclick="updateData(${i})" id="update"> update<button></td>
// //         <td>
// //         <button onclick="deleteData(${i})" id="delete"> delete <button></td>
// //           </tr>
// //         `
// // }
// // document.getElementById('tbody').innerHTML=table;
// // }

// // // //delete one

// // function deleteData(i){
// //   dataPro.splice(i,1);
// //   localStorage.product=JSON.stringify(dataPro);
// //   showData()

// // }

// // // //delete all
// // // function deleteAll(){
// // // localStorage.clear()
// // // dataPro.splice(0);

// // // showData()
// // // }

// // function updatData(i){
// //   console.log(i)
// // }
// // //update
// // function updateData(i){
// //  

// //   })

// // }

// // // //count creat
// // // // if( newPro.count > 1 ){
// // // //   for(i= 0 ; i<newPro.count; i++)
// // // //   {dataPro.push(newPro)}
// // // // }
// // // // else{dataPro.push(newPro)
// // // // }
