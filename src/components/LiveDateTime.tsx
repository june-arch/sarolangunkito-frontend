"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import 'dayjs/locale/id'; // import the Indonesian locale

dayjs.locale('id');

const LiveDateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>();

  useEffect(() => {
    setCurrentDateTime(dayjs().format("HH:mm:ss"));
    const intervalId = setInterval(() => {
      setCurrentDateTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography
      variant="subtitle2"
      color="inherit"
      noWrap
    >
      {currentDateTime}
    </Typography>
  );
};

export default LiveDateTime;
