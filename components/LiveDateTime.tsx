"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/id'; // import the Indonesian locale
import { Text } from "@mantine/core";

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
    <Text size="sm" fw={500}>
      {currentDateTime}
    </Text>
  );
};

export default LiveDateTime;
