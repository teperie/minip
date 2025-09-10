document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animalGrid = document.getElementById('animalGrid');
    const breedSelect = document.getElementById('breed');
    const searchInput = document.getElementById('search');
    const genderButtons = document.querySelectorAll('.gender-toggle .toggle-btn');
    const filterButtons = document.querySelectorAll('.btn-filter');
    const noAnimalsMessage = document.querySelector('.no-animals');

    // Sample data - in a real app, this would come from an API
    const animals = [
        {
            id: 1,
            name: '뽀미',
            breed: '말티즈',
            age: '1살 2개월',
            gender: 'female',
            status: 'available',
            image: 'https://via.placeholder.com/220x160/FFE4E1/000000?text=뽀미',
        },
        {
            id: 2,
            name: '초코',
            breed: '푸들',
            age: '2살',
            gender: 'male',
            status: 'available',
            image: 'https://via.placeholder.com/220x160/D8BFD8/000000?text=초코',
        },
        {
            id: 3,
            name: '나비',
            breed: '코리안 숏헤어',
            age: '8개월',
            gender: 'female',
            status: 'protected',
            image: 'https://via.placeholder.com/220x160/E6E6FA/000000?text=나비',
        },
        {
            id: 4,
            name: '모모',
            breed: '시츄',
            age: '3살 5개월',
            gender: 'male',
            status: 'available',
            image: 'https://via.placeholder.com/220x160/FFF0F5/000000?text=모모',
        },
    ];

    // Initialize the page
    function init() {
        renderAnimals(animals);
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Gender toggle buttons
        genderButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update button states
                genderButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');
                
                // Apply filters
                filterAnimals();
            });
        });

        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update button states
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Apply filters
                filterAnimals();
            });
        });

        // Search input
        searchInput.addEventListener('input', debounce(filterAnimals, 300));

        // Breed select
        breedSelect.addEventListener('change', filterAnimals);
    }

    // Filter animals based on selected filters
    function filterAnimals() {
        const selectedGender = document.querySelector('.gender-toggle .toggle-btn.active')?.dataset.gender;
        const selectedFilter = document.querySelector('.btn-filter.active')?.dataset.filter;
        const searchTerm = searchInput.value.toLowerCase();
        const selectedBreed = breedSelect.value;

        const filtered = animals.filter(animal => {
            // Filter by gender
            if (selectedGender && selectedGender !== 'all' && animal.gender !== selectedGender) {
                return false;
            }

            // Filter by status
            if (selectedFilter === 'available' && animal.status !== 'available') {
                return false;
            } else if (selectedFilter === 'recent') {
                // In a real app, you would filter by date added
                // This is just a placeholder
                return true;
            }

            // Filter by search term
            if (searchTerm && !animal.name.toLowerCase().includes(searchTerm)) {
                return false;
            }

            // Filter by breed
            if (selectedBreed && animal.breed !== selectedBreed) {
                return false;
            }

            return true;
        });

        renderAnimals(filtered);
    }

    // Render animals to the grid
    function renderAnimals(animalsToRender) {
        if (animalsToRender.length === 0) {
            noAnimalsMessage.hidden = false;
            animalGrid.innerHTML = '';
            animalGrid.appendChild(noAnimalsMessage);
            return;
        }

        noAnimalsMessage.hidden = true;
        
        const fragment = document.createDocumentFragment();
        
        animalsToRender.forEach(animal => {
            const card = createAnimalCard(animal);
            fragment.appendChild(card);
        });

        animalGrid.innerHTML = '';
        animalGrid.appendChild(fragment);
    }

    // Create an animal card element
    function createAnimalCard(animal) {
        const card = document.createElement('article');
        card.className = 'animal-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('aria-label', `${animal.name} ${animal.breed} 정보`);
        
        const statusClass = animal.status === 'available' ? 'status-available' : 'status-protected';
        const statusText = animal.status === 'available' ? '입양 가능' : '보호 중';
        
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name} 사진" class="animal-image">
            <div class="animal-info">
                <h3 class="animal-name">${animal.name}</h3>
                <div class="animal-details">
                    <span>${animal.age}</span>
                    <span>${animal.breed}</span>
                </div>
                <span class="animal-status ${statusClass}">${statusText}</span>
            </div>
        `;
        
        // Add click event to navigate to detail page
        card.addEventListener('click', () => {
            // In a real app, navigate to the animal detail page
            console.log(`Navigating to animal ${animal.id}`);
            // window.location.href = `/animals/${animal.id}`;
        });
        
        return card;
    }

    // Debounce function to limit how often a function is called
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize the application
    init();
});
