import { getCategories } from '@/utils/server/utils'
import {test,expect} from 'vitest'

test('getCategories',()=>{
    expect(getCategories(true,true,true,true)).toBe(1)
})

