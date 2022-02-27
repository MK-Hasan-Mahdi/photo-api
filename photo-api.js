const photoCont = document.getElementById('photo-details');
const userPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data))
}
userPhotos()
const displayPhotos = (photos) => {
    console.log(photos);
    const photoContainer = document.getElementById('display-photo');
    photos.forEach(photo => {
        // console.log(photo);
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'mb-3');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">${photo.id}</p>
            <button onclick="photoDetails(${'clicked'})" class="btn btn-primary">View Details</button>
        </div>
        </div>
        `;
        photoContainer.appendChild(div);
    })
}
function photoDetails(url) {
    console.log(url);
    // const img = document.createElement('img');
    // img.classList.add('card-img-top');
    // img.src = url;
    // photoCont.appendChild(img);
}


