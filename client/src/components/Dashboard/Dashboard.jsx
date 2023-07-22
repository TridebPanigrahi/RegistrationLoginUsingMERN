import React from 'react'
import './Dashboard.css'
// import {useLocation} from 'react-router-dom'

const Dashboard = () => {

    // const location = useLocation()

  return (
    <div>
        <div className="container dashboardcontainer">
            <div className="dashdisplay">
                <div className="leftside">
                    <h3>Logo.</h3>
                    <ul>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div className="rightside">
                    {/* <div>Hello {location.state.id} and Welcome to the Dashboard</div> */}
                    <div className="allcards">
                        <div className="cards">

                        </div>
                        <div className="cards">
                            
                        </div>
                        <div className="cards">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard