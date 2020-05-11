const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
}

//console.log(target);
let clicks = 0;
let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

$map.addEventListener('click', (e) => {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHit(distance);

    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 30){
        alert(`Encontraste el tesoro en ${clicks} clicks !!!`);
        location.reload();
    }
});