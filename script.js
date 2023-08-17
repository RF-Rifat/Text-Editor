function toggleBtn(getId){
    const boldBtn = document.getElementById(getId);
    boldBtn.classList.toggle("bg-sky-200");
}

function textEdit(setClass){
    const content = document.getElementById('content');
    content.classList.toggle(setClass)
}


document.getElementById('bold-btn').addEventListener('click',()=>{
    toggleBtn('bold-btn');
    textEdit("font-bold");
})


document.getElementById('italic-btn').addEventListener('click',()=>{
    toggleBtn('italic-btn');
    textEdit("italic");
})

document.getElementById('unLine-btn').addEventListener('click',()=>{
    toggleBtn('unLine-btn');
    textEdit("underline");
})

document.getElementById('text-left').addEventListener('click',()=>{
    toggleBtn('text-left');
    textEdit("text-left");
})

document.getElementById('text-center').addEventListener('click',()=>{
    toggleBtn('text-center');
    textEdit("text-center");
})

document.getElementById('text-right').addEventListener('click',()=>{
    toggleBtn('text-right');
    textEdit("text-right");
})
document.getElementById('text-justify').addEventListener('click',()=>{
    toggleBtn('text-justify');
    textEdit("text-justify");
})
const selectedNumber = document.getElementById('font-size');
selectedNumber.value = 16;

document.getElementById('font-size').addEventListener("change", () => {
    const selectedNumber = document.getElementById('font-size').value;
    const content = document.getElementById('content');
    let fontSize = `${selectedNumber}px`
    content.style.fontSize = fontSize;
    console.log(fontSize);
});

document.getElementById('upperCaseBtn').addEventListener('click',()=>{
    toggleBtn('upperCaseBtn');
    textEdit("uppercase");
})


document.getElementById('clr-Input').addEventListener("change", () => {
    const selectedColor = document.getElementById('clr-Input').value;
    const content = document.getElementById('content');
    let textClr = `${selectedColor}`
    content.style.color = textClr;
    textEdit(textClr);
});
