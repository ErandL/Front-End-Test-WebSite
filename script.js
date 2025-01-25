const testimonials = [
  {
    id: 1,
    name: "- Alice Johnson -",
    testimonial:
      "As a machine quilter, I love the sheen of Glide and how it adds an extra special touch to my quilts. It's the perfect blend of beauty and          strength. Not only do I love the thread, but I love working with Hab+Dash to bring out the best in my quilting. They have been an integral part of our Free Motion Quilting Challenges and helped meet our thread needs each time.",
  },
  {
    id: 2,
    name: "- Bob Smith -",
    testimonial:
      "From start to finish, the entire process was seamless. Their communication was clear, and they always kept me in the loop. The work exceeded my expectations, and I couldn’t be happier with the outcome. Excellent service!",
  },
  {
    id: 3,
    name: "- Charlie Davis -",
    testimonial:
      "I was skeptical at first, but they completely won me over with their expertise and commitment. Every little detail was taken care of, and the results speak for themselves. It’s rare to find such a dedicated team these days.",
  },
  {
    id: 4,
    name: "- Dana White -",
    testimonial:
      "The professionalism and creativity they brought to the table were unparalleled. I’ve worked with other teams before, but none compare to this one. They turned my vision into reality and added their own unique touch.",
  },
  {
    id: 5,
    name: "- Ella Brown -",
    testimonial:
      "Fantastic experience! The team worked tirelessly to ensure everything was perfect. Their dedication to client satisfaction is evident in the quality of their work. I can’t wait to collaborate with them again.",
  },
  {
    id: 6,
    name: "- Frank Green -",
    testimonial:
      "Quick, efficient, and incredibly talented. They delivered exactly what I needed, ahead of schedule, and with great attention to detail. I would recommend them to anyone in need of top-notch service.",
  },
  {
    id: 7,
    name: "- Grace Kelly -",
    testimonial:
      "This team truly goes above and beyond. They took the time to understand my needs and provided a solution that was better than I could have imagined. I’m extremely satisfied with their work.",
  },
  {
    id: 8,
    name: "- Hank Wilson -",
    testimonial:
      "Highly reliable and exceptionally skilled. They were always available to answer my questions and made sure I was happy with every step of the process. Their work is second to none.",
  },
  {
    id: 9,
    name: "- Ivy Adams -",
    testimonial:
      "The attention to detail and quality of work are absolutely outstanding. They took my ideas and transformed them into something truly remarkable. I’m beyond impressed and will definitely be coming back.",
  },
  {
    id: 10,
    name: "- Jack Miller -",
    testimonial:
      "What an incredible experience! They handled everything with precision, care, and a creative flair that set them apart. I’ve already recommended them to several friends. Thank you for an amazing job!",
  },
];

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragstart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = (e) => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// testimonials
let currentIndex = 0;

const nameElement = document.getElementById("name");
const testimonialElement = document.getElementById("testimonial");
const currentIndexElement = document.getElementById("current-index");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateTestimonial(index) {
  const { name, testimonial } = testimonials[index];
  nameElement.textContent = name;
  testimonialElement.textContent = testimonial;
  currentIndexElement.textContent = `${testimonials[index].id} / ${testimonials.length}`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

updateTestimonial(currentIndex);

// Nav Hidden Menu
const navToggle = document.getElementById("hidden-btn");
const navMenu = document.querySelector(".nav-new-menu");

navToggle.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
  navMenu.style.display = navMenu.classList.contains("active")
    ? "flex"
    : "none";
});

document.addEventListener("click", (event) => {
  const navMenu = document.querySelector(".nav-new-menu");
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});

document.querySelectorAll(".nav-new-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-new-menu").classList.remove("active");
  });
});
