import Builder from '../src';
import data, {jess, angus, aaron} from './data'
var filter;

beforeEach(() => {
    filter = new Builder(data)
})

test('it filters data with three given values', () => {
    const output = filter.whereIncludes("hobbies", 'name', "swimming")
        .get()
    expect(output).toEqual([angus, jess])
});

test('it filters data with two given values', () => {
    const output = filter.whereIncludes("pets", "horatio")
        .get()
    expect(output).toEqual([jess])
});

test('chaining whereIncludes uses the && operator', () => {
    const output = filter.whereIncludes("pets", "horatio")
        .whereIncludes("pets", "snuggles")
        .get()
    expect(output).toEqual([])
});

test('chaining orWhereIncludes uses the || operator', () => {
    const output = filter.whereIncludes("pets", "horatio")
        .orWhereIncludes("pets", "snuggles")
        .get()
    expect(output).toEqual([angus, jess])
});



