import { generatePath } from "react-router-dom";

export const MISSIONS = "/missions";
export const MISSION = "/mission/:id";

export const getMissionRoute = (id) => generatePath(MISSION, {id});
