import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    const updateClock = () => {
      setCurrentTime(new Date());
    };
  
    useEffect(() => {
      const intervalId = setInterval(updateClock, 1000)
  
      return () => clearInterval(intervalId);
    }, [])
    return (
      <div >
        <Typography variant="h5"mt={2} width={170} ml={3} border={3} borderRadius={2} textAlign="center"justifyContent="center"  color="white">{currentTime.toLocaleTimeString()}</Typography>
      </div>
    );
  } 
export default LiveClock;
  