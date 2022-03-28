
export const angus = {
        name: 'Angus',
        age: 24,
        hobbies: [
            {name: 'swimming', hoursNeeded: 2},
            {name: 'running', hoursNeeded: 1},
        ],
        pets: ['sniffles', 'snuggles', 'butternut squash'],
        likesFootball: false
    };

export const jess = {
        name: 'Jess',
        age: 25,
        hobbies:[
            {name: 'swimming', hoursNeeded: 2},
            {name: 'reading', hoursNeeded: 3},
        ],
        pets: ['hammy', 'rabbit', 'horatio'],
        likesFootball: false
    };

export const aaron = {
        name: 'Aaron',
        age: 25,
        hobbies:[
            {name: 'go-karting', hoursNeeded: 3},
            {name: 'reading', hoursNeeded: 1},
        ],
        pets: ['bob', 'maurice', 'sniffles'],
        likesFootball: true
    };

export default [
    {...angus},
    {...jess},
    {...aaron}
];
