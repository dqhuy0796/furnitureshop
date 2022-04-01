filterSelection([]);

function filterSelection(filterArray) {
    let filterProducts = document.getElementsByClassName("filter-product");
    if (filterArray.length <= 0){
        for (let i = 0; i < filterProducts.length; i++)
            filterProducts[i].classList.add("display");   
    }
    else{
        for (let i = 0; i < filterProducts.length; i++) {
            removeFilterClass(filterProducts[i], "display");
            for (let j = 0; j < filterArray.length; j++) {          
                if (filterProducts[i].getAttribute("data-category").indexOf(filterArray[j]) > -1){
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

const filterBtns = document.querySelectorAll(".brand-filter .filter__item input");
filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener('change', function() {
        let filterSetting = Array.from(filterBtns) // Convert checkboxes to an array to use filter and map.
                        .filter(item => item.checked) // Use Array.filter to remove unchecked checkboxes.
                        .map(item => item.getAttribute("data-filter")) // Use Array.map to extract only the checkbox values from the array of objects.          
        console.log(filterSetting)
        filterSelection(filterSetting);
    })
})

