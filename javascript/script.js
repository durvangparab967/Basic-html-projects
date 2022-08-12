let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg()
{
    let name = prompt("Enter your name: ");
    namasteBtn.textContent = "Welcome "+name;
}