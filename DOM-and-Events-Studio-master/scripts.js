// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const rocket = document.getElementById('rocket');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = this.document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener('click', function() {
       let shouldTakeoff = confirm("CONFIRM TAKEOFF?");

       if (shouldTakeoff) {
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerHTML = 10000;
        rocketPosY = 10;
        rocket.style.marginBottom = rocketPosY + 'px';
       }

    });

    landButton.addEventListener('click', function() {
        alert("LANDING");
         flightStatus.innerHTML = 'Shuttle has landed';
         shuttleBackground.style.backgroundColor = 'green';
         spaceShuttleHeight.innerHTML = 0;
         resetRocket();
     });

    abortButton.addEventListener('click', function() {
        let shouldAbort = confirm("ABORT MISSION?");
 
        if (shouldAbort) {
         flightStatus.innerHTML = 'MISSION ABORTED';
         shuttleBackground.style.backgroundColor = 'green';
         spaceShuttleHeight.innerHTML = 0;
         resetRocket();
        }
 
     });

     this.document.addEventListener('click', function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === 'left' && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'right' && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
         rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'up' && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === 'down' && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
    }
     })

     function resetRocket() {
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
      }

});
