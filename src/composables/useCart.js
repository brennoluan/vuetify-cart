import {ref} from 'vue'

const isOpen = ref(false)
const cart = ref([])

export const useCart = () => {

    function open() {
        isOpen.value = true
    }

    function close() {
        isOpen.value = false
    }

    function add(product) {
        const index = cart.value.findIndex(item => item.id === product.id)
        if (index !== -1) {
            cart.value[index].qty += 1
            return
        } else {
            product.qty = 1
            cart.value.push(product)
        }
    }

    return {isOpen, open, close, add, cart}
}