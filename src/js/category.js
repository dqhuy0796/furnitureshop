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
};

const productGrid = document.querySelector(".product-grid");

const categoryList = document.querySelector(".sidebar__item.category-filter .filter__list");

const brandList = document.querySelector(".sidebar__item.brand-filter .filter__list");
