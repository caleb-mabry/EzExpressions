class EzExpression {
    #expression = ""
    create() {
        return new RegExp(this.#expression)
    }
    startsWith(value: string) {
        this.#expression += `^${value}.*`
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
const wordsStartingWithZ =
    new EzExpression()
        .startsWith("Z")
        .endsWith("a")
        .whatItLooksLike()
        .create()
        .test("Zebra")