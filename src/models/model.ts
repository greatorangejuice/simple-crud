export class User {
    public id?: string
    public name: string | undefined
    public age: number | undefined
    public hobby: Array<string> | [] | undefined

    constructor(
        name: string | undefined,
        age: number | undefined,
        hobby: Array<string> | [] | undefined,
        id?: string
    ) {
        this.name = name
        this.age = age
        this.id = id
        this.hobby = hobby

        if (!Array.isArray(this.hobby)) {
            this.hobby = undefined
        }
        if (typeof name !== 'string') {
            this.name = undefined
        }
        if (typeof age !== 'number') {
            this.age = undefined
        }
    }
}

export interface IResponse {
    body: any
    statusCode: number
    headers: any
}

export interface QueryParameters {
    id?: string | null
}
