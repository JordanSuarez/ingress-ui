import {MISSIONS} from "../../../common/routing/routesResolver";
import Missions from "../Missions";

export const missionsRouting = {
    id: "missionsPage",
    path: MISSIONS,
    component: Missions,
    requireAuthentication: true,
};
