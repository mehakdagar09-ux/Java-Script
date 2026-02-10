// const nameInput=document.getElementById("myInput");

// nameInput.addEventListerner("change",()=>{
// document.getElementById("output").textContent = "Change detected!";
// console.log(nameInput.value);
// })

const nameInput = document.getElementById("myForm");
const nameInput = document.getElementById("myInput");
const  courseInput= document.getElementById("course");
const output = document.getElementById("output");

courseInput.addEventListener("change",()=>{
    console.log(courseInput.value);
    output.textContent=nameInput.value

    output.textContent=courseInput.value
})

Form.addEventListner("submit",(event)=>{
    // to prevent the autofresh
    event.preventDefalut();

    constname=nameInput.value;
    const course=courseInput.value;
    console.log(name,course);


    output.textContent=name+" "+course;
})