// ===================================
// Menu Data
// ===================================
const menuItems = [
    // Coffee
    {
        id: 1,
        name: 'Espresso',
        category: 'coffee',
        price: 3.50,
        description: 'Rich and bold shot of pure coffee perfection',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80',
        type: 'veg'
    },
    {
        id: 2,
        name: 'Cappuccino',
        category: 'coffee',
        price: 4.50,
        description: 'Espresso with steamed milk and velvety foam',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
        type: 'veg'
    },
    {
        id: 3,
        name: 'Latte',
        category: 'coffee',
        price: 4.75,
        description: 'Smooth espresso with steamed milk and light foam',
        image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80',
        type: 'veg'
    },
    {
        id: 4,
        name: 'Mocha',
        category: 'coffee',
        price: 5.25,
        description: 'Espresso with chocolate, steamed milk, and whipped cream',
        image: 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?w=400&q=80',
        type: 'veg'
    },
    {
        id: 5,
        name: 'Americano',
        category: 'coffee',
        price: 3.75,
        description: 'Espresso diluted with hot water for a smooth taste',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
        type: 'veg'
    },
    {
        id: 6,
        name: 'Caramel Macchiato',
        category: 'coffee',
        price: 5.50,
        description: 'Espresso with vanilla, steamed milk, and caramel drizzle',
        image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=400&q=80',
        type: 'veg'
    },

    // Breakfast
    {
        id: 7,
        name: 'Avocado Toast',
        category: 'breakfast',
        price: 8.50,
        description: 'Fresh avocado on sourdough with cherry tomatoes',
        image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80',
        type: 'veg'
    },
    {
        id: 8,
        name: 'Eggs Benedict',
        category: 'breakfast',
        price: 10.50,
        description: 'Poached eggs with hollandaise sauce on English muffin',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80',
        type: 'non-veg'
    },
    {
        id: 9,
        name: 'Pancake Stack',
        category: 'breakfast',
        price: 9.00,
        description: 'Fluffy pancakes with maple syrup and fresh berries',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
        type: 'veg'
    },
    {
        id: 10,
        name: 'Breakfast Burrito',
        category: 'breakfast',
        price: 9.50,
        description: 'Scrambled eggs, cheese, salsa, and sausage wrapped',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        type: 'non-veg'
    },
    {
        id: 11,
        name: 'French Toast',
        category: 'breakfast',
        price: 8.75,
        description: 'Classic French toast with cinnamon and powdered sugar',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
        type: 'veg'
    },
    {
        id: 12,
        name: 'Granola Bowl',
        category: 'breakfast',
        price: 7.50,
        description: 'Homemade granola with yogurt and fresh fruits',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80',
        type: 'veg'
    },

    // Desserts
    {
        id: 13,
        name: 'Chocolate Cake',
        category: 'desserts',
        price: 6.50,
        description: 'Rich chocolate layer cake with ganache frosting',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
        type: 'veg'
    },
    {
        id: 14,
        name: 'Cheesecake',
        category: 'desserts',
        price: 7.00,
        description: 'Creamy New York style cheesecake with berry compote',
        image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&q=80',
        type: 'veg'
    },
    {
        id: 15,
        name: 'Tiramisu',
        category: 'desserts',
        price: 7.50,
        description: 'Classic Italian dessert with coffee and mascarpone',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
        type: 'veg'
    },
    {
        id: 16,
        name: 'Brownie Sundae',
        category: 'desserts',
        price: 6.75,
        description: 'Warm brownie with vanilla ice cream and hot fudge',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
        type: 'veg'
    },
    {
        id: 17,
        name: 'Apple Pie',
        category: 'desserts',
        price: 6.00,
        description: 'Homemade apple pie with cinnamon and flaky crust',
        image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&q=80',
        type: 'veg'
    },
    {
        id: 18,
        name: 'Macarons',
        category: 'desserts',
        price: 5.50,
        description: 'Assorted French macarons in various flavors',
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80',
        type: 'veg'
    },

    // Healthy
    {
        id: 19,
        name: 'Acai Bowl',
        category: 'healthy',
        price: 9.50,
        description: 'Acai blend topped with granola, fruits, and honey',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80',
        type: 'veg'
    },
    {
        id: 20,
        name: 'Quinoa Salad',
        category: 'healthy',
        price: 10.00,
        description: 'Quinoa with mixed greens, avocado, and lemon dressing',
        image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80',
        type: 'veg'
    },
    {
        id: 21,
        name: 'Green Smoothie Bowl',
        category: 'healthy',
        price: 8.50,
        description: 'Spinach, banana, and spirulina smoothie bowl',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80',
        type: 'veg'
    },
    {
        id: 22,
        name: 'Vegan Wrap',
        category: 'healthy',
        price: 9.00,
        description: 'Hummus, vegetables, and tahini in whole wheat wrap',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        type: 'veg'
    },
    {
        id: 23,
        name: 'Chia Pudding',
        category: 'healthy',
        price: 7.00,
        description: 'Chia seeds in almond milk with fresh berries',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
        type: 'veg'
    },
    {
        id: 24,
        name: 'Buddha Bowl',
        category: 'healthy',
        price: 11.00,
        description: 'Roasted vegetables, chickpeas, and tahini dressing',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
        type: 'veg'
    },

    // Drinks
    {
        id: 25,
        name: 'Fresh Orange Juice',
        category: 'drinks',
        price: 4.50,
        description: 'Freshly squeezed orange juice',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
        type: 'veg'
    },
    {
        id: 26,
        name: 'Iced Tea',
        category: 'drinks',
        price: 3.50,
        description: 'Refreshing iced tea with lemon',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
        type: 'veg'
    },
    {
        id: 27,
        name: 'Mango Smoothie',
        category: 'drinks',
        price: 5.50,
        description: 'Tropical mango smoothie with yogurt',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80',
        type: 'veg'
    },
    {
        id: 28,
        name: 'Matcha Latte',
        category: 'drinks',
        price: 5.00,
        description: 'Japanese green tea latte with steamed milk',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80',
        type: 'veg'
    },
    {
        id: 29,
        name: 'Hot Chocolate',
        category: 'drinks',
        price: 4.25,
        description: 'Rich hot chocolate with whipped cream',
        image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&q=80',
        type: 'veg'
    },
    {
        id: 30,
        name: 'Berry Blast',
        category: 'drinks',
        price: 5.75,
        description: 'Mixed berry smoothie with banana and honey',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80',
        type: 'veg'
    }
];

// ===================================
// Gallery Images
// ===================================
const galleryImages = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
    'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80'
];

// ===================================
// Testimonials Data
// ===================================
const testimonials = [
    {
        text: "Best cappuccino in town! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning!",
        author: "Sarah Johnson",
        role: "Regular Customer",
        stars: 5
    },
    {
        text: "Absolutely love this place! The avocado toast is to die for, and their coffee is always perfectly brewed. Highly recommend!",
        author: "Michael Chen",
        role: "Food Blogger",
        stars: 5
    },
    {
        text: "A hidden gem! Great place to work with free WiFi and plenty of power outlets. The staff is super accommodating.",
        author: "Emily Rodriguez",
        role: "Freelancer",
        stars: 5
    },
    {
        text: "The desserts here are amazing! I've tried almost everything on the menu and haven't been disappointed once.",
        author: "David Thompson",
        role: "Dessert Enthusiast",
        stars: 5
    },
    {
        text: "Perfect spot for weekend brunch. The pancakes are fluffy, the coffee is strong, and the vibe is just right!",
        author: "Jessica Martinez",
        role: "Brunch Lover",
        stars: 5
    }
];

// ===================================
// State Management
// ===================================
let cart = JSON.parse(localStorage.getItem('cafeCart')) || [];
let currentTestimonial = 0;
let currentGalleryImage = 0;

// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelectorAll('.nav-link');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutAmount = document.getElementById('checkoutAmount');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const successMessage = document.getElementById('successMessage');
const menuGrid = document.getElementById('menuGrid');
const menuSearch = document.getElementById('menuSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const testimonialsContainer = document.getElementById('testimonialsContainer');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialDots = document.getElementById('testimonialDots');
const reservationForm = document.getElementById('reservationForm');
const newsletterForm = document.getElementById('newsletterForm');
const checkoutForm = document.getElementById('checkoutForm');

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderMenu();
    renderGallery();
    renderTestimonials();
    initCountdown();
    initCounters();
    updateCartUI();
    setMinDate();
});

// ===================================
// Navigation
// ===================================
function initNavigation() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Smooth scroll and active link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.add('fa-bars');
            mobileToggle.querySelector('i').classList.remove('fa-times');

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Menu Functions
// ===================================
function renderMenu(filter = 'all', searchTerm = '') {
    menuGrid.innerHTML = '';

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = filter === 'all' || item.category === filter;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filteredItems.forEach(item => {
        const menuItemEl = document.createElement('div');
        menuItemEl.className = 'menu-item';
        menuItemEl.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                <span class="menu-item-badge ${item.type}">${item.type === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}</span>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Order
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItemEl);
    });

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 60px 20px; color: var(--gray-500); font-size: 1.2rem;">No items found</p>';
    }
}

// Menu filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderMenu(category, menuSearch.value);
    });
});

// Menu search
menuSearch.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');
    renderMenu(activeFilter, e.target.value);
});

// ===================================
// Cart Functions
// ===================================
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showNotification('Item added to cart!');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cafeCart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
    checkoutAmount.textContent = `$${total.toFixed(2)}`;
}

// Cart sidebar toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    cartSidebar.classList.remove('active');
    checkoutModal.classList.add('active');
});

closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkoutModal.classList.remove('active');
    cart = [];
    saveCart();
    updateCartUI();
    showSuccessModal('Order placed successfully!');
});

// ===================================
// Gallery Functions
// ===================================
function renderGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image}" alt="Gallery Image ${index + 1}">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

function openLightbox(index) {
    currentGalleryImage = index;
    lightboxImage.src = galleryImages[index];
    lightbox.classList.add('active');
}

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightboxPrev.addEventListener('click', () => {
    currentGalleryImage = (currentGalleryImage - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentGalleryImage];
});

lightboxNext.addEventListener('click', () => {
    currentGalleryImage = (currentGalleryImage + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentGalleryImage];
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// ===================================
// Testimonials Functions
// ===================================
function renderTestimonials() {
    testimonialsContainer.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <div class="testimonial-stars">
                ${'★'.repeat(testimonial.stars)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.author}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        </div>
    `).join('');

    // Create dots
    testimonialDots.innerHTML = testimonials.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></span>
    `).join('');

    // Auto-play
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    showTestimonial(index);
}

testimonialNext.addEventListener('click', nextTestimonial);
testimonialPrev.addEventListener('click', prevTestimonial);

// ===================================
// Counter Animation
// ===================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / speed;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString() + '+';
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// Countdown Timer
// ===================================
function initCountdown() {
    // Set countdown to next Saturday
    const now = new Date();
    const nextSaturday = new Date();
    nextSaturday.setDate(now.getDate() + (6 - now.getDay() + 7) % 7);
    nextSaturday.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = nextSaturday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===================================
// Form Handling
// ===================================
function setMinDate() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real application, you would integrate EmailJS here
    // For demo purposes, we'll just show success

    showSuccessModal('Reservation confirmed! We look forward to serving you.');
    reservationForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessModal('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// ===================================
// Modals
// ===================================
function showSuccessModal(message) {
    successMessage.textContent = message;
    successModal.classList.add('active');
}

closeSuccess.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// Close modals on outside click
window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// ===================================
// Notification
// ===================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        padding: 15px 25px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.menu-item, .facility-card, .event-card, .timeline-item, .value-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
