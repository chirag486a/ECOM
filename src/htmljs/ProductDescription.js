export default `
<div class="absolute top-0 z-10 p-12 transition-all duration-500 -translate-x-1/2 bg-white border-4 left-1/2 w-fit h-fit border-slate-900 product-description-model">
  <div>
    <h3 class="mb-8 text-2xl">Product Details</h3>
    <div class="mb-12">
      <div class="flex gap-8">
        <div class="flex flex-col gap-2">
          <div class="border-2 border-slate-400 min-w-80 max-w-80 aspect-square product-image-container relative">
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
            <span class="text-4xl text-red-800 product-price-after-discount">$200</span>
            <span class="font-bold product-discount">50% off</span>
            <span class="text-4xl line-through opacity-60 product-price-before-discount">400</span>
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
