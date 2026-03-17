// Scripts for MPA logic

// Function to render a general product card
function createProductCard(product) {
    const oldPriceHtml = product.oldPrice ? `<span class="price-old">$${product.oldPrice}</span>` : '';
    
    return `
        <div class="card" data-category="${product.category}">
            ${product.tag ? `<div class="badge ${product.badgeClass}">${product.tag}</div>` : ''}
            <a href="product-details.html?id=${product.id}" class="card-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="card-content">
                <span class="card-cat">${product.category}</span>
                <a href="product-details.html?id=${product.id}"><h3 class="card-title">${product.name}</h3></a>
                <div class="rating">
                    ${generateStars(product.rating)}
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                <div class="card-bottom">
                    <div class="price-wrapper">
                        <span class="price">$${product.price}</span>
                        ${oldPriceHtml}
                    </div>
                    <a href="${product.amazonLink}" target="_blank" rel="nofollow sponsored" class="btn-amazon">
                        <i class="fab fa-amazon"></i> Buy on Amazon
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Mobile Menu Toggle logic
document.addEventListener("DOMContentLoaded", () => {
    // Add mobile menu button if not present
    const navFlex = document.querySelector('.nav-flex');
    const navLinks = document.querySelector('.nav-links');
    
    if (navFlex && navLinks && !document.querySelector('.mobile-menu-btn')) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        navFlex.appendChild(mobileBtn);
        
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Set Active Nav Link
    const currentPage = window.location.pathname.split('/').pop().split('?')[0] || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});