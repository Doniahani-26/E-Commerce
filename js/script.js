// --------- Slider Logic ---------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  // إخفاء جميع الشرائح
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // إعادة ضبط الفهرس إذا تجاوز العدد
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // إظهار الشريحة الحالية
  slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// التبديل التلقائي للسلايدر كل 5 ثواني
setInterval(() => {
  changeSlide(1);
}, 5000);

// --------- Add to Cart Logic ---------
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // زيادة عدد المنتجات في السلة
    cartCount++;
    cartCountElement.innerText = cartCount;

    // تأثير بصري بسيط عند الضغط
    button.innerText = "Added ✓";
    button.style.backgroundColor = "#27ae60";

    // إرجاع الزر لحالته الأصلية بعد ثانية ونصف
    setTimeout(() => {
      button.innerText = "Add to Cart";
      button.style.backgroundColor = "#333";
    }, 1500);
  });
});

// منع تحديث الصفحة عند الضغط على زر إرسال الفورم (للتجربة فقط)
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
