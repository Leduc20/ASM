import { productList } from "./data.js";
import { render } from "./comom.js";
// import { productPost } from "./data.js";
// import { showrender} from "./showrender.js";

//khai báo hàm show
function showProduct(products) {
    //kiểm tra
    if (!Array.isArray(productList) || productList == 0) return -1;
    let result = "";
    for (let i = 0; i < productList.length; i++) {
        const product = products[i];
        result += `
        <div class="text-[19px] md:flex mt-8 border-b-2 pb-3">
                    <div class="">
                        <img class="w-full" src="${product.Image}" alt="">
                    </div>
                    <div class="w-auto md:w-[594px] ml-1 md:ml-4">
                            <h2 class="font-bold text-[#21243D] text-[24px] md:text-[30px]"><a href="./workdetail.html?id=${product.id}">${product.name}</a>
                            </h2>
                        <div class="flex py-2 place-items-center">
                            <button
                                class=" bg-[#142850] text-white w-[75px] md:w-[75px] h-[25px] text-[17px] rounded-[25px]">${product.time}</button>
                            <p class="text-[25px] md:text-[19px] ml-4 text-slate-400">${product.span}</p>
                            <p class="break-all">
                        </div>
                        <p class="text-[#21243D] text-[25px] md:text-[16px] mt-2 mb-4">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
        
        `;
    }
    return result;

    }
    render("product", showProduct(productList));

// function showProductPost(products) {
//     if (!Array.isArray(productPost) || productPost == 0) return -1;
//     let rt = "";
//     for (let i = 0; i < productPost.length; i++) {
//         const productPost = products[i];
//         rt += `
//         <div class="text-[#21243D] bg-[#FFFF] p-5" id="productPost">
//                     <h2 class="text-[22px] md:text-[26px] font-bold leading-[39px]"><a href="./workdetail.html?id=${productPost.id}">${productPost.title}</a></h2>
//                     <div class="mt-[14px] mb-[11px] text-[16px]">
//                         <span >${productPost.date}</span>
//                         <span class="px-4">${product.span}</span>
//                         <span>${productPost.short}</span>
//                     </div>
//                     <p class="leading-[24px]">
//                     ${productPost.infor}
//                     </p>
//                 </div>
        
//         `;

       
//     }
//     return rt;
// }
// showrender("productPost", showProducPost(productPost));

