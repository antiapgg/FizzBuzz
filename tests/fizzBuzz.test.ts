import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', (): void => {
    let sut: FizzBuzz;

    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzz = `${fizz}${buzz}`;

    beforeEach(() => {
        sut = new FizzBuzz();
    });
    it('should return the number converted to string when is not multiple of 3 or 5', () => {
        expect(sut.convert(1)).toBe('1');
        expect(sut.convert(2)).toBe('2');
        expect(sut.convert(4)).toBe('4');
    });
    it('should return "Fizz" when the number is multiple of 3', () => {
        expect(sut.convert(3)).toBe(fizz);
        expect(sut.convert(6)).toBe(fizz);
        expect(sut.convert(9)).toBe(fizz);
        expect(sut.convert(12)).toBe(fizz);
    });
    it('should return "Buzz" when the number is multiple of 5', () => {
        expect(sut.convert(5)).toBe(buzz);
        expect(sut.convert(10)).toBe(buzz);
    });
    it('should return "FizzBuzz" when the number is multiple of 3 and 5', () => {
        expect(sut.convert(15)).toBe(fizzBuzz);
        expect(sut.convert(30)).toBe(fizzBuzz);
        expect(sut.convert(45)).toBe(fizzBuzz);
    });
});
