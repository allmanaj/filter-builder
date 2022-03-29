import Builder from '../src';
import data, {jess, angus, aaron} from './data'
var filter;

beforeEach(() => {
    filter = new Builder(data)
})

test('it filters data containing this substring', () => {
    const output = filter.whereContains("name", "a")
        .get()
    expect(output).toEqual([angus, aaron])
});

test('chaining whereContains uses && operator', () => {
    const output = filter.whereContains("name", "a")
        .whereContains("name", "s")
        .get()
    expect(output).toEqual([angus])
});

test('chaining orWhereContains uses the || operator', () => {
    const output = filter.whereIncludes("name", "a")
        .orWhereIncludes("name", "s")
        .get()
    expect(output).toEqual([angus, jess, aaron])
});



