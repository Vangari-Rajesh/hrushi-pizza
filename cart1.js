function fun(button) {
    let ab = button.id;
    document.getElementById(ab).style.display = "none";

    const parentDivId = button.parentNode.id;

    let a = document.getElementById(parentDivId);
    let clonedContent = a.cloneNode(true);
    let quantity = clonedContent.querySelector('.btn1');
    let button2 = clonedContent.querySelector('.btn2');
    let button3 = clonedContent.querySelector('.btn4');
    quantity.style.display = 'block';
    button2.style.display = 'block';

    button3.style.display = 'block';
     let valob=clonedContent.querySelector('.valob1');
     valob.textContent=1;// ist is not working see next time ra 
//      console.log(document.getElementById(valob),"id ra");

// //   console.log("hi ra mama first dhi ",quantity.getAttribute("span-id-ra").textContent);
//   console.log(document.getElementById("valob").textContent);

    // true means deep clone including all children
    // Find and remove the button element from the cloned content
    let buttonToRemove = clonedContent.querySelector("#bt");
    if (buttonToRemove) {
        buttonToRemove.remove();
    }

    let destinationDiv = document.getElementById("cart");
    destinationDiv.appendChild(clonedContent);



    // Add an event listener to the quantity input field in the cloned content
    quantity.addEventListener("click", calculateSum);
    // button2.addEventListener("click",incre);
    // button3.addEventListener("click",decre);

 
   
    // button3.addEventListener("click",decre);
    // incre(clonedContent);
    //decre(clonedContent);
        // Get all elements with the class "my-button"
      
    calculateSum(clonedContent);
}

function calculateSum(clonedContent) {
    // Get all input elements with the class "btn1" inside the "cart" div
    const quantities = document.querySelectorAll('#cart .btn1');
    const quantities1 = document.querySelectorAll('#cart .resulte');
    const resultElement = document.getElementById("result");
    let sum = 0;
    

    quantities.forEach(function (input) {
        const inputValue = parseFloat(input.textContent) || 0;
        const priceId = input.getAttribute("data-price-id");
        const priceElement = document.getElementById(priceId);
        const price = parseFloat(priceElement.value);
        let x=inputValue*price;
        const resultii = input.getAttribute("result-id");
        console.log(resultii);
        // const resultEle = document.getElementById(resultii);
        // resultEle.textContent = "value: " + x;
        const div1 = document.getElementById("cart");
    console.log(div1);
    // Find the element with id "sharedId" within div1
    // const sharedIdElement = document.getElementById(resultii);
    // console.log("shared id element = ",sharedIdElement);

    // // Modify the content of the element
    // sharedIdElement.textContent = "value: " + x;
    quantities1.forEach(function (element) {
        // Get the unique ID of the element
        const uniqueId = element.id;
        if(uniqueId == resultii){
            element.textContent = "value " + x;

        }
    });
    sum+=x;

    resultElement.textContent = "Sum: " + sum;
});
resultElement.textContent = "Sum: " + sum;}


function increm(butele) {
    var eleid = butele.id;
    var spanid = document.getElementById(eleid).getAttribute("span-id-ra");
    const spanval = document.querySelectorAll('#cart .valob1');
    spanval.forEach(function (element) {
      // Get the unique ID of the element
      const uniqueId = element.id;
      if (uniqueId == spanid) {
        let inv = element.textContent;
        console.log(element, " element");
        inv = parseInt(inv);
        console.log(inv, "value in the function");
  
        inv++;
        if (inv > 1) {
          const buval = document.querySelectorAll('#cart .btn2');
          buval.forEach(function (element) {
            if (element.id == eleid) {
              var misy = document.getElementById(element.id).getAttribute("id-to-mi");
              console.log("using in symbol ", misy);
  
              const buval1 = document.querySelectorAll('#cart .btn4');
              buval1.forEach(function (element) {
                if (element.id == misy) {
                  element.style.display = "none";
                }
              });
  
              var misy1 = document.getElementById(element.id).getAttribute("id-to-sho");
              console.log("using in symbol ", misy1);
  
              const buval2 = document.querySelectorAll('#cart .btn3');
              buval2.forEach(function (element) {
                if (element.id == misy1) {
                  element.style.display = "block";
                }
              });
            }
  
            
          });
          
        }
        console.log(inv, " increment in the function");
            element.textContent = inv;
      }
    });
    calculateSum(10);
  }
  
function decrem(butele){
    var eleid=butele.id;
    var spanid=document.getElementById(eleid).getAttribute("span-id-ra");
    const spanval = document.querySelectorAll('#cart .valob1');
    spanval.forEach(function (element) {
       // Get the unique ID of the element
       const uniqueId = element.id;
       if(uniqueId == spanid){
        let inv=element.textContent;
        console.log(element ," element");
         inv=parseInt(inv);
         console.log(inv,"value in the function");
    
         inv--;
         if(inv==1){
            const buval = document.querySelectorAll('#cart .btn3');
          buval.forEach(function (element) {
            if (element.id == eleid) {
              var misy = document.getElementById(element.id).getAttribute("id-to-sho");
              console.log("using in symbol ", misy);
              element.style.display = "none";
  
              const buval1 = document.querySelectorAll('#cart .btn4');
              buval1.forEach(function (element) {
                console.log("element id in misy= ",element.id,"  and the misy= ",misy);
                if (element.id == misy) {
                    console.log("what happend it is in if ");
                  element.style.display = "block";
                }
              });
  
            }
  
            
          });
         }
         console.log(inv," increment in the function");
         element.textContent=inv;
    
       }
   });
   calculateSum(10);

}
function delnode(butele){
    // Get a reference to the "cart" section
    const cartSection = document.getElementById("cart");

   let parentDivIdre = butele.parentNode.id;
   console.log("del node parent id = ",parentDivIdre);
   const whdiv = document.querySelectorAll('#cart .mbox');
   whdiv.forEach(function(element){
    if(element.id==parentDivIdre){
        cartSection.removeChild(element);
    }
   });
   calculateSum(10);
    
}