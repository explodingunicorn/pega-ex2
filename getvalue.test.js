const { getValue } =  require('./index');

const data = {
    key1: {

        key2: {

            key3: 'A'

        }

    },
    key2: {
        key3: 'B'
    },
    key3: 'C',
    key4: null
};

describe('Tests getValue function', () => {
    it('Should return A', () => {
        expect(getValue(data, 'key1.key2.key3')).toBe('A');
    })

    it('Should return B', () => {
        expect(getValue(data, 'key2.key3')).toBe('B');
    });

    it('Should return undefined', () => {
        expect(getValue(data, 'key1.key2.key3.key4')).toBe(undefined);
    })
})