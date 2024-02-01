import {multiply} from "./01";

test("multiplication should be correct", ()=> {
    //data
    const a = 4
    const b = 2
    const c = 8

    //action
    const result = multiply(a,b)

    //expect result
    expect(result).toBe(8)
})