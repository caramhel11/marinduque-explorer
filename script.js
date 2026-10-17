"use strict";

// Sample data for this student project. These descriptions are only examples.
const places = [
  {
    id: "poctoy",
    name: "Poctoy White Beach",
    location: "Torrijos, Marinduque",
    category: "Beach",
    icon: "🏖️",
    description: "A beach destination idea for visitors who want to enjoy the sea and spend time outdoors."
  },
  {
    id: "boac-cathedral",
    name: "Boac Cathedral",
    location: "Boac, Marinduque",
    category: "Heritage",
    icon: "⛪",
    description: "A heritage stop for people interested in local history and church architecture."
  },
  {
    id: "tres-reyes",
    name: "Tres Reyes Islands",
    location: "Off the coast of Gasan",
    category: "Island",
    icon: "🏝️",
    description: "An island destination to learn about when exploring the coast near Gasan."
  },
  {
    id: "bathala",
    name: "Bathala Cave Area",
    location: "Santa Cruz, Marinduque",
    category: "Nature",
    icon: "🌿",
    description: "A nature-themed place to research more before planning a visit."
  },
  {
    id: "moriones",
    name: "Moriones Festival",
    location: "Marinduque",
    category: "Culture",
    icon: "🎭",
    description: "A local Holy Week tradition known for its masks, costumes, and community activities."
  },
  {
    id: "gaspar",
    name: "Gaspar Island",
    location: "Gasan, Marinduque",
    category: "Island",
    icon: "🌊",
    description: "An island idea for visitors interested in Marinduque's coast and island scenery."
  }
];

const placeGrid = document.getElementById("place-grid");
const searchInput = document.getElementById("place-search");
const clearSearchButton = document.getElementById("clear-search");
const filterButtons = document.querySelectorAll(".filter-button");
const resultsCount = document.getElementById("results-count");
const noResults = document.getElementById("no-results");
const resetButton = document.getElementById("reset-discovery");
const searchStatus = document.getElementById("search-status");
const tripList = document.getElementById("trip-list");
const tripSummary = document.getElementById("trip-summary");
const tripCountLabel = document.getElementById("trip-count-label");
const navTripCount = document.getElementById("nav-trip-count");
const clearTripButton = document.getElementById("clear-trip");

let selectedCategory = "All";
let savedPlaceIds = [];

function getVisiblePlaces() {
  const searchText = searchInput.value.toLowerCase().trim();

  return places.filter(function (place) {
    const placeInfo = (place.name + " " + place.location + " " + place.category + " " + place.description).toLowerCase();
    const matchesSearch = placeInfo.includes(searchText);
    const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}

function showPlaces() {
  const visiblePlaces = getVisiblePlaces();
  resultsCount.textContent = visiblePlaces.length + (visiblePlaces.length === 1 ? " place" : " places");
  clearSearchButton.hidden = searchInput.value.trim() === "";
  noResults.hidden = visiblePlaces.length > 0;

  if (visiblePlaces.length === 0) {
    placeGrid.innerHTML = "";
  } else {
    placeGrid.innerHTML = visiblePlaces.map(function (place) {
      const isSaved = savedPlaceIds.includes(place.id);
      const buttonText = isSaved ? "✓ Added" : "+ Add to trip";
      const buttonLabel = isSaved
        ? "Remove " + place.name + " from my trip"
        : "Add " + place.name + " to my trip";

      return `
        <article class="place-card">
          <div class="place-icon" aria-hidden="true">${place.icon}</div>
          <p class="place-category">${place.category}</p>
          <h3>${place.name}</h3>
          <p class="place-location">${place.location}</p>
          <p class="place-description">${place.description}</p>
          <button class="save-button" type="button" data-place-id="${place.id}"
            aria-label="${buttonLabel}" aria-pressed="${isSaved}">${buttonText}</button>
        </article>`;
    }).join("");
  }

  searchStatus.textContent = "Showing " + resultsCount.textContent + ".";
}

function showTripList() {
  const savedPlaces = places.filter(function (place) {
    return savedPlaceIds.includes(place.id);
  });

  if (savedPlaces.length === 0) {
    tripList.innerHTML = `
      <div class="trip-empty" role="listitem">
        <p>Your saved places will appear here.</p>
        <a href="#discover">Browse places</a>
      </div>`;
  } else {
    tripList.innerHTML = savedPlaces.map(function (place) {
      return `
        <div class="trip-item" role="listitem">
          <div>
            <p class="trip-item-name">${place.name}</p>
            <p class="trip-item-location">${place.location}</p>
          </div>
          <button class="remove-button" type="button" data-remove-id="${place.id}"
            aria-label="Remove ${place.name} from my trip">Remove</button>
        </div>`;
    }).join("");
  }

  const count = savedPlaces.length;
  navTripCount.textContent = count;
  tripCountLabel.textContent = count + " saved";
  tripSummary.textContent = count === 0
    ? "No places saved yet."
    : count + (count === 1 ? " place saved." : " places saved.");
  clearTripButton.disabled = count === 0;
}

function updatePage() {
  showPlaces();
  showTripList();
}

searchInput.addEventListener("input", showPlaces);

clearSearchButton.addEventListener("click", function () {
  searchInput.value = "";
  showPlaces();
  searchInput.focus();
});

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedCategory = button.dataset.category;

    filterButtons.forEach(function (filterButton) {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", isActive);
    });

    showPlaces();
  });
});

placeGrid.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-place-id]");
  if (!button) return;

  const placeId = button.dataset.placeId;
  if (savedPlaceIds.includes(placeId)) {
    savedPlaceIds = savedPlaceIds.filter(function (id) {
      return id !== placeId;
    });
  } else {
    savedPlaceIds.push(placeId);
  }

  updatePage();
  const selectedPlace = places.find(function (place) {
    return place.id === placeId;
  });
  searchStatus.textContent = savedPlaceIds.includes(placeId)
    ? selectedPlace.name + " added to your trip list."
    : selectedPlace.name + " removed from your trip list.";
});

tripList.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-remove-id]");
  if (!button) return;

  const placeId = button.dataset.removeId;
  savedPlaceIds = savedPlaceIds.filter(function (id) {
    return id !== placeId;
  });
  updatePage();

  const removedPlace = places.find(function (place) {
    return place.id === placeId;
  });
  searchStatus.textContent = removedPlace.name + " removed from your trip list.";
});

clearTripButton.addEventListener("click", function () {
  savedPlaceIds = [];
  updatePage();
  searchStatus.textContent = "Your trip list has been cleared.";
});

resetButton.addEventListener("click", function () {
  searchInput.value = "";
  selectedCategory = "All";

  filterButtons.forEach(function (button) {
    const isAllButton = button.dataset.category === "All";
    button.classList.toggle("active", isAllButton);
    button.setAttribute("aria-pressed", isAllButton);
  });

  showPlaces();
  searchInput.focus();
});

updatePage();
