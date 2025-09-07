// Example of product data for each category
const productData = {
    pulses: [
        { name: "Toor Dal", image: "https://cdn.pixabay.com/photo/2016/10/14/13/18/dal-1740205_1280.png" ,price:"₹45/250gm <br> <br>₹120/kg"},
        { name: "Moong Dal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWmwd1LvlNNMYrcypJOE-mJ-YOOrUJ-F4Zw&s", price: "₹ 99/kg" },
        { name: "Chana Dal", image: "https://plus.unsplash.com/premium_photo-1674025748666-9ac6c8a7ab3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhbmElMjBkYWx8ZW58MHx8MHx8fDA%3D", price: "₹140/kg" },
        { name: "Urad Dal", image: "https://5.imimg.com/data5/XE/LY/MU/SELLER-61630555/black-gram-urad-dal-whole-and-splits.png", price: "₹89/kg" },
        { name: "Masoor Dal", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9X0Pi5LrVFEwhCFQxVZbEyH4SfhClWkevcEuyPVCf7seck29UtvZvKK6xXBwX_tpUQeCKcpCr8H8FWPFLRhxhmh1NIc5HK4JG3VN4JQ", price: "₹149/kg" }
    ],
		spices: [
	  { name: "Turmeric (हल्दी)", image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVybWVyaWN8ZW58MHx8MHx8fDA%3D", price: "₹135/kg" },
	  { name: "Black Pepper (काली मिर्च)", image: "https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg?auto=compress&cs=tinysrgb&w=400", price: "₹510/kg" },
	  { name: "Small Cardamom (छोटी इलायची)", image: "https://via.placeholder.com/150", price: "₹400/kg" },
	  { name: "Cumin Seeds (जीरा)", image: "https://via.placeholder.com/150", price: "₹380/kg" },
	  { name: "Coriander Seeds (धनिया)", image: "https://via.placeholder.com/150", price: "₹125/kg" },
	  { name: "Mustard Seeds (सरसों)", image: "https://via.placeholder.com/150", price: "₹65/kg" },
	  { name: "Fennel Seeds (सौंफ)", image: "https://via.placeholder.com/150", price: "₹200/kg" },
	  { name: "Fenugreek Seeds (मेथी)", image: "https://via.placeholder.com/150", price: "₹100/kg" },
	  { name: "Ajwain (अजवाइन)", image: "https://via.placeholder.com/150", price: "₹150/kg" },
	  { name: "Dry Ginger (सूखा अदरक)", image: "https://via.placeholder.com/150", price: "₹165/kg" },
	  { name: "Garlic (लहसुन)", image: "https://via.placeholder.com/150", price: "₹95/kg" },
	  { name: "Cloves (लौंग)", image: "https://via.placeholder.com/150", price: "₹720/kg" },
	  { name: "Cinnamon (दालचीनी)", image: "https://via.placeholder.com/150", price: "₹450/kg" },
	  { name: "Bay Leaves (तेज पत्ता)", image: "https://via.placeholder.com/150", price: "₹160/kg" },
	  { name: "Nutmeg (जायफल)", image: "https://via.placeholder.com/150", price: "₹670/kg" },
	  { name: "Mace (जावित्री)", image: "https://via.placeholder.com/150", price: "₹1850/kg" },
	  { name: "Star Anise (चक्र फूल)", image: "https://via.placeholder.com/150", price: "₹850/kg" },
	  { name: "Black Cardamom (बड़ी इलायची)", image: "https://via.placeholder.com/150", price: "₹670/kg" },
	  { name: "Asafoetida (हींग)", image: "https://via.placeholder.com/150", price: "₹2800/kg" },
	  { name: "Black Cumin (काला जीरा)", image: "https://via.placeholder.com/150", price: "₹500/kg" },
	  { name: "White Pepper (सफेद मिर्च)", image: "https://via.placeholder.com/150", price: "₹1050/kg" },
	  { name: "Long Pepper (पीपली)", image: "https://via.placeholder.com/150", price: "₹700/kg" },
	  { name: "Saffron (केसर)", image: "https://via.placeholder.com/150", price: "₹180,000/kg" },
	  { name: "Poppy Seeds (खसखस)", image: "https://via.placeholder.com/150", price: "₹1400/kg" },
	  { name: "Tamarind (इमली)", image: "https://via.placeholder.com/150", price: "₹120/kg" },
	  { name: "Dry Mango Powder (अमचूर)", image: "https://via.placeholder.com/150", price: "₹300/kg" },
	  { name: "Kasuri Methi (कसूरी मेथी)", image: "https://via.placeholder.com/150", price: "₹400/kg" },
	  { name: "Dry Pomegranate Seeds (अनारदाना)", image: "https://via.placeholder.com/150", price: "₹450/kg" },
	  { name: "Dry Ginger Powder (सौंठ)", image: "https://via.placeholder.com/150", price: "₹290/kg" },
	  { name: "Black Salt (काला नमक)", image: "https://via.placeholder.com/150", price: "₹100/kg" },
	  { name: "White Sesame Seeds (सफेद तिल)", image: "https://via.placeholder.com/150", price: "₹180/kg" },
	  { name: "Black Sesame Seeds (काला तिल)", image: "https://via.placeholder.com/150", price: "₹250/kg" },
	  { name: "Nigella Seeds (कलौंजी)", image: "https://via.placeholder.com/150", price: "₹300/kg" },
	  { name: "Caraway Seeds (शाही जीरा)", image: "https://via.placeholder.com/150", price: "₹800/kg" },
	  { name: "Bishop’s Weed (अजवाइन)", image: "https://via.placeholder.com/150", price: "₹240/kg" },
	  { name: "Dill Seeds (सोया)", image: "https://via.placeholder.com/150", price: "₹180/kg" },
	  { name: "Fenugreek Leaves (मेथी के पत्ते)", image: "https://via.placeholder.com/150", price: "₹250/kg" },
	  { name: "Ginger Powder (अदरक पाउडर)", image: "https://via.placeholder.com/150", price: "₹270/kg" },
	  { name: "Cinnamon Powder (दालचीनी पाउडर)", image: "https://via.placeholder.com/150", price: "₹450/kg" },
	  { name: "Coriander Powder (धनिया पाउडर)", image: "https://via.placeholder.com/150", price: "₹140/kg" },
	  { name: "Cumin Powder (जीरा पाउडर)", image: "https://via.placeholder.com/150", price: "₹390/kg" },
	  { name: "Mustard Powder (सरसों पाउडर)", image: "https://via.placeholder.com/150", price: "₹140/kg" },
	  { name: "Fenugreek Powder (मेथी पाउडर)", image: "https://via.placeholder.com/150", price: "₹110/kg" },
	  { name: "Chili Powder (लाल मिर्च पाउडर)", image: "https://via.placeholder.com/150", price: "₹350/kg" },
	  { name: "Black Pepper Powder (काली मिर्च पाउडर)", image: "https://via.placeholder.com/150", price: "₹550/kg" },
	  { name: "Turmeric Powder (हल्दी पाउडर)", image: "https://via.placeholder.com/150", price: "₹140/kg" },
	  { name: "Asafoetida Powder (हींग पाउडर)", image: "https://via.placeholder.com/150", price: "₹3000/kg" },
	  { name: "Garlic Powder (लहसुन पाउडर)", image: "https://via.placeholder.com/150", price: "₹120/kg" },
	  { name: "Onion Powder (प्याज पाउडर)", image: "https://via.placeholder.com/150", price: "₹140/kg" }

    ],
    // Add other categories here with products similar to the above
};
// Function to handle quantity change and update price
document.querySelectorAll('.quantity').forEach(select => {
    select.addEventListener('change', (event) => {
        const selectedQuantity = event.target.value;
        const productId = event.target.dataset.productId;

        // Get the selected price based on the quantity
        const selectedOption = event.target.options[event.target.selectedIndex];
        const selectedPrice = selectedOption.dataset.price;

        // Update the price on the page
        document.getElementById(`price-${productId}`).innerText = `Price: $${selectedPrice}`;
    });
});


document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        loadProducts(category);
    });
});

// Load products for the first category (pulses) by default on page load
window.onload = function() {
    loadProducts('pulses');
}

function loadProducts(category) {
    const products = productData[category] || [];
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products

    if (products.length > 0) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Some description about the product.</p>
                <div class="price">${product.price}</div>
            `;
            productContainer.appendChild(productElement);
        });
    } else {
        productContainer.innerHTML = '<p>No products available in this category.</p>';
    }
}
