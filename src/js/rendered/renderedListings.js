import { loadUser } from "/src/js/storage/load.js";


export function renderedAll(listings) {
    const container = document.querySelector("#listing-container");

    container.innerHTML = "";

    for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];

    const img = listing.media.length

      container.innerHTML += `<a href="/singleListing.html?id=${listing.id}" class="text-dark card m-3 gap-1">
        <img src="${listing.media[0]}" onerror="this.src='/assets/placeholder.png';" class="card-img-top" alt="${listing.title}">
        <div class="card-body text-center">
            <h3>${listing.title}</h3>
            <p>${listing.amount}</p>
            <p>Ends in</p>
            <span class="btn btn-outline-primary text-dark">View</span>
        </div>
    </a>
      
      `
    

    }
}

