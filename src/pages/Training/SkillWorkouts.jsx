import React from "react";

const SkillWorkouts = () => {
  return (
    <div className="text-white h-screen text-center grid grid-row-5 max-w-[800px] m-auto p-2 cursor-pointer" id="skillworkouts">
      <h1 className="text-2xl underline">Skill Workouts</h1>
      <div>
    <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn1.sportngin.com/attachments/document/bc55-2164682/_GUARD_Workout_.pdf">Total Package</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://s3.amazonaws.com/files.leagueathletics.com/Images/Club/23136/GTBB/lockdown-dribbling-workouts-BFC.pdf">Ball Handling Workout</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.lakehillprep.org/wp-content/uploads/2020/03/Individual-Basketball-Drills.pdf">Shooting Workout</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://static1.squarespace.com/static/5252ce95e4b0d22007d28df1/t/542f7466e4b07ce18f51e5bd/1412396134071/PG+Workout.pdf">Finishing Workout</a>
      </div>
      <div>
      <a className="font-headerFonts" target="_blank" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.breakthroughbasketball.com/pdfs/11defensedrills.pdf">Defensive Workout</a>
      </div>
      <p className="text-xs">Please change your settings in your browser of choice if the PDF is blocked or not opening up</p>
    </div>
  );
};

export default SkillWorkouts;
