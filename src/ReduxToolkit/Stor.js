import { configureStore} from '@reduxjs/toolkit'
import valueSlice from './valueSlice'

import colorSlice from './colorSlice'

const store = configureStore({
    reducer: {
        value:valueSlice,
        color:colorSlice
    }
})


export default store