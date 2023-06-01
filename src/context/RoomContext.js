import React, { Children, createContext, useEffect, useState } from "react";

import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(Number(kids[0]) + Number(adults[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
    console.log(rooms);
    //filter rooms based on total(person)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);

    console.log(newRooms);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
