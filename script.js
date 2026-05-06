let toastBox = document.getElementById('toast-box');
let success = '<i class="fa-solid fa-circle-check"></i> Sucessfully Submitted!'
let error = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the Error!'
let invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again!'

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    },5500);
}