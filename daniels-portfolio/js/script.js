document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Hide Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", function () {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 500);
        });
    }

    // 2. Navbar Background Change on Scroll
    const navbar = document.getElementById("mainNav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Typed Text Effect in Hero Section
    if (document.getElementById("typed-text")) {
        new Typed("#typed-text", {
            strings: ["Larry Daniels", "Developer", "Designer"],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true
        });
    }

    // 4. Portfolio Filtering Logic
    const filterButtons = document.querySelectorAll(".portfolio-filter button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 5. Scroll Counter Animation
    const counters = document.querySelectorAll(".counter");
    let hasCounted = false;

    window.addEventListener("scroll", function () {
        const counterSection = document.querySelector(".counter-section");
        if (!counterSection) return;

        const sectionPos = counterSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !hasCounted) {
            hasCounted = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const speed = 200; 
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = Math.ceil(target / speed);

                    if (count < target) {
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });

    // 6. Handle Form Submit
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        });
    }
});