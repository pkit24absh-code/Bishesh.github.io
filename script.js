// Function to scroll to a section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 76;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// DOM Ready event
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    } else if (themeIcon) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Show more types functionality (only on pages with #types)
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreTypes = document.getElementById('moreTypes');
    
    if (showMoreBtn && moreTypes) {
        showMoreBtn.addEventListener('click', function() {
            if (moreTypes.style.display === 'none') {
                moreTypes.style.display = 'flex';
                showMoreBtn.textContent = 'Show Fewer Types';
            } else {
                moreTypes.style.display = 'none';
                showMoreBtn.textContent = 'Show More Types';
            }
        });
    }

    // Bike modal functionality (only on pages with #bikeModal)
    const bikeModal = document.getElementById('bikeModal');
    if (bikeModal) {
        bikeModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const bikeType = button.getAttribute('data-bike-type');
            const bikeImg = button.getAttribute('data-bike-img');
            const modalTitle = bikeModal.querySelector('.modal-title');
            const bikeDescription = bikeModal.querySelector('#bikeDescription');
            const bikeImage = document.getElementById('modalBikeImage');
            
            modalTitle.textContent = bikeType;
            document.getElementById('bikeType').textContent = bikeType;
            bikeImage.src = bikeImg;
            bikeImage.alt = bikeType;
            
            const bikeDescriptions = {
                'Sport Bike': 'Sport bikes are designed for maximum performance on paved roads. They typically feature high-performance engines, advanced suspension systems, and aerodynamic designs that allow for high speeds and quick handling. Popular models include the Yamaha YZF-R series, Honda CBR series, and Kawasaki Ninja series.',
                'Cruiser': 'Cruisers are styled after American machines from the 1930s to the early 1960s. They have a relaxed riding position with forward footpegs and handlebars that allow the rider to sit back comfortably. Harley-Davidson is the most famous cruiser manufacturer, with models like the Softail and Sportster series.',
                'Touring Bike': 'Touring bikes are designed for long-distance comfort. They feature large windshields, comfortable seating for rider and passenger, ample storage capacity, and often include advanced electronics like navigation systems, audio systems, and cruise control. Popular examples include the Honda Gold Wing, BMW K 1600 series, and Harley-Davidson Electra Glide.',
                'Adventure Bike': 'Adventure bikes, also known as ADV bikes, are built for versatility, excelling in both on-road and off-road conditions. They feature long-travel suspension, upright riding positions, and durable designs to handle diverse terrains. Popular models include the BMW R 1250 GS, KTM 1290 Super Adventure, and Honda Africa Twin.',
                'Naked Bike': 'Naked bikes strip away fairings to emphasize simplicity, agility, and a raw riding experience. They offer upright ergonomics and versatile performance for urban and sport riding. Popular examples include the Yamaha MT series, Kawasaki Z900, and Ducati Monster.',
                'Scooter': 'Scooters are ideal for urban mobility, featuring a step-through frame, automatic transmission, and compact design. They prioritize ease of use, fuel efficiency, and storage. Popular models include the Honda PCX, Yamaha NMAX, and Vespa Primavera.'
            };
            bikeDescription.textContent = bikeDescriptions[bikeType] || 'Description not available.';
        });
    }

    // Back to top button functionality
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // CSS demo functionality (only on CSS page)
    const cssDemoElement = document.getElementById('cssDemoElement');
    const bgColor = document.getElementById('bgColor');
    const borderRadius = document.getElementById('borderRadius');
    const radiusValue = document.getElementById('radiusValue');
    const rotate = document.getElementById('rotate');
    const rotateValue = document.getElementById('rotateValue');
    const scale = document.getElementById('scale');
    const scaleValue = document.getElementById('scaleValue');
    
    if (bgColor && cssDemoElement) {
        bgColor.addEventListener('input', function() {
            cssDemoElement.style.backgroundColor = this.value;
        });
    }
    
    if (borderRadius && radiusValue && cssDemoElement) {
        borderRadius.addEventListener('input', function() {
            const value = this.value + 'px';
            cssDemoElement.style.borderRadius = value;
            radiusValue.textContent = this.value;
        });
    }
    
    if (rotate && rotateValue && cssDemoElement) {
        rotate.addEventListener('input', function() {
            const scaleVal = scale ? scale.value : 1;
            const transform = `rotate(${this.value}deg) scale(${scaleVal})`;
            cssDemoElement.style.transform = transform;
            rotateValue.textContent = this.value;
        });
    }
    
    if (scale && scaleValue && cssDemoElement) {
        scale.addEventListener('input', function() {
            const rotateVal = rotate ? rotate.value : 0;
            const transform = `rotate(${rotateVal}deg) scale(${this.value})`;
            cssDemoElement.style.transform = transform;
            scaleValue.textContent = this.value;
        });
    }

    // JavaScript demo functionality (only on JS page)
    const greetBtn = document.getElementById('greetBtn');
    const nameInput = document.getElementById('nameInput');
    const greetingOutput = document.getElementById('greetingOutput');
    
    if (greetBtn && nameInput && greetingOutput) {
        greetBtn.addEventListener('click', function() {
            const name = nameInput.value.trim();
            if (name) {
                greetingOutput.textContent = 'Hello, ' + name + '! Welcome to MotoPedia!';
                greetingOutput.style.display = 'block';
            } else {
                greetingOutput.textContent = 'Please enter your name first!';
                greetingOutput.style.display = 'block';
            }
        });
    }

    // Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });
    }
        // Initialize dropdowns with custom styling
    document.querySelectorAll('.dropdown-menu').forEach(function(dropdown) {
        // Remove any existing inline styles that might override our CSS
        dropdown.removeAttribute('style');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const isDropdown = event.target.closest('.dropdown');
        if (!isDropdown) {
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                menu.classList.remove('show');
            });
        }
    });
});