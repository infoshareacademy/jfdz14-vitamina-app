import React from "react";

import TeamMemberCard from "./TeamMemberCard.jsx";
import { MembersList } from "./TeamMemberList";
import "./TeamMemberCard.css"


const About = () => (
  <>
     <div>
       <h1>ABOUT US</h1>
     </div>

     <div className={"team-container"} style = {{ width: '90%', height: '500px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }} /*<< TEMP */ >
       <ul className="team-card">
          {
             MembersList.map((member) => (
               <li key={member.id} style={{listStyleType:'none'}}>
                 <TeamMemberCard card={member} />
               </li>
             ))
          }
       </ul>
     </div>
  </>
);

export default About;
