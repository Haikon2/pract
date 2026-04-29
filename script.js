let container_1 = document.querySelector("#carousel_1"),
    photos_1 = container_1.querySelectorAll(".photo"),
    carousel_obj_1 = new carousel(photos_1),
    container_2 = document.querySelector("#carousel_2"),
    photos_2 = container_2.querySelectorAll(".photo"),
    carousel_obj_2 = new carousel(photos_2);

const dotsContainer1 = document.createElement('div');
dotsContainer1.className = 'dots';
container_1.appendChild(dotsContainer1);
for (let i = 0; i < photos_1.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === carousel_obj_1.show_index) dot.classList.add('active');
    dot.addEventListener('click', function () {
        carousel_obj_1.go_to(i);
        const ds = dotsContainer1.querySelectorAll('.dot');
        for (let j = 0; j < ds.length; j++) {
            ds[j].classList.toggle('active', j === carousel_obj_1.show_index);
        }
    });
    dotsContainer1.appendChild(dot);
}

container_1.querySelector('.prev').addEventListener('click', function () {
    carousel_obj_1.prev_photo();
    const ds = dotsContainer1.querySelectorAll('.dot');
    for (let j = 0; j < ds.length; j++) {
        ds[j].classList.toggle('active', j === carousel_obj_1.show_index);
    }
});
container_1.querySelector('.next').addEventListener('click', function () {
    carousel_obj_1.next_photo();
    const ds = dotsContainer1.querySelectorAll('.dot');
    for (let j = 0; j < ds.length; j++) {
        ds[j].classList.toggle('active', j === carousel_obj_1.show_index);
    }
});

const dotsContainer2 = document.createElement('div');
dotsContainer2.className = 'dots';
container_2.appendChild(dotsContainer2);
for (let i = 0; i < photos_2.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === carousel_obj_2.show_index) dot.classList.add('active');
    dot.addEventListener('click', function () {
        carousel_obj_2.go_to(i);
        const ds = dotsContainer2.querySelectorAll('.dot');
        for (let j = 0; j < ds.length; j++) {
            ds[j].classList.toggle('active', j === carousel_obj_2.show_index);
        }
    });
    dotsContainer2.appendChild(dot);
}

container_2.querySelector('.prev').addEventListener('click', function () {
    carousel_obj_2.prev_photo();
    const ds = dotsContainer2.querySelectorAll('.dot');
    for (let j = 0; j < ds.length; j++) {
        ds[j].classList.toggle('active', j === carousel_obj_2.show_index);
    }
});
container_2.querySelector('.next').addEventListener('click', function () {
    carousel_obj_2.next_photo();
    const ds = dotsContainer2.querySelectorAll('.dot');
    for (let j = 0; j < ds.length; j++) {
        ds[j].classList.toggle('active', j === carousel_obj_2.show_index);
    }
});