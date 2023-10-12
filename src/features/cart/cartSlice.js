import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Agregar elemento al carrito
        addItem: (state, action) => {
            // console.log('action', action)
            // console.log('state', state)
            const productRepeated = state.items.find(
                item => item.id === action.payload.id
            )
            console.log('productRepated', productRepeated)
            const stateItems = [...state.items]

            if (productRepeated){
                console.log('stateitems', stateItems)
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                    }
                    console.log('item', item)
                    return item
                })
                console.log('itemsUpdated', itemsUpdated)
                const repeatTotal = itemsUpdated.reduce(
                    (acc, current) => (acc += current.precio * current.quantity),
                    0
                )
                console.log('repeattotal', repeatTotal)

                const newState = Object.assign(
                    state,
                    {
                        items: itemsUpdated,
                        total: repeatTotal,
                        updatedAt: Date().toLocaleString(),
                    }
                )

                return newState

            } else {
                // state.items.push(action.payload)
                let noRepeatTotal = Number(action.payload.precio);
                if (state.items.length) {
                    noRepeatTotal = noRepeatTotal + state.items.reduce(
                        (acc, current) => (acc += current.precio * current.quantity),
                        0
                    )
                }

                console.log('este es el total 2', noRepeatTotal)
                return {
                    ...state,
                    total: noRepeatTotal,
                    items: [...state.items, action.payload],
                    updatedAt: new Date().toLocaleString(),
                }

            }
        },
        removeItem: (state, action) => {},
    },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer