import React from "react";
import { makeStyles } from "@material-ui/core";
import { MembersList } from "./TeamMemberList";

import "./TeamMemberCard.css";

const TeamMemberCard = ( {card} ) => (

  <div className="root" 
    style={{display: 'block', flexWrap: 'wrap', flexDirection: 'column', width: '150px', height: '200px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', alignContent: 'center', textAlign: 'center', border: 'solid 1px rgba(39, 39, 39, 0.2)'}}>
      <img 
        src={card.img} 
        alt="Zdjęcie członka zespołu"

        style={{width: '100%', height: '50%', borderRadius: 'inherit', objecFit: 'cover', boxShadow: '0px 4px 10px rgba(39, 39, 39, 0.2)'}}
      />
      <h3 style={{width: '100%', height: '20%', margin: '10px auto', padding: '' }} >{card.name}</h3>

      <h4 style={{width: '100%', height: '20%', margin: '10px auto'}}>{card.title}</h4>
  </div>
)

// crop pictures, figure out layout




export default TeamMemberCard;