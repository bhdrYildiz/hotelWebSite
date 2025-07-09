import React, { JSX } from "react";
import {
  BedDouble,
  Wifi,
  Snowflake,
  Tv,
  BathIcon,
  Coffee,
  Minus,
  ConciergeBell,
  ShowerHead,
  ShieldCheck,
  Bath,
  Thermometer,
  Eye,
} from "lucide-react";
import { PiHairDryer } from "react-icons/pi";

export const iconMap: Record<string, () => JSX.Element> = {
  BedDouble: () => React.createElement(BedDouble, { size: 20 }),
  Wifi: () => React.createElement(Wifi, { size: 20 }),
  Tv: () => React.createElement(Tv, { size: 20 }),
  BathIcon: () => React.createElement(BathIcon, { size: 20 }),
  Coffee: () => React.createElement(Coffee, { size: 20 }),
  Minibar: () => React.createElement(Minus, { size: 20 }),
  RoomService: () => React.createElement(ConciergeBell, { size: 20 }),
  HairDryer: () => React.createElement(PiHairDryer, { size: 20 }),
  Shower: () => React.createElement(ShowerHead, { size: 20 }),
  Safe: () => React.createElement(ShieldCheck, { size: 20 }),
  Bath: () => React.createElement(Bath, { size: 20 }),
  Thermometer: () => React.createElement(Thermometer, { size: 20 }),
  Mirror: () => React.createElement(Eye, { size: 20 }),
};
