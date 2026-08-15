/* =========================================
   WALLPAPER DATA
========================================= */

const wallpapers = [

    {
        id: 1,
        title: "Midnight Lamborghini",
        category: "Cars",
        resolution: "2160 × 3840",
        popularity: 98,
        image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 2,
        title: "Mountain Sunrise",
        category: "Nature",
        resolution: "2160 × 3840",
        popularity: 95,
        image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 3,
        title: "Dark Architecture",
        category: "Dark",
        resolution: "2160 × 3840",
        popularity: 93,
        image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 4,
        title: "Blue Ocean",
        category: "4K",
        resolution: "2160 × 3840",
        popularity: 91,
        image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 5,
        title: "Luxury Interior",
        category: "Luxury",
        resolution: "2160 × 3840",
        popularity: 90,
        image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 6,
        title: "Galaxy Night",
        category: "Space",
        resolution: "2160 × 3840",
        popularity: 97,
        image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 7,
        title: "Minimal Mountain",
        category: "Minimal",
        resolution: "2160 × 3840",
        popularity: 87,
        image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 8,
        title: "Green Forest",
        category: "Nature",
        resolution: "2160 × 3840",
        popularity: 88,
        image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 9,
        title: "Black Sports Car",
        category: "AMOLED",
        resolution: "2160 × 3840",
        popularity: 96,
        image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 10,
        title: "City Lights",
        category: "4K",
        resolution: "2160 × 3840",
        popularity: 85,
        image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 11,
        title: "Desert Road",
        category: "Minimal",
        resolution: "2160 × 3840",
        popularity: 82,
        image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 12,
        title: "Golden Luxury",
        category: "Luxury",
        resolution: "2160 × 3840",
        popularity: 94,
        image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 13,
        title: "Deep Space",
        category: "AMOLED",
        resolution: "2160 × 3840",
        popularity: 89,
        image:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 14,
        title: "Ocean Waves",
        category: "4K",
        resolution: "2160 × 3840",
        popularity: 86,
        image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 15,
        title: "Dark Forest",
        category: "Dark",
        resolution: "2160 × 3840",
        popularity: 92,
        image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 16,
        title: "Modern Building",
        category: "Minimal",
        resolution: "2160 × 3840",
        popularity: 80,
        image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 17,
        title: "Luxury Car",
        category: "Cars",
        resolution: "2160 × 3840",
        popularity: 99,
        image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 18,
        title: "Night Sky",
        category: "Space",
        resolution: "2160 × 3840",
        popularity: 84,
        image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=90"
    }

];


/* =========================================
   VARIABLES
========================================= */

const grid =
    document.getElementById("wallpaperGrid");

const searchInput =
    document.getElementById("searchInput");

const heroSearch =
    document.getElementById("heroSearch");

const clearSearch =
    document.getElementById("clearSearch");

const noResults =
    document.getElementById("noResults");

const loadMore =
    document.getElementById("loadMore");

const categoryButtons =
    document.querySelectorAll(".category");

const sortButtons =
    document.querySelectorAll(".sort-btn");

const themeBtn =
    document.getElementById("themeBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const menuBtn =
    document.getElementById("menuBtn");

const modal =
    document.getElementById("wallpaperModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalResolution =
    document.getElementById("modalResolution");

const modalDownload =
    document.getElementById("modalDownload");

const modalLike =
    document.getElementById("modalLike");

const toast =
    document.getElementById("toast");


/* =========================================
   STATE
========================================= */

let selectedCategory = "All";

let searchTerm = "";

let currentSort = "popular";

let visibleCount = 10;

let favorites =
    JSON.parse(
        localStorage.getItem("wallpaperFavorites")
    ) || [];


/* =========================================
   FILTER WALLPAPERS
========================================= */

function getFilteredWallpapers() {

    let result = [...wallpapers];


    /* CATEGORY */

    if (selectedCategory !== "All") {

        result =
            result.filter(
                wallpaper =>
                    wallpaper.category ===
                    selectedCategory
            );

    }


    /* SEARCH */

    if (searchTerm.trim() !== "") {

        const search =
            searchTerm
                .toLowerCase()
                .trim();

        result =
            result.filter(wallpaper =>

                wallpaper.title
                    .toLowerCase()
                    .includes(search)

                ||

                wallpaper.category
                    .toLowerCase()
                    .includes(search)

            );

    }


    /* SORT */

    if (currentSort === "popular") {

        result.sort(
            (a, b) =>
                b.popularity -
                a.popularity
        );

    }

    else {

        result.sort(
            (a, b) =>
                b.id -
                a.id
        );

    }


    return result;
}


/* =========================================
   RENDER WALLPAPERS
========================================= */

function renderWallpapers() {

    const filtered =
        getFilteredWallpapers();


    const visible =
        filtered.slice(
            0,
            visibleCount
        );


    grid.innerHTML = "";


    if (filtered.length === 0) {

        noResults.classList.add("show");

        loadMore.style.display =
            "none";

        return;

    }


    noResults.classList.remove("show");


    visible.forEach(
        wallpaper => {

            const card =
                createWallpaperCard(
                    wallpaper
                );

            grid.appendChild(card);

        }
    );


    /* LOAD MORE */

    if (visible.length < filtered.length) {

        loadMore.style.display =
            "block";

    }

    else {

        loadMore.style.display =
            "none";

    }

}


/* =========================================
   CREATE WALLPAPER CARD
========================================= */

function createWallpaperCard(wallpaper) {

    const card =
        document.createElement("article");

    card.className =
        "wallpaper-card";


    const isLiked =
        favorites.includes(
            wallpaper.id
        );


    card.innerHTML = `

        <img
            src="${wallpaper.image}"
            alt="${wallpaper.title}"
            loading="lazy"
        >

        <div class="card-overlay">

            <div class="card-top">

                <button
                    class="like-btn ${
                        isLiked
                            ? "liked"
                            : ""
                    }"
                    aria-label="Favorite">

                    ${isLiked ? "♥" : "♡"}

                </button>

            </div>


            <div class="card-bottom">

                <div>

                    <div class="card-title">
                        ${wallpaper.title}
                    </div>

                    <div class="card-category">
                        ${wallpaper.category}
                    </div>

                </div>


                <button
                    class="card-download">

                    ↓

                </button>

            </div>

        </div>

    `;


    /* OPEN MODAL */

    card.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    ".like-btn"
                )
                ||
                event.target.closest(
                    ".card-download"
                )
            ) {

                return;

            }


            openModal(
                wallpaper
            );

        }
    );


    /* LIKE */

    const likeButton =
        card.querySelector(
            ".like-btn"
        );


    likeButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavorite(
                wallpaper.id
            );

        }
    );


    /* DOWNLOAD */

    const downloadButton =
        card.querySelector(
            ".card-download"
        );


    downloadButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            downloadWallpaper(
                wallpaper
            );

        }
    );


    return card;
}


/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

        showToast(
            "Removed from favorites"
        );

    }

    else {

        favorites.push(id);

        showToast(
            "Added to favorites ❤️"
        );

    }


    localStorage.setItem(
        "wallpaperFavorites",
        JSON.stringify(
            favorites
        )
    );


    renderWallpapers();

}


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                categoryButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                visibleCount = 10;


                renderWallpapers();


                document
                    .getElementById(
                        "explore"
                    )
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }
);


/* =========================================
   SEARCH
========================================= */

function performSearch(value) {

    searchTerm = value;

    visibleCount = 10;

    clearSearch.style.display =
        value ? "block" : "none";

    renderWallpapers();

}


/* NAV SEARCH */

searchInput.addEventListener(
    "input",
    event => {

        performSearch(
            event.target.value
        );

    }
);


/* HERO SEARCH */

heroSearch.addEventListener(
    "input",
    event => {

        searchInput.value =
            event.target.value;

        performSearch(
            event.target.value
        );

    }
);


/* CLEAR SEARCH */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        heroSearch.value = "";

        performSearch("");

    }
);


/* =========================================
   SORT
========================================= */

sortButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                sortButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                currentSort =
                    button.dataset.sort;


                renderWallpapers();

            }
        );

    }
);


/* =========================================
   LOAD MORE
========================================= */

loadMore.addEventListener(
    "click",
    () => {

        visibleCount += 6;

        renderWallpapers();

    }
);


/* =========================================
   MODAL
========================================= */

let currentModalWallpaper = null;


function openModal(wallpaper) {

    currentModalWallpaper =
        wallpaper;


    modalImage.src =
        wallpaper.image;

    modalImage.alt =
        wallpaper.title;

    modalTitle.textContent =
        wallpaper.title;

    modalCategory.textContent =
        wallpaper.category;

    modalResolution.textContent =
        wallpaper.resolution;


    modalDownload.href =
        wallpaper.image;


    updateModalLike();


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================
   MODAL LIKE
========================================= */

function updateModalLike() {

    if (
        !currentModalWallpaper
    ) {

        return;

    }


    const liked =
        favorites.includes(
            currentModalWallpaper.id
        );


    modalLike.textContent =
        liked ? "♥" : "♡";

}


modalLike.addEventListener(
    "click",
    () => {

        if (
            !currentModalWallpaper
        ) {

            return;

        }


        toggleFavorite(
            currentModalWallpaper.id
        );


        updateModalLike();

    }
);


/* =========================================
   DOWNLOAD
========================================= */

function downloadWallpaper(
    wallpaper
) {

    /*
       For this prototype the image
       opens/downloads using its URL.

       Later, the backend will generate
       proper downloadable files.
    */

    const link =
        document.createElement("a");

    link.href =
        wallpaper.image;

    link.target =
        "_blank";

    link.download =
        `${wallpaper.title}.jpg`;

    document.body.appendChild(
        link
    );

    link.click();

    document.body.removeChild(
        link
    );


    showToast(
        "Wallpaper download started ↓"
    );

}


/* =========================================
   DARK MODE
========================================= */

const savedTheme =
    localStorage.getItem(
        "wallpaperTheme"
    );


if (
    savedTheme === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent =
        "☀️";

}


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark ? "☀️" : "🌙";


        localStorage.setItem(
            "wallpaperTheme",
            dark
                ? "dark"
                : "light"
        );

    }
);


/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "show"
        );

    }
);


/* =========================================
   FAVORITE NAV BUTTON
========================================= */

document
    .getElementById("favoriteBtn")
    .addEventListener(
        "click",
        () => {

            const favoriteWallpapers =
                wallpapers.filter(
                    wallpaper =>
                        favorites.includes(
                            wallpaper.id
                        )
                );


            if (
                favoriteWallpapers.length === 0
            ) {

                showToast(
                    "You haven't saved any wallpapers yet."
                );

                return;

            }


            grid.innerHTML = "";


            favoriteWallpapers.forEach(
                wallpaper => {

                    grid.appendChild(
                        createWallpaperCard(
                            wallpaper
                        )
                    );

                }
            );


            document
                .getElementById(
                    "explore"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   VIEW ALL CATEGORIES
========================================= */

document
    .getElementById(
        "viewAllCategories"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "categories"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   NEWSLETTER
========================================= */

document
    .getElementById(
        "newsletterForm"
    )
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            showToast(
                "Thanks for subscribing! 🎉"
            );


            event.target.reset();

        }
    );


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================
   INITIAL LOAD
========================================= */

renderWallpapers();