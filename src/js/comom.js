//Hiển thị ngoài màn hình
export function render(element,content){
    //có giá trị hiển thị ra
    const elementId=document.getElementById(element)
    if (!elementId) {
        document.getElementById(elementId).innerHTML = content;
    }
    // if(!elementId) return;
    elementId.innerHTML=content; 
}

