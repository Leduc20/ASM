import {render} from "./comom.js";
import { productList} from "./data.js";


//lấy id trên url trang
const id =new URLSearchParams(window.location.search).get("id");
console.log("id",id);
//tim trong LockManager,neu co id trug voi id mang return

const product= productList.find((item) => item.id ==id);
// console.log("product", product);
const result =
`
<div class="mx-auto max-w-5xl px-4 mt-[100px]">
<div>   
        <h2 class="font-bold text-[40px] md:text-[40px] mb-3"><a href="">${product.namefull}</a></h2>
    <div class="py-3 flex justify-start">
        <button class="bg-[#FF7C7C] rounded-[25px] text-[18px] w-[95px] h-[25px] md:w-[85px] text-white mr-4">${product.time}</button>
        <a href="">
            <span class="text-[22px] md:text-[20px]">${product.span}</span>
        </a>
    </div>
    <p class="mt-3 mb-[35px]">
        ${product.infor}
    </p>
    <div>
        <img class=w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
<div class="py-[55px]">
    
        <h2 class="font-bold text-[35px] mb-3"><a href="">${product.namefull}</a></h2>
    
    <div class="py-3 flex justify-start">
        <button class="bg-[#FF7C7C] rounded-[25px] text-[18px] w-[95px] h-[25px] md:w-[85px] text-white mr-4">${product.time}</button>
        <a href="">
            <span class="text-[20px]">${product.span}</span>
        </a>
    </div>
    <p class="mt-3">
    ${product.infor}
    </p>
    <div>
        <img class="w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
<div>
    <div>
        <img class="w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
</div>
</div>
<div class="py-[65px] mt-[55px]">
            <div class="flex justify-center">
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/fb.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/insta.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/Group.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/Linkedin.png" alt=""></a>
            </div>
            <p class="text-[19px] md:text-[14px] text-center py-6">Copyright ©2020 All rights reserved </p>
        </div>
`;
const rt =
`
<div class="mx-auto max-w-5xl px-4 mt-[100px]">
<div>   
        <h2 class="font-bold text-[40px] md:text-[40px] mb-3"><a href="">${product.namefull}</a></h2>
    <div class="py-3 flex justify-start">
        <button class="bg-[#FF7C7C] rounded-[25px] text-[18px] w-[95px] h-[25px] md:w-[85px] text-white mr-4">${product.time}</button>
        <a href="">
            <span class="text-[22px] md:text-[20px]">${product.span}</span>
        </a>
    </div>
    <p class="mt-3 mb-[35px]">
        ${product.infor}
    </p>
    <div>
        <img class=w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
<div class="py-[55px]">
    
        <h2 class="font-bold text-[35px] mb-3"><a href="">${product.namefull}</a></h2>
    
    <div class="py-3 flex justify-start">
        <button class="bg-[#FF7C7C] rounded-[25px] text-[18px] w-[95px] h-[25px] md:w-[85px] text-white mr-4">${product.time}</button>
        <a href="">
            <span class="text-[20px]">${product.span}</span>
        </a>
    </div>
    <p class="mt-3">
    ${product.infor}
    </p>
    <div>
        <img class="w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
<div>
    <div>
        <img class="w-full mt-8 rounded-[12px]" src="${product.Image}" alt="">
    </div>
</div>
</div>
</div>
<div class="py-[65px] mt-[55px]">
            <div class="flex justify-center">
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/fb.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/insta.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/Group.png" alt=""></a>
                <a href=""><img class="px-6 w-[100px] md:w-[85px]" src="image/Linkedin.png" alt=""></a>
            </div>
            <p class="text-[19px] md:text-[14px] text-center py-6">Copyright ©2020 All rights reserved </p>
        </div>
`;
render("product-detail",result);
render("product-detail",rt);