/*!
 * focus-trap-vue v3.0.1
 * (c) 2020 Eduardo San Martin Morote
 * @license MIT
 */
import {
  defineComponent,
  ref,
  onMounted,
  watch,
  onUnmounted,
  Comment,
  cloneVNode,
} from 'vue'
import { createFocusTrap } from 'focus-trap'

const FocusTrap = defineComponent({
  props: {
    active: {
      // TODO: could be options for activate
      type: Boolean,
      default: true,
    },
    escapeDeactivates: {
      type: Boolean,
      default: true,
    },
    returnFocusOnDeactivate: {
      type: Boolean,
      default: true,
    },
    allowOutsideClick: {
      type: Boolean,
      default: true,
    },
    initialFocus: {
      type: [String, Function],
    },
    fallbackFocus: {
      type: [String, Function],
    },
  },
  setup(props, { slots, emit }) {
    let trap
    const el = ref(null)
    onMounted(() => {
      watch(
        () => props.active,
        active => {
          const { initialFocus } = props
          if (active && el.value) {
            // has no effect if already activated
            trap = createFocusTrap(el.value, {
              escapeDeactivates: props.escapeDeactivates,
              allowOutsideClick: () => props.allowOutsideClick,
              returnFocusOnDeactivate: props.returnFocusOnDeactivate,
              onActivate: () => {
                emit('update:active', true)
                emit('activate')
              },
              onDeactivate: () => {
                emit('update:active', false)
                emit('deactivate')
              },
              initialFocus: initialFocus
                ? typeof initialFocus === 'function'
                  ? initialFocus()
                  : initialFocus
                : el.value,
              fallbackFocus: props.fallbackFocus,
            })
            trap.activate()
          } else if (trap) {
            trap.deactivate()
          }
        },
        { immediate: true, flush: 'post' }
      )
    })
    onUnmounted(() => {
      if (trap) trap.deactivate()
      trap = null
    })
    return () => {
      if (!slots.default) return null
      const vNodes = slots.default().filter(vnode => vnode.type !== Comment)
      if (!vNodes || !vNodes.length || vNodes.length > 1) {
        {
          console.error(
            '[focus-trap-vue]: FocusTrap requires exactly one child.'
          )
        }
        return vNodes
      }
      const vnode = cloneVNode(vNodes[0], { ref: el })
      return vnode
    }
  },
})

export { FocusTrap }
