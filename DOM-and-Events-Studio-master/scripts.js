// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = this.document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener('click', function() {
       let shouldTakeoff = confirm("CONFIRM TAKEOFF?");

       if (shouldTakeoff) {
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerHTML = 10000;
       }

    });

    landButton.addEventListener('click', function() {
        alert("LANDING");
         flightStatus.innerHTML = 'Shuttle has landed';
         shuttleBackground.style.backgroundColor = 'green';
         spaceShuttleHeight.innerHTML = 0;
     });

    abortButton.addEventListener('click', function() {
        let shouldAbort = confirm("ABORT MISSION?");
 
        if (shouldAbort) {
         flightStatus.innerHTML = 'MISSION ABORTED';
         shuttleBackground.style.backgroundColor = 'green';
         spaceShuttleHeight.innerHTML = 0;
        }
 
     });

});
