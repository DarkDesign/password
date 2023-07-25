import CryptoJS from 'crypto-js'
import Rand from 'rand-seed'

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
        if (isWildcards) return this.createWildcards(result, iterations)
        return result
    }

    private createMD5(value: string): string {
        return CryptoJS.MD5(value).toString()
    }

    private createSHA256(value: string): string {
        return CryptoJS.SHA256(value).toString()
    }

    private createSHA512(value: string): string {
        return CryptoJS.SHA512(value).toString()
    }

    private createWildcards(value: string, iterations: number) {
        const rand = new Rand(value)
        const charArray = ['#', '%', '!', '_', '$']

        for (let index = 0; index < iterations; index++) {
            const randomIndex = this.getRandomInt(rand, 1, value.length - 1)
            const randomChar = charArray[this.getRandomInt(rand, 0, charArray.length)]
            value = this.replaceCharacterByIndex(value, randomIndex, randomChar)
        }

        return value
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
}
