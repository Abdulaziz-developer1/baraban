const prize = document.getElementById('prize');
const wheel = document.getElementById('wheel');
const rotate = document.getElementById('rotate');

rotate.addEventListener('click', function() {
    let prizeRotate = Math.random().toFixed(1);
    prizeRotate = parseFloat(prizeRotate); // Convert to number
    
    if (prizeRotate === 0.0) {
        wheel.style.cssText = 'transform: rotate(720deg);';
        prize.innerText = 'iPhone 15';
    } else if (prizeRotate === 0.1) {
        wheel.style.cssText = 'transform: rotate(376deg);';
        prize.innerText = 'Yutqazdingiz';
    } else if (prizeRotate === 0.2) {
        wheel.style.cssText = 'transform: rotate(1472deg);';
        prize.innerText = 'Televizor';
    } else if (prizeRotate === 0.3) {
        wheel.style.cssText = 'transform: rotate(408deg);';
        prize.innerText = 'Yutqazdingiz';
    } else if (prizeRotate === 0.4) {
        wheel.style.cssText = 'transform: rotate(510deg);';
        prize.innerText = '5 million so"m';
    } else if (prizeRotate === 0.5) {
        wheel.style.cssText = 'transform: rotate(1696deg);';
        prize.innerText = 'Yutqazdingiz';
    } else if (prizeRotate === 0.6) {
        wheel.style.cssText = 'transform: rotate(1892deg);';
        prize.innerText = 'Sayohat';
    } else if (prizeRotate === 0.7) {
        wheel.style.cssText = 'transform: rotate(2088deg);';
        prize.innerText = 'Yutqazdingiz';
    } else if (prizeRotate === 0.8) {
        wheel.style.cssText = 'transform: rotate(2284deg);';
        prize.innerText = '10 gram tilla';
    } else if (prizeRotate === 0.9) {
        wheel.style.cssText = 'transform: rotate(2480deg);';
        prize.innerText = 'Yutqazdingiz';
    } else if (prizeRotate === 1.0) {
        wheel.style.cssText = 'transform: rotate(2676deg);';
        prize.innerText = 'Samsung S24';
    }
});