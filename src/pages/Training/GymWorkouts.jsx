import React from "react";

const GymWorkouts = () => {
  return (
<div className="text-white h-screen text-center grid grid-row-5 m-auto cursor-pointer" id="gymworkouts">
      <h1 className="text-2xl underline">Gym Workouts</h1>
      <div>
    <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://static.gohuskies.com/pdf/strength/11nsca_basketball.pdf">Total Package</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://sd33.bc.ca/sites/sd33.bc.ca/files/2019-09/Middle%20-%20Secondary%20-%20STRONGER%20TEAM%20-%20STRENGTH%20AND%20POWER%20-%20Contributed%20by%20Jake%20Mouritzen%20-%20GW%20Graham.pdf">Upper Body Workout</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://sd33.bc.ca/sites/sd33.bc.ca/files/2019-09/Middle%20-%20Secondary%20-%20STRONGER%20TEAM%20-%20STRENGTH%20AND%20POWER%20-%20Contributed%20by%20Jake%20Mouritzen%20-%20GW%20Graham.pdf">Lower Body Workout</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://d2y1pz2y630308.cloudfront.net/5301/documents/2014/6/alan_stein-_8_week_bodyweight_strength_program_for_basketball_players_1.pdf">Explosivness Workout</a>
      </div>
      <p className="text-xs">Please change your settings in your browser of choice if the PDF is blocked or not opening up</p>
    </div>
  )
};
export default GymWorkouts;
