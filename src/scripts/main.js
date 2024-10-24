AOS.init();

const partyDate = new Date("Oct 10, 2025 20:00");
const partyTimeStamp = partyDate.getTime();

const countTime = setInterval(function() {
    const now = new Date();
    const nowStamp = now.getTime();
    const distaceToparty = partyTimeStamp - nowStamp;
    

    const daysToParty = Math.floor(distaceToparty / (1000 * 60 * 60 * 24));
    const hoursToParty = Math.floor((distaceToparty % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesToParty = Math.floor((distaceToparty % (1000 * 60 * 60)) / (1000 * 60));
    const secondsToParty = Math.floor((distaceToparty % (1000 * 60)) / 1000);
   
    document.getElementById('contador').innerHTML = `${daysToParty}d ${hoursToParty}h ${minutesToParty}m ${secondsToParty}s`;

    if (distaceToparty < 0) {
        clearInterval(countTime);
        document.getElementById('contador').innerHTML = `Espere a próxima!`;
    }

}, 1000)

