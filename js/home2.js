document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const menuToggle = document.getElementById('mobile-menu');
            const navList = document.getElementById('nav-list');
            
            menuToggle.addEventListener('click', function() {
                navList.classList.toggle('active');
            });
            
            // Cart functionality
            let cartItems = [];
            const cartCount = document.getElementById('cart-count');
            
            // Menu items data
            const snacks = [
                { name: 'BURGER', price: 4000, image: '../images/burger.jpg' },
                { name: 'PIZZA', price: 6000, image: '../images/pizza.jpg' },
                { name: 'MEAT PIE', price: 2000, image: '../images/meat pie.jpg' },
                { name: 'POPCORN', price: 4000, image: '../images/popcorn.jpg' },
                { name: 'PLANTAIN CHIPS', price: 3000, image: '../images/plantain.jpg' },
                { name: 'SHAWARMA', price: 4000, image: '../images/shawarma.jpg' }
            ];
            
            const drinks = [
                { name: 'MONSTER', price: 2000, image: '../images/monster.jpg' },
                { name: 'RED BULL', price: 2000, image: '../images/redbull.jpg' },
                { name: 'PEPSI', price: 700, image: '../images/pepsii.jpg' },
                { name: 'COKE', price: 800, image: '../images/coke.jpg' },
                { name: 'FANTA', price: 800, image: '../images/fanta.jpg' },
                { name: 'SPRITE', price: 800, image: '../images/spite.jpg' },
                { name: 'WATER', price: 500, image: '../images/evawater.jpg' }
            ];
            
            // Render menu items
            function renderMenuItems(items, containerId) {
                const container = document.getElementById(containerId);
                container.innerHTML = '';
                
                items.forEach(item => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                        <div class="menu-item-info">
                            <div class="menu-item-name">${item.name}</div>
                            <div class="menu-item-price">NGN${item.price.toLocaleString()}</div>
                            <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">
                                ADD TO CART
                            </button>
                        </div>
                    `;
                    container.appendChild(menuItem);
                });
            }
            
            // Initialize menus
            renderMenuItems(snacks, 'snacks-grid');
            renderMenuItems(drinks, 'drinks-grid');
            
            // Add to cart functionality
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    const name = e.target.getAttribute('data-name');
                    const price = parseInt(e.target.getAttribute('data-price'));
                    
                    cartItems.push({ name, price });
                    cartCount.textContent = cartItems.length;
                    
                    // Visual feedback
                    e.target.textContent = 'ADDED!';
                    e.target.style.backgroundColor = '#d82b2b';
                    e.target.style.color = 'black';
                    
                    setTimeout(() => {
                        e.target.textContent = 'ADD TO CART';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'white';
                    }, 1000);
                }
            });
            
            // Animation for the hero text
            const animatedText = document.querySelector('.animated-text');
            setInterval(() => {
                animatedText.style.height = animatedText.offsetHeight + 'px';
            }, 100);
        });