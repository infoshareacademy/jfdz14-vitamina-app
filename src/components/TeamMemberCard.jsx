import React from "react";
import { makeStyles } from "@material-ui/core";
import { MembersList } from "./TeamMemberList";

import "./TeamMemberCard.css";

const TeamMemberCard = ( {card} ) => (

  <div className="root" 
    style={{display: 'block', flexWrap: 'wrap', flexDirection: 'column', width: '200px', height: '285px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', alignContent: 'center', textAlign: 'center', border: 'solid 1px rgba(39, 39, 39, 0.2)'}}>
      <figure style={{width: '100%', height: '70%', overflow: 'hidden', margin: '0'}}>
        <img 
          src={card.img} 
          alt="Zdjęcie członka zespołu"

          style={{width: '100%', height: '100%', borderRadius: 'inherit'}}
        />
      </figure>
      <h2 style={{width: '100%', height: '10%', margin: '20px auto 0px', padding: '' }} >{card.name}</h2>
      <h4 style={{width: '100%', height: '10%', margin: '10px auto'}}>{card.title}</h4>
  </div>
)

export default TeamMemberCard;