import CryptoJS from 'crypto-js'
import Rand from 'rand-seed'
import { CAPITAL_LETTERS_ALPHABET, NUMBERS, SMALL_LETTERS_ALPHABET, SPECIAL_CHARACTERS } from './data/data';

export class Crypto {

    public createFromString(
        text: string,
        iterations: number = 1,
        isWildcards: boolean
    ): string {
        let result = text
        for (let index = 0; index <= iterations; index++) {
            result = this.createMD5(
                this.createSHA512(
                    this.createSHA256(result)
                )
            )
        }
        if (isWildcards) return this.check(this.createWildcards(result, iterations))
        return this.check(result)
    }

    private createMD5(text: string): string {
        return CryptoJS.MD5(text).toString()
    }

    private createSHA256(text: string): string {
        return CryptoJS.SHA256(text).toString()
    }

    private createSHA512(text: string): string {
        return CryptoJS.SHA512(text).toString()
    }

    private createWildcards(text: string, iterations: number) {
        const rand = new Rand(text)


        for (let index = 0; index < iterations; index++) {
            const randomIndex = this.getRandomInt(rand, 1, text.length - 1)
            const randomChar = SPECIAL_CHARACTERS[this.getRandomInt(rand, 0, SPECIAL_CHARACTERS.length)]
            text = this.replaceCharacterByIndex(text, randomIndex, randomChar)
        }

        return text
    }

    private getRandomInt(rand: Rand, min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(rand.next() * (max - min)) + min;
    }

    private replaceCharacterByIndex (
        text:string,
        index: number,
        replacement: string
    ): string {
        return text.substring(0, index) + replacement + text.substring(index + replacement.length)
    }


    private check(text: string): string {
        let upper = text.match(/[A-Z]/g)?.length || 0
        let lower = text.match(/[a-z]/g)?.length || 0
        let num = text.match(/[0-9]/g)?.length || 0

        if (upper > 1 && lower > 1 && num > 1) return text

        const rand = new Rand(text)
        let count = 0
        while (upper < 3 || lower < 3 || num < 3 || count > 100) {
            if (upper < 3) {
                const randomIndex = this.getRandomInt(rand, 0, text.length)
                const upperChar = CAPITAL_LETTERS_ALPHABET[this.getRandomInt(
                    rand,
                    0,
                    CAPITAL_LETTERS_ALPHABET.length
                )]
                text = this.replaceCharacterByIndex(text, randomIndex, upperChar)
            }

            if (lower < 3) {
                const randomIndex = this.getRandomInt(rand, 0, text.length)
                const lowerChar = SMALL_LETTERS_ALPHABET[this.getRandomInt(
                    rand,
                    0,
                    SMALL_LETTERS_ALPHABET.length
                )]
                text = this.replaceCharacterByIndex(text, randomIndex, lowerChar)
            }

            if (num < 3) {
                const randomIndex = this.getRandomInt(rand, 0, text.length)
                const numChar = NUMBERS[this.getRandomInt(
                    rand,
                    0,
                    NUMBERS.length
                )]
                text = this.replaceCharacterByIndex(text, randomIndex, numChar)
            }

            upper = text.match(/[A-Z]/g)?.length || 0
            lower = text.match(/[a-z]/g)?.length || 0
            num = text.match(/[0-9]/g)?.length || 0
            count++
        }

        return text
    }
}
