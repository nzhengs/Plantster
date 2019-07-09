import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import _ from "lodash";
import { FormBtn } from "../Form";
import "./style.css";

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];


const bgImageString100small = 'url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png")';
const bgImageString200small = 'url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png")';
const bgImageString400small = 'url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png"),url("./Plantster_fav_16.png")';
const bgImageString200large = 'url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png"),url("./Plantster_fav_32.png")';

let backgroundString2 = ""; 

/**
 * This layout demonstrates how to sync to localstorage.
 */
class LocalStorageOriginal extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    // cols: 50,
    // rowHeight: 35,
    verticalCompact: true,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: [],
      // layout: JSON.parse(JSON.stringify(originalLayout)),
      //   layout: testDefaultLayout,
      mouse: false,
      rollBackLayout: [],
      newCounter: 15,
      gardenSytle: {
        height: "500px",
        width: "1400px"
      },
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
    // this.setHeight = this.setHeight.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.rollBackLayout = this.rollBackLayout.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  resetLayout() {
    console.log("In Reset Layout Function");
    this.setState({
      layout: originalLayout
    });
  }

  rollBackLayout() {
    const { rollBackLayout } = this.state;
    console.log("Roll Back Layout State: ", this.state);
    this.setState({ layout: rollBackLayout });
  }

  // setHeight() {
  //   console.log("State - ", this.state);
  //   console.log(JSON.stringify(this.state.layout));
  //   this.setState({ totalHeight: 20 });
  // }

  onLayoutChange(layout) {

    console.log("On Layout Change");
    console.log("Pulled in layout", layout);
    console.log("State",this.state);
    /*eslint no-console: 0*/
    // console.log("On Layout Change Layout", layout);
    const layout2 = this.state.layout;
    console.log("**************************Layout2", layout2);
    // let stateLayout = [...layout2]
    let stateLayout =  _.cloneDeep(layout2);

    layout.forEach((element,index) => {
      stateLayout[index].x = element.x;
      stateLayout[index].y = element.y;
      stateLayout[index].h = element.h;
      stateLayout[index].w = element.w;
    });

    console.log("pre set state", this.state, layout);
    console.log("global storage", JSON.parse(JSON.stringify(originalLayout)))
    saveToLS("layout", layout);
    this.setState({ layout: stateLayout });
    this.props.onLayoutChange(stateLayout); // updates status display
 
  }

  handleMouseDown() {
    console.log("Mouse Down");
    console.log(this.state);
    this.setState({
      mouse: true,
      rollBackLayout: this.state.layout
    });
  }

  componentDidMount() {
    //Set layout to last saved layout
    // backgroundString2 = 'url("../../Plantster_fav_16.png")';

    for (let index = 0; index < 20; index++) {
      if (index === 19) {
        backgroundString2 += 'url("../../Plantster_fav_32.png")';
      } else {
        backgroundString2 += 'url("../../Plantster_fav_32.png"),';
      }
    }

    this.setState({ layout: this.props.defaultLayout });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevState: ", prevState.layout);
    console.log("Current State:", this.state.layout);
    //   console.log("This State Layout: ", this.state.layout);
    //   console.log("Total Height", this.state.totalHeight);

    const { layout } = this.state;
    let resetFlag = false;

    layout.forEach(e => {
      console.log("ID: ",e.i)
      console.log("Height: ", e.h);
      console.log("Y-Axis", e.y);
      console.log("Total Height Calculated:", e.y+e.h);
      console.log("Total Height:", this.props.totalHeight)
      if (e.h + e.y > this.props.totalHeight) {
        resetFlag = true;
        console.log("Reset Flag", resetFlag);
      }
    });

    // if (arraysEqual(this.state.layout, prevState.layout)) {
    //   console.log("Arrays Are Equal, Nothing Happens");
    // } else {
      console.log("----Not Equal");
      if (resetFlag) {
        console.log("Height Exceeded");
        // this.resetLayout();
        // this.rollBackLayoutChange(prevState);
        this.rollBackLayout();
        console.log("Original Layout: ", originalLayout);
        console.log("Previous State: ", prevState.layout);
      }
    // }
  }

  onAddItem(plantVals) {
    /*eslint no-console: 0*/
    // console.log("adding", "n" + this.state.newCounter);
    // console.log("State - ", this.state)
    // console.log(JSON.stringify(this.state))

    let newLayout = Array.from(this.state.layout);
    const { plant, finalPlants } = this.props;

    console.log("Plant Id - ", plant._id);
    console.log("Plant - ", plant);
    // console.log("Final Plants: ", finalPlants[0]);
    console.log("BG color:", plantVals.bgColor);
    let clone = {};

    clone.i = "n" + this.state.newCounter.toString();
    clone.bg = plantVals.bgColor;
    clone.ss = plantVals.seedSpacing
    clone.id = plantVals.id;
    clone.x = 2;
    clone.y = 0;
    clone.h = plantVals.seedSpacing
    clone.w = plantVals.seedSpacing
    clone.moved = false;
    clone.static = false;
    clone.add = false;

    console.log("Clone: ", clone);
    // console.log("Layout: ", layout)
    newLayout.push(clone);
    console.log("New Layout: ", newLayout);
    console.log(JSON.stringify(newLayout));
    // layout[0].h=5;
    // console.log(layout)
    // this.rollBackLayout();
    this.setState({ layout: newLayout, newCounter: this.state.newCounter + 1 });

    // this.setState({
    //   // Add a new item. It must have a unique key!
    // layout: this.state.layout.concat({
    //     i: "7",
    //     x: 3,
    //     y: Infinity, // puts it at the bottom
    //     w: 2,
    //     h: 2
    //   })
    //   // Increment the counter to ensure key is always unique.
    // //   newCounter: this.state.newCounter + 1
    // });
    // this.forceUpdate();
    // this.rollBackLayout();
  }

  createStyleObject = element => {
    const { gardenWidth, plant } = this.props;
    const seedSpacing = element.seedSpacing || 6;

    console.log("********CREATE STYLE OBJECT **********");
    console.log("Element", element);
    console.log("Props", this.props);
    // console.log("Width: ", gardenWidth);
    // console.log("Seed Spacing: ", seedSpacing);

    console.log("element inside create style object", element);

    console.log("Creating interval", this.props.ppi, element.ss)
    let interval = this.props.ppi*element.ss;
    // let count = Math.round(1408 / interval);
    // let count = Math.round((element.w*element.h)/(element.ss*element.ss))
    // let countx = Math.round(element.w/element.ss)+1;
    // let county = Math.round(element.h/element.ss)+1;
    let countx = 25;
    let county = 16

    // Start of Comment

    var start = Math.round(interval / 2) - 8;
    var nextx = start;
    var nexty = start;
    // console.log("First Next - ", next);
    let position = "";
    let nextPos = "";

    console.log("ALL VARIABLES BEFORE THE FOR LOOP", start, nextx, nexty, position, nextPos, interval, countx, county)

    for (let index = 0; index < county; index++) {
      for (let j = 0; j < countx; j++) {
        if (!(j === countx - 1)) {
          nextPos = nextx + "px " + nexty + "px, ";
          position += nextPos;
          nextx += interval;
          // console.log("New Next: ", next);
        } else if (index === county - 1 && j === countx - 1) {
          nextPos = nextx + "px " + nexty + "px";
          position += nextPos;
          // console.log("Last Statement Statement", index, j);
        } else {
          nextPos = nextx + "px " + nexty + "px, ";
          position += nextPos;
        }
      }

      nexty += interval;
      nextx = start;
    }

    // position = position;

    //End of Comment
    // console.log("Position: ", position.toString());

    console.log("Background Color Element",element.bg)

    let styleObject = {};

    styleObject = {
      backgroundImage: ((element.ss > 5) ? bgImageString200large: bgImageString400small),
      // backgroundImage: 'url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png"),url("../../Plantster_fav_16.png")',
      // backgroundImage: backgroundString2,
      backgroundRepeat: "no-repeat",
      backgroundPosition: position,
      backgroundColor: element.bg
    };

    console.log("Style Object: ", styleObject);

    // Get the width and height variables (determine how many pixels = 1 inch)
    // Get the seed spacing to determine how many inches aparat the favicon should be
    // Determine if I should use the large or small favicon

    // try generating the background both dynamically and statically

    // console.log("Element from inside create style: ", element);
    return styleObject;
  };

  createElement(el) {
    console.log("Current State within create element", el, this.state.layout);
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const gridItemSytle = this.createStyleObject(el);
    console.log(
      "Current State after create style object",
      el,
      this.state.layout
    );
    const i = el.add ? "+" : el.i;
    let count = Math.round((el.w*el.h)/(el.ss*el.ss));
    console.log("COUNT",el.w,el.h,el.ss,count);
    this.props.setCount(el.id, count);
    return (
      <div key={i} data-grid={el} style={gridItemSytle}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          // <span className="text">{i}</span>
          <span className="text"></span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          {/* x */}
        </span>
        <span className="badge" role="badge">
          # : {count}
        </span>
      </div>
    );
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ layout: _.reject(this.state.layout, { i: i }) });
  }

  removeAnItem = (itemId) => {
    const layout = this.state.layout;
    const newLayout =  _.reject(layout, { id: itemId});
    this.setState({ layout: newLayout});
  }

  render() {
    return (
      <React.Fragment>
        <div id="headerTestForce">
          <a href="/Profile">
          <FormBtn
            onClick={() => {
              this.props.handleGardenSave(this.state.layout);
            }}
            type="button"
            className="btn btn-success float-right"
            
          >
            Save Layout
          </FormBtn>
          </a>
        </div>
        <div
          style={{
            width: this.props.pixelWidth,
            height: this.props.pixelHeight
          }}
          id="mainTestForce"
          onMouseDown={this.handleMouseDown}
        >
          {/* <button onClick={this.resetLayout}>Reset Layout</button> */}
          {/* <button onClick={this.setHeight}>Set Height</button> */}

          <ReactGridLayout
            {...this.props}
            layout={this.state.layout}
            // onLayoutChange={() => this.onLayoutChange(this.state.layout)}
            onLayoutChange={this.onLayoutChange}
            margin={[1, 1]}
          >
            {_.map(this.state.layout, el => this.createElement(el))}
            {/* <div key="1" data-grid={{ w: 1, h: 1, x: 0, y: 0 }}>
              <span className="text">1</span>
            </div>
            <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
              <span className="text">2</span>
            </div>
            <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
              <span className="text">3</span>
            </div>
            <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0 }}>
              <span className="text">4</span>
            </div>
            <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0 }}>
              <span className="text">5</span>
            </div> */}
          </ReactGridLayout>
        </div>
        <p>.</p>
      </React.Fragment>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

export default LocalStorageOriginal;
