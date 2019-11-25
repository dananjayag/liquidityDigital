import { defaultTabKey } from "./tabConfig";

export const INTITAL_STATE = {
    currentTab: defaultTabKey
};

export const pageHeader = 'Deal Room';


export const statusTypes = {
    inProgress: {
        key: "inProgress",
        name: 'In Progress',
    },

    closed: {
        key: "closed",
        name: 'Closed',
    },
}