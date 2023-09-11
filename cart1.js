function fun(button) {
    let ab = button.id;
    document.getElementById(ab).style.display = "none";

    const parentDivId = button.parentNode.id;

    let a = document.getElementById(parentDivId);
    let clonedContent = a.cloneNode(true);
    let quantity = clonedContent.querySelector('.btn1');
    quantity.style.display = 'block';
    quantity.value = 1;

    // true means deep clone including all children
    // Find and remove the button element from the cloned content
    let buttonToRemove = clonedContent.querySelector("#bt");
    if (buttonToRemove) {
        buttonToRemove.remove();
    }

    let destinationDiv = document.getElementById("cart");
    destinationDiv.appendChild(clonedContent);

    // Add an event listener to the quantity input field in the cloned content
    quantity.addEventListener("input", calculateSum);

    calculateSum(clonedContent);
}

function calculateSum(clonedContent) {
    // Get all input elements with the class "btn1" inside the "cart" div
    const quantities = document.querySelectorAll('#cart .btn1');
    const quantities1 = document.querySelectorAll('#cart .resulte');
    const resultElement = document.getElementById("result");
    let sum = 0;
    

    quantities.forEach(function (input) {
        const inputValue = parseFloat(input.value) || 0;
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
});}
