import productElString from "./htmljs/Product.js";
import productDescriptionHtml from "./htmljs/ProductDescription.js";
import productReviewHtml from "./htmljs/ProductReviewHtml.js";

let total = 0;
let limit = 12;
let skip = 0;
let query = "";
let category = "all";

const btnNextPreviousHtml = `
<button class="w-2/12 p-4 underline rounded-lg rounded-l-none"> </button>
`;
const tabMenuContainerHtml = `
<div class="flex items-center justify-between w-full">
</div>
`;

const btnNextEl = document.querySelector("#btn-next-page");
const btnPreviousEl = document.querySelector("#btn-previous-page");
const pageNumber = document.querySelector("#page-number");

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

(async function () {
  removeAllChild();

  let res;

  if (categorySearchEl.value === "all") {
    res = await fetch(
      `https://dummyjson.com/products/search?limit=${limit}&q=${query}&select=title,price,discountPercentage,rating,thumbnail,reviews`
    );
  } else {
    res = await fetch(
      `https://dummyjson.com/products/category/${categorySearchEl.value}?limit=${limit}`
    );
  }

  if (!res.ok) {
    const err = document.createElement("div");
    err.textContent = `💥 Something Went wrong`;
    cardContainer.appendChild(err);
    return -1;
  }

  data = await res.json();
  console.log(data);

  // If nothing found
  if (data.total === 0) {
    const notFoundEl = document.createElement("div");
    notFoundEl.textContent = `
    💥 Not Found
    `;
    cardContainer.appendChild(notFoundEl);
    return -1;
  }

  data.products = data.products.filter((obj) => {
    return obj.title.toLowerCase().includes(searchInputEl.value.toLowerCase());
  });

  for (let i = 0; i < data.products.length; i++) {
    productTemplateInserter(productTemplateCreator(data.products[i].id));
    productTemplateDataInserter(data.products[i]);
  }

  total = data.total;
  skip = 0;
  pageNumber.textContent = (skip + limit) / limit;
  pageNumber.classList.remove("hidden");

  if (data.total > limit) {
    btnNextEl.classList.remove("hidden");
  }
})();

searchForm.addEventListener("submit", async (e) => {
  pageNumber.classList.add("hidden");
  btnNextEl.classList.add("hidden");
  btnPreviousEl.classList.add("hidden");

  e.preventDefault();
  removeAllChild();
  query = searchInputEl.value.toLowerCase();
  category = categorySearchEl.value;

  let res;

  if (category === "all") {
    res = await fetch(
      `https://dummyjson.com/products/search?q=${searchInputEl.value}&select=title,price,discountPercentage,rating,thumbnail,reviews&limit=${limit}`
    );
  } else {
    res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}`
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

  
  data.products = data.products.filter((obj) => {
    return obj.title.toLowerCase().includes(searchInputEl.value.toLowerCase());
  });

  if (data.products.length === 0) {
    const notFoundEl = document.createElement("div");
    notFoundEl.textContent = `
    💥 Not Found
    `;
    cardContainer.appendChild(notFoundEl);
    return -1;
  }

  for (let i = 0; i < data.products.length; i++) {
    productTemplateInserter(productTemplateCreator(data.products[i].id));
    productTemplateDataInserter(data.products[i]);
  }
  pageNumber.classList.remove("hidden");

  total = data.total;
  skip = 0;
  if (data.total > limit) {
    btnNextEl.classList.remove("hidden");
  }
  pageNumber.textContent = (skip + limit) / limit;

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
    data.price -
    (data.discountPercentage / 100) * data.price
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
  <button>
    <div class="h-16 aspect-square border shadow-md">
      <img src="" alt="" class="text-center transition-all duration-150 aspect-square product-image object-cover">
    </div>
  </button>
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

const pageTabContainer = document.querySelector(".page-tab-container");

pageTabContainer.addEventListener("click", async (e) => {
  const elClicked = e.target;
  // total, limit, skip
  if (
    !(
      elClicked.closest("#btn-previous-page") ||
      elClicked.closest("#btn-next-page")
    )
  ) {
    return;
  }
  if (elClicked.closest("#btn-next-page")) {
    if (total > skip) {
      removeAllChild();
      skip = skip + limit;
      if (skip + limit > total) {
        btnNextEl.classList.add("hidden");
      }
      pageNumber.textContent = (skip + limit) / limit;

      let res;
      if (category === "all") {
        res = await fetch(
          `https://dummyjson.com/products/search?limit=${limit}&q=${query}&select=title,price,discountPercentage,rating,thumbnail,reviews&skip=${skip}`
        );
      } else {
        category = categorySearchEl.value;
        res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
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
        notFoundEl.textContent = ` 💥 Not Found `;
        cardContainer.appendChild(notFoundEl);
        return -1;
      }

      data.products = data.products.filter((obj) => {
        return obj.title.toLowerCase().includes(searchInputEl.value.toLowerCase());
      });

      for (let i = 0; i < data.products.length; i++) {
        productTemplateInserter(productTemplateCreator(data.products[i].id));
        productTemplateDataInserter(data.products[i]);
      }
      btnPreviousEl.classList.remove("hidden");
    }
  }
  if (elClicked.closest("#btn-previous-page")) {
    if (skip > 0) {
      removeAllChild();
      skip = skip - limit;
      if (skip <= 0) {
        btnPreviousEl.classList.add("hidden");
      }
      pageNumber.textContent = (skip + limit) / limit;

      let res;
      if (category === "all") {
        res = await fetch(
          `https://dummyjson.com/products/search?limit=${limit}&q=${query}&select=title,price,discountPercentage,rating,thumbnail,reviews&skip=${skip}`
        );
      } else {
        category = categorySearchEl.value;
        res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
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
        notFoundEl.textContent = ` 💥 Not Found `;
        cardContainer.appendChild(notFoundEl);
        return -1;
      }

      data.products = data.products.filter((obj) => {
        return obj.title.toLowerCase().includes(searchInputEl.value.toLowerCase());
      });

      for (let i = 0; i < data.products.length; i++) {
        productTemplateInserter(productTemplateCreator(data.products[i].id));
        productTemplateDataInserter(data.products[i]);
      }
      btnNextEl.classList.remove("hidden");
    }
  }
});
