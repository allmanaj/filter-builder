import  { FilterBuilder } from '../src';
import data, {jess, angus, aaron} from './data'
var filter;

beforeEach(() => {
    filter = new FilterBuilder(data)
})

test('it filters falsy data with one argument', () => {
    const output = filter.where("likesFootball").get()
    expect(output).toEqual([aaron])
});

test('it filters strings with 2 arguments', () => {
    const output = filter.where("name", "Angus").get()
    expect(output).toEqual([angus])
});

test('it filters numbers with 2 arguments', () => {
    const output = filter.where("age", 25).get()
    expect(output).toEqual([jess, aaron])
});

test('it filters booleans with 2 arguments', () => {
    const output = filter.where("likesFootball", true).get()
    expect(output).toEqual([aaron])
});

test('it filters strings with 2 arguments', () => {
    const output = filter.where("name", "!=", "Angus").get()
    expect(output).toEqual([jess, aaron])
});

test('it filters numbers with 2 arguments', () => {
    const output = filter.where("age", "<", 25).get()
    expect(output).toEqual([angus])
});

test('it filters booleans with 2 arguments', () => {
    const output = filter.where("likesFootball", "!=", true).get()
    expect(output).toEqual([angus, jess])
});

test('it filters with a callback', () => {
    const output = filter.where((query) => {
        query.where('name', 'Angus')
             .orWhere('name', 'Jess')
    })
    .where('age', ">=", 25)
    .get()

    expect(output).toEqual([jess])
});

test('chaining where calls uses && operator', () => {
    const output = filter.where('name', 'Aaron')
        .where('age', 25)
        .get()

    expect(output).toEqual([aaron])
})


test('orWhere filters with a || operator', () => {
    const output = filter.where("name", "Angus")
        .orWhere('name', "Jess")
        .get()
    expect(output).toEqual([angus, jess])
});

test('orWhere filters with a || operator when given a callback', () => {
    const output = filter.where("likesFootball", true)
        .orWhere((query) => {
            query.where('name', "Angus")
                 .orWhere('name', "Jess")
        })
        .get()
    expect(output).toEqual([angus, jess, aaron])
});
