console.log("category.js has call");

const CongUanApi = 'src/json/api.json';

function processApi() {
    getApiProduct(renderApiProducts);
}

processApi();

function getApiProduct(callback) {
    fetch(CongUanApi).then(response => response.json()).then(callback);
}

function renderApiProducts(items) {
    // Get products from API
    const products = items.products;
    
    // Get brands from API
    let brands = [];
    let currentBrands = [];

    for (const key in products) {
        if (Object.hasOwnProperty.call(products, key)) {
            // Render categories
            renderCategories(categoryList, key);
            
            // Render product item
            products[key].map((product) => renderGridProduct(productGrid, product));
            
            // Get brands
            currentBrands = products[key].map((product) => product.brand.toLowerCase());
            for (let i = 0; i < currentBrands.length; i++) {
                if(!brands.includes(currentBrands[i]) && currentBrands[i].trim().length != 0)
                    brands.push(currentBrands[i]);                
            }
        }
    }
    // Gender brands
    brands.sort().map(brand => renderBrands(brand));

    // Filter by brand
    const brandFilterCheckboxs = document.querySelectorAll(".sidebar__item.brand-filter .filter__item input");

    brandFilterCheckboxs.forEach(brandFilterCheckbox => {
        brandFilterCheckbox.addEventListener('change', function() {
            let filterSetting = Array.from(brandFilterCheckboxs)                    // Convert checkboxes to an array to use filter and map.
                                    .filter(item => item.checked)                   // Use Array.filter to remove unchecked checkboxes.
                                    .map(item => item.getAttribute("data-filter"))  // Use Array.map to extract only the checkbox values from the array of objects.          
            filterSelection(filterSetting);
            console.log(filterSetting);
        }, false);
    });

    const resetBrandFilterBtn = document.querySelector(".sidebar__item.brand-filter .filter__btn");

    resetBrandFilterBtn.addEventListener('click', () => {
        brandFilterCheckboxs.forEach(item => item.checked = false);
        filterSelection([]);
    }, false);
};

const productGrid = document.querySelector(".product-grid");

const categoryList = document.querySelector(".sidebar__item.category-filter .filter__list");

const brandList = document.querySelector(".sidebar__item.brand-filter .filter__list");
