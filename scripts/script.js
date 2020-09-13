let arrayColors = [
    'red',
    'rgb(255, 95, 122)',
    'rgb(255, 0, 234)',
    'orange',
    'rgb(255, 206, 115)',
    'yellow',
    'rgb(224, 248, 4)',
    'green',
    'rgb(0, 255, 0)',
    'blue',
    'rgb(144, 144, 255)',
    'rgb(0, 197, 246)',
    'rgb(7, 226, 255)',
    'purple',
    'rgb(255, 0, 234)',
    'white',
    'white',
];


let numberOfStars = countNumberOfStars(window.innerWidth, window.innerHeight);

theMainBox.append(...starfall(numberOfStars));


window.onresize = resize;

function starfall(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        let boxForStar = document.createElement('div');
        boxForStar.className = `box #${i}`;

        let star = document.createElement('div');
        star.className = "for-star";

        let starBigPartG = document.createElement('div');
        starBigPartG.className = "for-big-part";
        starBigPartG.innerHTML = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100%" height="100%" viewBox="0 0 782.000000 782.000000"
        preserveAspectRatio="xMidYMid meet">
            <g class="big-part-g" transform="translate(0.000000,782.000000) scale(0.100000,-0.100000)"
            fill="${randomColor(1, 21)}" stroke="none">
                <path d="M3900 7809 c0 -6 -7 -82 -15 -168 -8 -86 -74 -788 -145 -1561 -169
                -1823 -160 -1728 -168 -1780 l-7 -45 -100 -13 c-55 -7 -658 -65 -1340 -127
                -1916 -177 -2119 -196 -2124 -201 -2 -2 -2 -6 0 -8 2 -3 299 -32 659 -65 360
                -34 873 -81 1140 -106 1081 -101 1767 -168 1776 -174 1 -1 5 -47 9 -103 7
                -103 49 -575 105 -1173 16 -176 55 -590 85 -920 103 -1111 126 -1360 131
                -1364 2 -2 6 -2 9 0 2 3 20 178 40 389 305 3302 292 3167 309 3173 30 12 295
                38 1706 167 1784 165 1844 170 1849 176 12 12 65 7 -1739 174 -1474 137 -1728
                161 -1755 166 -75 13 -73 12 -78 56 -5 53 -101 1069 -162 1723 -25 270 -72
                779 -105 1133 -33 353 -60 647 -60 652 0 6 -4 10 -10 10 -5 0 -10 -5 -10 -11z"/>
            </g>
        </svg>`

        let starSmallPartG = document.createElement('div');
        starSmallPartG.className = "for-small-part";
        starSmallPartG.innerHTML = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="50%" height="50%" viewBox="0 0 320.000000 320.000000"
        preserveAspectRatio="xMidYMid meet">
            <g class="small-part-g" transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
            fill="${randomColor(1, 21)}" stroke="none">
                <path d="M6 3188 c5 -8 248 -302 540 -654 414 -497 566 -672 684 -789 135
                -132 150 -151 134 -160 -42 -23 -327 -322 -440 -461 -66 -82 -300 -364 -518
                -627 -219 -264 -395 -481 -393 -484 3 -2 286 228 629 512 444 369 669 563 783
                675 114 112 166 157 179 155 11 -2 90 -73 175 -158 86 -85 248 -231 361 -324
                113 -93 392 -324 620 -514 228 -190 421 -349 429 -353 25 -16 5 9 -298 374
                -163 195 -396 477 -519 625 -127 154 -293 340 -385 433 l-161 163 166 167 c99
                100 256 276 389 437 123 149 355 429 517 623 161 195 291 356 289 359 -3 2
                -295 -236 -649 -530 -492 -409 -678 -571 -792 -686 -82 -83 -150 -151 -151
                -151 -1 0 -78 77 -171 171 -103 104 -261 248 -404 367 -557 465 -996 828
                -1009 836 -10 7 -11 5 -5 -6z"/>
            </g>
        </svg>`;

        let starRoundPartG = document.createElement('div');
        starRoundPartG.className = "for-round-part";
        starRoundPartG.innerHTML = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="10%" height="10%" viewBox="0 0 166.000000 164.000000"
        preserveAspectRatio="xMidYMid meet">
            <g class="round-part-g" transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)"
            fill="${randomColor(1, 21)}" stroke="none">
                <path d="M715 1624 c-82 -14 -159 -40 -250 -84 -356 -176 -530 -568 -420 -945
                62 -215 213 -393 420 -495 143 -70 203 -84 365 -84 162 0 221 14 365 84 294
                144 473 449 452 768 -15 222 -117 420 -294 572 -66 57 -229 141 -318 165 -60
                16 -263 28 -320 19z"/>
                </g>
        </svg>`;


        //${randomColor(1, 21)}
        // forAnimation(starRoundPartG);
        forAnimation(starSmallPartG.getElementsByTagName('g')[0], 5000, 10000);
        forAnimation(starBigPartG.getElementsByTagName('g')[0], 1, 5000);     
        
        //console.log(starSmallPartG.getElementsByTagName('g')[0]);

        star.prepend(starRoundPartG);
        star.prepend(starSmallPartG);
        star.prepend(starBigPartG);

        star.style.transform = `rotate(${random(0, 45)}deg)`;

        star.style.position = "absolute";
        star.style.top = `${random(10, 70)}px`;
        star.style.left = `${random(10, 70)}px`;

        boxForStar.prepend(star);

        result.push(boxForStar);
    }

    return result;
}

function resize() {

    theMainBox.innerHTML = '';

    numberOfStars = countNumberOfStars(window.innerWidth, window.innerHeight);

    theMainBox.append(...starfall(numberOfStars));
}


function countNumberOfStars(width, height) {

    let numberOfHorizontalBoxes =
        Math.ceil(height / 100);
    let numerOfVerticalBoxes =
        Math.ceil(width / 100);

    let buffer = numberOfHorizontalBoxes * numerOfVerticalBoxes;
    return buffer + (buffer * 0.3);
}

function forAnimation(elem, min, max) {
    return elem.animate([
        {
            opacity: 0,
            fill: randomColor(1, 21),
        },
        {
            opacity: 1,
            fill: randomColor(1, 21),
        },
        {
            opacity: 0,
            fill: randomColor(1, 21),
        },
    ], {
        delay: random(min, max),
        duration: 10000,
        iterations: Infinity,
    });
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(min, max) {
    return arrayColors[random(min, max)];
};


//theMainBox.append(...starfall(resize()));

/*
    let widthOfWindow = window.innerWidth;
    let heightOfWindow = window.innerHeight;

    let numberOfHorizontalBoxes =
        Math.ceil(heightOfWindow / 100);
    let numerOfVerticalBoxes =
        Math.ceil(widthOfWindow / 100);

    let buffer = numberOfHorizontalBoxes * numerOfVerticalBoxes;
    numberOfStars = buffer + (buffer * 0.2);
    */





