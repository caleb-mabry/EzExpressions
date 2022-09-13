const ONE_OR_MORE_OF_A = "+"
const ANY_CHARACTER = "."
class EzExpression {
    #expression = ""
    create() {
        return new RegExp(this.#expression)
    }
    matches(value: string) {
        this.#expression += `[${value}]`
        return this; 
    }
    and() {
        this.#expression += " "
        return this
    }
    startsWith(value: string) {
        this.#expression += `^${value}${ANY_CHARACTER}${ONE_OR_MORE_OF_A}`
        return this;
    }
    endsWith(value: string) {
        this.#expression += `${value}$`
        return this
    }
    whatItLooksLike() {
        console.log(`This is what your expression looks like: ` + this.#expression)
        return this
    }
}
