// import React from "react";
import "../Styles/Github.css";
import GitHubCalendar from "react-github-calendar";
export default function Github() {
  return (
    <>
      <section id="github">
        <div id="githubMainDiv">
          <h1 className="githubHeading">Github Stats</h1>
          <div className="githubCalendarDiv">
          <GitHubCalendar
              className="react-activity-calendar"
              username="Rahulkrsharma2004"
            />
          </div>
          <div className="githubMainContainer">
            <div className="githubCardDiv">
              <img
                className="githubCard"
                width="100%"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=Rahulkrsharma2004&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=#32de84"
              />
            </div>
            <div className="githubCardDiv">
              <img
                className="githubCard"
                width="100%"
                src="https://github-readme-stats.vercel.app/api?username=Rahulkrsharma2004&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=#32de84"
              />
            </div>
            <div className="githubCardDiv">
            <img
              className="githubCard"
              width="100%"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Rahulkrsharma2004&theme=transparent&hide_border=true&title_color=white&text_color=#32de84&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
              alt=""
            />
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
