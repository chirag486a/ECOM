const btnNextPreviousHtml = `
<button class="w-2/12 p-4 underline rounded-lg rounded-l-none"> </button>
`;
const tabMenuContainerHtml = `
<div class="flex items-center justify-center w-full">
</div>
`;

const tabNumHtml = `
<li>
<button class="box-content w-12 h-12 border rounded-lg" data-active="true" data-tab-no=""></button>
</li>
`;

const tabNumContainerHtml = `
<div class="flex items-center justify-center w-full">
  <ul class="flex gap-1">
  </ul>
</div>
`;

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

const productDescriptionHtml = `
<div class="absolute top-0 z-10 p-12 transition-all duration-500 -translate-x-1/2 bg-white border-4 left-1/2 w-fit h-fit border-slate-900 product-description-model">
  <div>
    <h3 class="mb-8 text-2xl">Product Details</h3>
    <div class="mb-12">
      <div class="flex gap-8">
        <div class="flex flex-col gap-2">
          <div class="bg-black min-w-80 max-w-80 aspect-square product-image-container relative">
            <img src="" alt="" class="text-center transition-all duration-150 aspect-square product-image object-cover">
          </div>
          <div class="h-24  flex gap-2 w-72 small-image-container overflow-x-auto">
          </div>
        </div>
        <div class="flex flex-col gap-4 pr-8 w-96">
          <div>
            <div class="text-2xl product-name">Essence Mascara Lash Princess</div>
            <div class="text-sm opacity-75 product-return-policy">30 days return policy</div>
          </div>
          <div class="flex items-baseline gap-8">
            <span class="text-4xl text-red-800 product-price-before-discount">$200</span>
            <span class="font-bold product-discount">50% off</span>
            <span class="text-4xl line-through opacity-60 product-price-after-discount">400</span>
          </div>
          <div class="text-lg product-stock-left">Only 5 left</div>
          <div class="text-sm product-description">The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
          <div class="flex items-end justify-end w-full h-full">
            <button class="px-12 py-4 bg-red-900 rounded-md w-fit h-fit text-red-50">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-12 flex-col">
      <div class="flex flex-col gap-6">
        <h4 class="text-xl">Additional Information</h4>
        <div class="flex flex-col gap-4 pl-12 text-sm">
          <div class="flex gap-6">
            <div>Brand</div>
            <div class="product-brand">...</div>
          </div>
          <div class="flex gap-6">
            <div>Tags</div>
            <div class="product-tags">...</div>
          </div>
          <div class="flex gap-6">
            <div>Dimension</div>
            <div>
              <span>width</span>
              <span class="product-width">(20)</span>
            </div>
            <div>
              <span>height</span>
              <span class="product-height">(30)</span>
            </div>
            <div>
              <span>depth</span>
              <span class="product-depth">(82)</span>
            </div>
          </div>
          <div class="flex gap-6">
            <span>Warenty</span>
            <div class="product-warrenty">...</div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-6 text-2xl">Reviews</h3>
        <div class="flex flex-col px-12 product-reviews">
        </div>
      </div>
    </div>
  </div>
</div>
`;

const productReviewHtml = `
<div class="flex gap-2 [&:not(:last-child)]:border-b-2 w-1/2 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:pb-4 product-review">
  <div class="w-10 h-10 rounded-sm bg-slate-500"></div>
  <div class="">
    <div class="flex flex-col mb-2">
      <span class="product-reviewer-name">Natalie Harris</span>
      <span class="text-xs opacity-60 product-reviewed-time">1 Min ago</span>
    </div>
    <div class="mb-4">
      <div class="relative flex h-full text-sm text-gray-300">
        <div class="absolute inset-0 w-[70%] overflow-hidden text-yellow-500 ratings-star product-reviewed-star">
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
    </div>
    <div class="text-sm product-reviewed-comment">Excellent quality!</div>
  </div>
</div>
`;

const categorySearchEl = document.querySelector("#categorySearchEl");
const productDescriptionContainer = document.querySelector(
  ".product-description"
);

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

let data;

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

  data = await res.json();

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

  // TAB FEATURE
  const totalData = data.total;
  const noOfTabs = data.total / 12 < 1 ? 0 : Math.floor(data.total / 12);
  console.log(totalData, noOfTabs);

  // Previous
  // Tabs
  // one tab
  // 5 tab
  let btnPreviousEl;
  let btnNextEl;
  let tabNumContainerEl;

  btnPreviousEl = parser
    .parseFromString(btnNextPreviousHtml, "text/html")
    .querySelector("button");
  btnNextEl = parser
    .parseFromString(btnNextPreviousHtml, "text/html")
    .querySelector("button");
  tabNumContainerEl = parser
    .parseFromString(tabNumContainerHtml, "text/html")
    .querySelector("div");

  if (noOfTabs > 1) {
    btnNextEl.textContent = "Next";
  }

  if (noOfTabs <= 5) {
    for (let i = 1; i < noOfTabs; i++) {
      const tabNumEl = parser.parseFromString(tabNumHtml, "text/html");
      tabNumEl.textContent = i;
      if (i === 1) {
        tabNumEl.dataset.active = true;
      }
      tabNumEl.dataset.tabNo = i;
      tabNumContainerEl.querySelector("ul").appendChild(tabNumEl);
    }
  }
  // more than 5 tab
  if (noOfTabs >= 5) {
    for (let i = 1; i < 5; i++) {
      const tabNumEl = parser.parseFromString(tabNumHtml, "text/html").querySelector('li');
      tabNumEl.textContent = i;
      if (i === 1) {
        tabNumEl.dataset.active = true;
      }
      if (noOfTabs === 4) {
        tabNumEl.dataset.tabNo = "...";
      }
      if (noOfTabs === 5) {
        tabNumEl.textContent = noOfTabs;
        tabNumEl.dataset.tabNo = noOfTabs;
      }
      tabNumContainerEl.querySelector("ul").appendChild(tabNumEl);
    }
  }
  // Next
  const tabMenuContainerEl = parser
    .parseFromString(tabMenuContainerHtml, "text/html")
    .querySelector("div");
    console.log(btnPreviousEl);

  tabMenuContainerEl.appendChild(btnPreviousEl);
  tabMenuContainerEl.appendChild(tabNumContainerEl);
  tabMenuContainerEl.appendChild(btnNextEl);

  const tabMenuEl = document.querySelector(".tab-menu-container");
  tabMenuEl.appendChild(tabMenuContainerEl);

  searchInputEl.value = "";
});

cardContainer.addEventListener("click", async (e) => {
  const id = e.target.closest(".cardBox")?.dataset?.productContainerId;

  if (!id) {
    if (productDescriptionContainer.firstChild) {
      productDescriptionContainer.removeChild(
        productDescriptionContainer.firstChild
      );
    }
    return;
  }

  const productDescriptionDOM = parser.parseFromString(
    productDescriptionHtml,
    "text/html"
  );

  const productDescriptionModel = productDescriptionDOM.querySelector(
    ".product-description-model"
  );
  const productName = productDescriptionModel.querySelector(".product-name");
  const productReturnPolicy = productDescriptionModel.querySelector(
    ".product-return-policy"
  );
  const productPriceBeforeDiscount = productDescriptionModel.querySelector(
    ".product-price-before-discount"
  );

  const productDiscount =
    productDescriptionModel.querySelector(".product-discount");
  const productPriceAfterDiscount = productDescriptionModel.querySelector(
    ".product-price-after-discount"
  );
  const productDescription = productDescriptionModel.querySelector(
    ".product-description"
  );
  const productStockLeft = productDescriptionModel.querySelector(
    ".product-stock-left"
  );
  const productBrand = productDescriptionModel.querySelector(".product-brand");
  const productTags = productDescriptionModel.querySelector(".product-tags");
  const productWidth = productDescriptionModel.querySelector(".product-width");
  const productHeight =
    productDescriptionModel.querySelector(".product-height");
  const productDepth = productDescriptionModel.querySelector(".product-depth");
  const productWarrenty =
    productDescriptionModel.querySelector(".product-warrenty");
  const productImg = productDescriptionModel.querySelector(
    ".product-image-container img"
  );

  const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
  productName.textContent = data.title;
  productReturnPolicy.textContent = data.returnPolicy;
  productPriceBeforeDiscount.textContent = data.price;
  productDiscount.textContent = `${data.discountPercentage}%`;
  productPriceAfterDiscount.textContent = (
    (data.discountPercentage / 100) *
    data.price
  ).toFixed(2);
  productDescription.textContent = data.description;
  productStockLeft.textContent = `Only ${data.stock} available`;

  productBrand.textContent = data.brand;
  productTags.textContent = `${data.tags
    .map((element) => `#${element}`)
    .join(" ")}`;
  productWidth.textContent = `(${data.dimensions.width})`;
  productHeight.textContent = `(${data.dimensions.height})`;
  productDepth.textContent = `(${data.dimensions.depth})`;
  productWarrenty.textContent = data.warrantyInformation;

  for (const review of data.reviews) {
    const productReviews =
      productDescriptionModel.querySelector(".product-reviews");

    const productReview = parser
      .parseFromString(productReviewHtml, "text/html")
      .querySelector(".product-review");

    const productReviewerName = productReview.querySelector(
      ".product-reviewer-name"
    );
    const productReviewedTime = productReview.querySelector(
      ".product-reviewed-time"
    );
    const productReviewedStar = productReview.querySelector(
      ".product-reviewed-star"
    );
    const productReviewedComment = productReview.querySelector(
      ".product-reviewed-comment"
    );

    productReviewerName.textContent = review.reviewerName;
    productReviewedComment.textContent = review.comment;
    productReviewedStar.style.width = (review.rating / 5) * 100;
    productReviewedTime.textContent = timeago.format(review.date);
    productReviews.appendChild(productReview);
  }

  const productModelImg = `
    <div class="h-16 aspect-square bg-black">
      <img src="" alt="" class="text-center transition-all duration-150 aspect-square product-image object-cover">
    </div>
  `;

  productImg.src = data.images[0];

  for (const imgSrc of data.images) {
    const productModelSmallImg = parser
      .parseFromString(productModelImg, "text/html")
      .querySelector("div");
    productModelSmallImg.querySelector("img").src = imgSrc;
    productModelSmallImg.style.cursor = "pointer";
    productModelSmallImg.addEventListener("click", (e) => {
      productImg.src = imgSrc;
    });

    productDescriptionModel
      .querySelector(".small-image-container")
      .appendChild(productModelSmallImg);
  }

  const exitModelClick = (e) => {
    if (!e.target.closest(".product-description-model")) {
      if (productDescriptionContainer.firstChild) {
        productDescriptionContainer.removeChild(
          productDescriptionContainer.firstChild
        );
      }
      document.removeEventListener("click", exitModelClick);
      return;
    }
  };
  productDescriptionContainer.appendChild(productDescriptionModel);

  document.addEventListener("click", exitModelClick);
});
