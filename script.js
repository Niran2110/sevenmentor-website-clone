 const counters = document.querySelectorAll(".counter-number");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.innerText = Math.ceil(current);

                        setTimeout(updateCounter, 20);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            }

        });

    }, {
        threshold: 0.5
    });


    counters.forEach(counter => {
        observer.observe(counter);
    });
