import React from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from "react-router-dom";





export default class ShareFuneralPlan extends React.Component {
  render() {
    return (
      <div>
        <h1>Do you know who you want to share your final wish with??</h1>

    
    
        <Link to="/share-funeral-plans/add-contact"><PersonAddIcon /></Link>
     
      </div>
    )
  }


}
