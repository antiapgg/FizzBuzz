export class FizzBuzz {
    private static readonly fizz: string = 'Fizz';
    private static readonly buzz: string = 'Buzz';

    convert(value: number): string {
        if (FizzBuzz.isMultipleOfThree(value) && FizzBuzz.isMultipleOfFive(value)) {
            return `${FizzBuzz.fizz}${FizzBuzz.buzz}`;
        }
        if (FizzBuzz.isMultipleOfThree(value)) {
            return FizzBuzz.fizz;
        }
        if (FizzBuzz.isMultipleOfFive(value)) {
            return FizzBuzz.buzz;
        }

        return FizzBuzz.convertToString(value);
    }

    private static isMultipleOfThree(value: number): boolean {
        return value % 3 === 0;
    }

    private static isMultipleOfFive(value: number): boolean {
        return value % 5 === 0;
    }

    private static convertToString(value: number): string {
        return value.toString();
    }
}
