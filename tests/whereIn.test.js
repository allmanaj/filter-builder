import  { FilterBuilder } from '../src';
import data, {jess, angus, aaron} from './data'
var filter;

beforeEach(() => {
    filter = new FilterBuilder(data)
})

test('it filters strings based on the array', () => {
    const output = filter.whereIn("name", ['Angus', 'Jess'])
        .get()
    expect(output).toEqual([angus, jess])
});

test('it filters numbers based on the array', () => {
    const output = filter.whereIn("age", [23, 24])
        .get()
    expect(output).toEqual([angus])
});

test('chained whereIn uses the && operator to filter numbers based on the arrays', () => {
    const output = filter.whereIn("age", [23, 24])
        .whereIn('name', ['Aaron', 'Angus'])
        .get()
    expect(output).toEqual([angus])
});

test('orWhereIn filters numbers based on both arrays', () => {
    const output = filter.whereIn("age", [23, 24])
        .orWhereIn('name', ['Aaron', "Angus"])
        .get()
    expect(output).toEqual([angus, aaron])
});


