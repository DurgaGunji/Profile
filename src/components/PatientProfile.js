import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
//import Avatar from "@mui/material/Avatar";
import PrintIcon from "@mui/icons-material/Print";

import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import BloodtypeIcon from "@mui/icons-material/Bloodtype"; // For Blood Pressure
import FavoriteIcon from "@mui/icons-material/Favorite"; // For Pulse
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // For Heart Rate
import ThermostatIcon from "@mui/icons-material/Thermostat"; // For Temperature
import WeightIcon from "@mui/icons-material/FitnessCenter"; // For Weight
import "./PatientProfile.css";
import Prescription from "./Prescription";
//import Avatar from "../assets/avatar.jpeg";
import avatar from '../assets/avatar.jpeg';



const PatientProfile = () => {
  const [selectedDate, setSelectedDate] = useState("25 May 2024");
  const dates = ["12 Jun 2024", "25 May 2024", "15 May 2024"];

  const [activeTab, setActiveTab] = useState(0);

  // List of tab names
  const tabs = ["Appointment History", "Treatment History", "Timeline"];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }} className="profile-container">
      {/* Tabs Section */}
      <Box className="tabs-container" sx={{ padding: 2, display: 'flex', justifyContent: 'flex-start' }}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => setActiveTab(index)} // Set active tab when clicked
          sx={{
            color: activeTab === index ? 'blue' : 'inherit',  // Active tab text color
            borderBottom: activeTab === index ? '2px solid blue' : 'none',  // Active tab underline
            marginRight: 2,  // Add spacing between tabs
            textTransform: 'none',  // Prevents uppercasing of text
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>


      {/* Patient Details */}
      <Box className="patient-details" sx={{ display: "flex", alignItems: "center", padding: 2 }}>
       <Avatar
  className="patient-avatar"
  src={avatar}
  // alt="Patient Avatar"
/>
<Box className="patient-info" sx={{ marginLeft: 2 }}>
          {/* Patient ID */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
            <Typography variant="body2" className="info-label">
              Patient ID
            </Typography>
            <Typography variant="body1" className="info-value">
              #577478
            </Typography>
          </Box>
          </Box>

          {/* Patient Name */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
            <Typography variant="body2" className="info-label">
              Name
            </Typography>
            <Typography variant="h6" className="info-value">
              Jabvo Jones
            </Typography>
          </Box>
          </Box>

          {/* Additional Info */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
            <Typography variant="body2" className="info-label">
              Age
            </Typography>
            <Typography variant="body1" className="info-value">
              25 
            </Typography>
          </Box>
          </Box>
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
            <Typography variant="body2" className="info-label">
              Contact
            </Typography>
            <Typography variant="body1" className="info-value">
              +91 7788994561
            </Typography>
          </Box>
          </Box>
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: 'px solid aliceblue', paddingRight: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
            <Typography variant="body2" className="info-label">
              Email
            </Typography>
            <Typography variant="body1" className="info-value">
              debra.holt@example.com
            </Typography>
          </Box>
          </Box>
          <Box className="info-row">
            <Typography variant="body2" className="info-label">
              Address
            </Typography>
            <Typography variant="body1" className="info-value">
              321 Central Street.Mexico City 01150,
            </Typography>
            <Typography variant="body1" className="info-value">
              Mexico
            </Typography>
          </Box>
        </Box>
        {/* Edit Button */}
        <Button
  variant="outlined"
  color="primary"
  
  className="edit-button"
  sx={{ marginLeft: 2, color: "white" ,backgroundColor:"#ddd",borderRadius:"10px"}}
  startIcon={<EditIcon />} // Add the icon here
>
  Edit
</Button>
      </Box>

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
  {/* Left Side Dates */}
  <Grid item xs={12} md={3}>
          <Paper
            className="dates-container"
            elevation={3}
            sx={{ height: '400px', overflowY: 'auto' }} // Set a fixed height and enable scrolling if needed
          >
            <Typography variant="h6" className="dates-header">
              {/* Date Header */}
            </Typography>
            {dates.map((date, index) => (
              <Paper
  key={index}
  onClick={() => setSelectedDate(date)}
  elevation={selectedDate === date ? 5 : 1}
  sx={{
    position: 'relative', // For pseudo-element positioning
    backgroundColor: selectedDate === date ? 'blue' : 'transparent', // Blue for selected box, transparent otherwise
    color: selectedDate === date ? 'white' : 'blue', // White text for selected box, inherit color otherwise
    padding: 2, // Padding for better spacing
    marginBottom: 5, // Space between boxes
    cursor: 'pointer', // Pointer cursor to indicate clickability
    width: '100px', // Box width
    height: '25px', // Box height
    display: 'flex', // Flex layout for alignment
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
    borderRadius: '8px', // Rounded corners
    marginLeft: '25px',
    backgroundColor: selectedDate !== date ? '#f6f8fa' : 'blue',
   outline: selectedDate === date ? '2px dotted blue' : 'none', // Dotted outline for selected box
    outlineOffset: selectedDate === date ? '5px' : '0px', // Add gap between box and dotted border
    // '&:hover': {
    //   backgroundColor: selectedDate !== date ? 'lightblue' : 'blue', // Highlight on hover for non-selected boxes
    // },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%', // Start from the bottom of the box
      left: '50%', // Center the line horizontally
      transform: 'translateX(-50%)',
      width: '2px',
      height: '20px', // Length of the line
      background: 'transparent',
      borderLeft: '2px dotted blue', // Dotted line
      display: index === dates.length - 1 ? 'none' : 'block', // Hide for the last box
    },
  }}
>
  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{date}</Typography>
</Paper>



            ))}
          </Paper>
        </Grid>


 {/* </Grid> */}


        {/* Right Side Details */}
        <Grid item xs={12} md={9}>
          <Box className="details-container" sx={{ padding: 2 }}>
            <Typography variant="h6" className="selected-date">
              {/* Selected Date: {selectedDate} */}
            </Typography>
            <Grid container spacing={3}>
              {/* Left Section */}
              <Grid item xs={12} md={6}>
                {/* Date, Time Slot, Doctor in One Row */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", marginRight: 3 }}>
                    <Typography className="section-title">Date</Typography>
                    <Typography className="section-content">{selectedDate}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", marginRight: 3 }}>
                    <Typography className="section-title">Time Slot</Typography>
                    <Typography className="section-content">11:15 AM - 11:30 AM</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography className="section-title">Doctor</Typography>
                    <Typography className="section-content">Neehar Potturi</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Right Section with Action Buttons */}
             
              <Grid item xs={12} md={6}>
                <Box className="action-buttons" sx={{ display: "flex", alignItems: "center" }}>
                  <Box m={1} p={1} border={1} borderColor="  blue"
                  display="inline-block">
                    <IconButton color="primary">
                      <PrintIcon />
                    </IconButton>
                  </Box>
                  <Box m={1} p={1} border={1} borderColor="  blue" display="inline-block">
                    <IconButton color="primary">
                      <DownloadIcon />
                    </IconButton>
                  </Box>
                  <Box m={1} p={1} border={1} borderColor="  blue" display="inline-block">
                    <IconButton color="primary">
                      <ShareIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
           
          </Box>

          <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
  <Typography className="section-title">Vital Signs</Typography>
  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 2 }}>
    
    {/* Blood Pressure */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  {/* Flex container for Blood Pressure and icon */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <BloodtypeIcon sx={{ marginRight: 1, color: "gold", fontSize: "24px" }} />
    <Typography variant="body1" className="section-content">
      Blood Pressure
    </Typography>
  </Box>
  
  {/* "120/80" text displayed directly below "Blood Pressure" */}
  <Typography variant="body2" className="section-subtext" sx={{ color: "gray", marginTop: 0.5,marginLeft:"30px" }}>
  <span style={{ color: "black" }}>120/80</span>
  </Typography>
</Box>



    {/* Pulse */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <FavoriteIcon sx={{ marginRight: 1 }} />
     
        <Typography className="section-content">
        Pulse
        </Typography>
        </Box>
        <Typography className="section-subtext" sx={{ color: "gray", marginTop: 0.5,marginLeft:"30px" }}>
        <span style={{ color: "black" }}>95</span><span style={{ color: "light blue" }}>Bpm</span>
        </Typography>
      </Box>
    

    {/* Heart Rate (Filled Icon) */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <FavoriteIcon sx={{ marginRight: 1, fill: "red" }} /> {/* Set Heart Rate icon fill to red */}
     
        <Typography className="section-content">Heart Rate</Typography>
        </Box>
        <Typography className="section-subtext"  sx={{ color: "gray", marginTop: 0.5,marginLeft:"30px" }}>
        <span style={{ color: "black" }}>95</span><span style={{ color: "light blue" }}>Bpm</span>
        </Typography>
      </Box>
   

    {/* Temperature */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <ThermostatIcon sx={{ marginRight: 1, color: "red" }} /> {/* Set Temperature icon color to red */}
      
        <Typography className="section-content">Temperature</Typography>
        </Box>
        <Typography className="section-subtext"  sx={{ color: "gray", marginTop: 0.5,marginLeft:"30px" }}>
        <span style={{ color: "black" }}>98.4</span><span style={{ color: "light blue" }}>F</span>
        </Typography>
      </Box>
    

    {/* Weight */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <WeightIcon sx={{ marginRight: 1 }} />
     
        <Typography className="section-content">Weight</Typography>
        </Box>
        <Typography className="section-subtext" sx={{ color: "gray", marginTop: 0.5,marginLeft:"30px" }}>
        <span style={{ color: "black" }}>64.4</span><span style={{ color: "light blue" }}>Kg</span>
        </Typography>
      </Box>
   

  </Box>
</Paper>


          {/* Medical History Section below Vital Signs */}
          <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
  <h3 className="section-title">Medical History</h3>
  
  {/* First Row */}
  <Box sx={{ display: "flex", gap: 16, marginBottom: 1 }}>
    <li className="section-content">Diabetes</li>
    <li className="section-content">Thyroid Disease</li>
  </Box>
  
  {/* Second Row */}
  <Box>
    <li className="section-content">Headache One Sided</li>
  </Box>
</Paper>


<Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
  <h3 className="section-title">Complaints</h3>
  
  <Box sx={{ display: "flex",  }}>
    {/* Left Column */}
    <Box>
      <li className="section-content">Low Back Pain</li>
      <li className="section-content">History of Stress Present</li>
      <li className="section-content">Biletrral</li>
    </Box>

    {/* Right Column */}
    <Box sx={{ marginLeft: "130px" }}>
      <li className="section-content">Calf Pain</li>
      <li className="section-content">Repetitive Thoughts</li>
      <li className="section-content">History Of Fragmented Sleep Present</li>
    </Box>
  </Box>
</Paper>

          {/* Observations Section */}
          <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
  <h3 className="section-title">Observations</h3>
  
  <Box sx={{ display: "flex",  }}>
    {/* Left Column */}
    <Box>
      <li className="section-content">Abduction</li>
      <li className="section-content">Repetitive Thoughts</li>
      <li className="section-content">Biletrral</li>
    </Box>

    {/* Right Column */}
    <Box sx={{ marginLeft: "130px" }}>
      <li className="section-content">Peripheral Pulses Palable</li>
      <li className="section-content">Calf Pain</li>
      <li className="section-content">History Of Fragmented Sleep Present</li>
    </Box>
  </Box>
</Paper>
 <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
      <h3 className="section-title">Diagnoses</h3>
      <Box sx={{ 
        backgroundColor: '#ddd', // Setting background color
        textAlign: 'center', // Centering the text horizontally
        padding: 1, // Optional: Adding padding for better spacing
      }}>
        <h5>No Diagnoses</h5>
      </Box>
    </Paper>
 <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
  <h3 className="section-title">Investigation</h3>
  
  <Box sx={{ display: "flex",  }}>
    {/* Left Column */}
    <Box>
      <li className="section-content">Carotid Doopler Normal</li>
      <li className="section-content">Holter Monitoring  Normal</li>
      <li className="section-content">Serum Iron Levels Normal</li>
    </Box>

    {/* Right Column */}
    <Box sx={{ marginLeft: "130px" }}>
      <li className="section-content"> S Lipid Profile Normal</li>
      <li className="section-content">Uric Acid  Normal </li>
      <li className="section-content">History Of Fragmented Sleep Present</li>
    </Box>
  </Box>
</Paper>
          <Prescription />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default PatientProfile;
