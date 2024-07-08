export default class {

    private str:string
    public length:number

    constructor(init:any) { 
        this.str = String(init) 
        this.length = this.str.length
    }

    toString() { return this.str }
}