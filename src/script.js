const productElString = `
<div class="flex flex-col gap-4 transition-all duration-300 bg-white rounded-sm min-w-52 max-w-52 hover:shadow-bordered group cardBox">
  <div class="w-full overflow-hidden transition-all duration-150 rounded-sm aspect-square">
    <button class="relative w-full h-full ">
      <img src="" alt="" class="text-center transition-all duration-150 aspect-square product-image blur-sm object-cover">
      <p class="absolute inset-0 flex items-center justify-center text-sm opacity-50 image-load-error">Fix your internet</p>
    </button>
  </div>
  <div class="flex flex-col gap-1 px-2 pb-4 blur-sm product-overview-details transition-all duration-150">
    <div class="flex items-baseline lg:gap-8">
      <span class="text-base text-red-700 transition-all duration-150 product-price-after-discount">$200 /-</span>
      <span class="text-base font-normal line-through opacity-60 product-price-before-discount">$400</span>
    </div>
    <div class="max-w-full">
      <button class="w-full max-w-full overflow-hidden">
        <div class="h-12">
          <span class="max-w-full overflow-hidden text-sm text-left text-ellipsis whitespace-nowrap text-slate-800 text-wrap line-clamp-2 product-name">Super duper fair & Lovely</span>
        </div>
      </button>
    </div>
    <div class="ratings-container">
      <div class="flex items-center gap-2 text-xs cursor-default">
        <span class="opacity-75 text-slate-800 ratings-number">3.5</span>
        <div class="relative flex h-full text-sm text-gray-300">
          <div class="absolute inset-0 w-[70%] overflow-hidden text-yellow-500 ratings-star">
            <div class="flex w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-yellow-500" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-yellow-500" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-yellow-500" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-yellow-500" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <svg class="h-4 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </div>
          </div>
          <div class="flex w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-transparent" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-transparent" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-transparent" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-transparent" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-transparent" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </div>
        </div>
        <span class="ml-4 opacity-75 text-slate-800 ratings-quantity">(4)</span>
      </div>
    </div>
  </div>
</div>
`;

const categorySearchEl = document.querySelector("#categorySearchEl");

// Dynamically Import categories
fetch("https://dummyjson.com/products/categories")
  .then((res) => res.json())
  .then((datas) => {
    for (const data of datas) {
      const optionEl = document.createElement("option");
      optionEl.value = data.slug;
      optionEl.textContent = data.name;
      categorySearchEl.appendChild(optionEl);
    }
  });

// Select Elements Globally
const searchForm = document.querySelector("#search-form");
const searchInputEl = searchForm.querySelector("input");
const cardContainer = document.querySelector(".card-container");

const parser = new DOMParser();

const productSelector = function (id) {
  const productBox = document.querySelector(
    `[data-product-container-id='${id}']`
  );
  // Product Image
  const productImg = productBox.querySelector(`.product-image`);
  const imgLoadError = productBox.querySelector(".image-load-error");

  // Product Overview Details
  const productOverviewDetails = productBox.querySelector(
    ".product-overview-details"
  );
  // Product Pricing
  const productPriceAfterDiscount = productBox.querySelector(
    `.product-price-after-discount`
  );
  const productPriceBeforeDiscount = productBox.querySelector(
    `.product-price-before-discount`
  );

  // Product Name
  const productName = productBox.querySelector(`.product-name`);

  // Product Ratings
  const ratingsNumber = productBox.querySelector(`.ratings-number`);
  const ratingsStar = productBox.querySelector(`.ratings-star`);
  const ratingsQuantity = productBox.querySelector(`.ratings-quantity`);

  return {
    productBox,
    productImg,
    imgLoadError,
    productOverviewDetails,
    productPriceAfterDiscount,
    productPriceBeforeDiscount,
    productName,
    ratingsNumber,
    ratingsStar,
    ratingsQuantity,
  };
};

const productTemplateCreator = function (i) {
  const productEl = parser
    .parseFromString(productElString, "text/html")
    .querySelector(".cardBox");
  productEl.dataset.productContainerId = i;

  return productEl;
};

const productTemplateInserter = function (productEl) {
  const productContainer = document.querySelector(".card-container");
  productContainer.appendChild(productEl);
};

const productTemplateDataInserter = function (data) {
  const {
    productBox,
    productImg,
    imgLoadError,
    productOverviewDetails,
    productPriceAfterDiscount,
    productPriceBeforeDiscount,
    productName,
    ratingsNumber,
    ratingsStar,
    ratingsQuantity,
  } = productSelector(data.id);

  productOverviewDetails.classList.toggle("blur-sm");
  imgLoadError.classList.toggle("hidden");

  productImg.src = data.thumbnail;
  productImg.onload = () => {
    productImg.classList.toggle("blur-sm");
  };
  productPriceAfterDiscount.textContent = (
    data.price -
    (data.discountPercentage / 100) * data.price
  ).toFixed(2);
  productPriceBeforeDiscount.textContent = data.price;
  productName.textContent = data.title;
  ratingsNumber.textContent = data.rating;
  ratingsStar.style.width = `${(data.rating / 5) * 100}%`;
  ratingsQuantity.textContent = `(${data.reviews?.length})`;
};

// 1. remove previous results
const removeAllChild = function () {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
};

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  removeAllChild();

  let res;

  if (categorySearchEl.value === "all") {
    res = await fetch(
      `https://dummyjson.com/products/search?q=${searchInputEl.value}&select=title,price,discountPercentage,rating,thumbnail,reviews`
    );
  } else {
    res = await fetch(
      `https://dummyjson.com/products/category/${categorySearchEl.value}?skip=24&limit=12`
    );
  }

  if (!res.ok) {
    const err = document.createElement("div");
    err.textContent = `💥 Something Went wrong`;
    cardContainer.appendChild(err);
    return -1;
  }

  const data = await res.json();

  // If nothing found
  if (data.total === 0) {
    const notFoundEl = document.createElement("div");
    notFoundEl.textContent = `
    💥 Not Found
    `;
    cardContainer.appendChild(notFoundEl);
    return -1;
  }

  // Define no of box to show in ui
  let noOfBox = 0;
  if (data.products.length >= 12) {
    noOfBox = 12;
  } else {
    noOfBox = data.products.length;
  }
  console.log(data);

  // Create template
  // Insert Template to html
  // Insert Data to template

  for (let i = 0; i < noOfBox; i++) {
    productTemplateInserter(productTemplateCreator(data.products[i].id));
    productTemplateDataInserter(data.products[i]);
  }
  searchInputEl.value = "";
});

cardContainer.addEventListener("click", (e) => {
  console.log();

  console.log(e.target.closest(".cardBox").dataset.productContainerId);
  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then(console.log);
});
