import { useStorage } from '@vueuse/core'
import {ref, computed} from 'vue'

const isOpen = ref(false)
const cart = useStorage('cart', [])

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

    function remove(id) {
        const index = cart.value.findIndex(item => item.id === id)
        if (index !== -1) {
            cart.value.splice(index, 1)
        }
    }

    const total = computed(() => {
        return cart.value.reduce((total, item) => {
            const finalPrice = item.promotion ?? item.price
            return total + (finalPrice * item.qty)
        }, 0)
    })

    function inCart(id) {
        return cart.value.some(item => item.id === id) 
    } 

    const isEmpty = computed(() => {
        return !cart.value.length
    })

    return {isOpen, open, close, add, remove, cart, isEmpty, total, inCart}
}