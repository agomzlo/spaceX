import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLaunches = async() => {
    const res = await fetch('https://api.spaceXdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_utc: 'asc',
                },
                limit: 12,
            },
        }),
    });
    
    const { docs:launches } = await res.json() as APISpaceXResponse;
    return launches;
};

export const getLaunchBy = async({id}: {id: string}) => {
    const res = await fetch(`https://api.spaceXdata.com/v5/launches/${id}`);
    
    const launch = await res.json() as Doc;
    return launch;
};