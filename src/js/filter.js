console.log("filter.js has call");

function filterSelection(filterArray) {
    let filterProducts = document.getElementsByClassName("filter-product");
    if (filterArray.length <= 0) {
        for (let i = 0; i < filterProducts.length; i++)
            filterProducts[i].classList.add("display");   
    } else {
        for (let i = 0; i < filterProducts.length; i++) {
            removeFilterClass(filterProducts[i], "display");
            for (let j = 0; j < filterArray.length; j++) {          
                if (filterProducts[i].getAttribute("data-category").indexOf(filterArray[j]) > -1) {
                    addFilterClass(filterProducts[i], "display");
                }
            }
        }
    }
}

// Display
function addFilterClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.classList.add(arr2[i]);
        }
    }
}

// Hidden
function removeFilterClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Filter by room

// Filter by category

// Filter by price