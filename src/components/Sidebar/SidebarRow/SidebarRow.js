import React, {useContext} from "react";
import "./SidebarRow.css";
import SidebarContext from '../../../Context/sidebarContext';
const SidebarRow = (props) => {
const sidebarContext = useContext(SidebarContext);

  const classes=['sidebarRow'];
  if(props.selected){
    classes.push('selected');
  }
  if(!sidebarContext.sidebarOpen){
    classes.push('min');
  }
  
  return (
    <div className={classes.join(' ')}>
      <props.Icon className="sidebarRow__icon" />
      {props.title ? <h2 className="sidebarRow__title">{props.title}</h2> : ""}
    </div>
  );
};

export default SidebarRow;
