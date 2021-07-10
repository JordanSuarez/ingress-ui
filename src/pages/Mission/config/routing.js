import {MISSION} from "../../../common/routing/routesResolver";
import Mission from "../Mission";

export const missionRouting = {
    id: "missionPage",
    path: MISSION,
    component: Mission,
    requireAuthentication: true,
};
