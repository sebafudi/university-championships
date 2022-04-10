import { createContext } from "react";
import { teams } from "../App";

const teamsContext = createContext<teams>([]);

export default teamsContext;
