import StrPlus from "../StrPlus"
import { expect, describe,it } from 'vitest'

describe('StrPlus class', () => {
    // 测试构造函数和 toString 方法
    it('should create an instance and return string correctly', () => {
        const strObj = new StrPlus('Hello')
        expect(strObj.toString()).toBe('Hello') // 验证 toString 方法返回值
    })

    // 测试 length 属性
    it('should have the correct length property', () => {
        const strObj = new StrPlus('Hello')
        expect(strObj.length).toBe(5) // 验证 length 属性是否正确
    })
})
