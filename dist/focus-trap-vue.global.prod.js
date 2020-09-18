/*!
 * focus-trap-vue v3.0.1
 * (c) 2020 Eduardo San Martin Morote
 * @license MIT
 */
var FocusTrapVue = (function (e, t, a) {
  'use strict'
  const c = t.defineComponent({
    props: {
      active: { type: Boolean, default: !0 },
      escapeDeactivates: { type: Boolean, default: !0 },
      returnFocusOnDeactivate: { type: Boolean, default: !0 },
      allowOutsideClick: { type: Boolean, default: !0 },
      initialFocus: { type: [String, Function] },
      fallbackFocus: { type: [String, Function] },
    },
    setup(e, { slots: c, emit: n }) {
      let u
      const o = t.ref(null)
      return (
        t.onMounted(() => {
          t.watch(
            () => e.active,
            t => {
              const { initialFocus: c } = e
              t && o.value
                ? ((u = a.createFocusTrap(o.value, {
                    escapeDeactivates: e.escapeDeactivates,
                    allowOutsideClick: () => e.allowOutsideClick,
                    returnFocusOnDeactivate: e.returnFocusOnDeactivate,
                    onActivate: () => {
                      n('update:active', !0), n('activate')
                    },
                    onDeactivate: () => {
                      n('update:active', !1), n('deactivate')
                    },
                    initialFocus: c
                      ? 'function' == typeof c
                        ? c()
                        : c
                      : o.value,
                    fallbackFocus: e.fallbackFocus,
                  })),
                  u.activate())
                : u && u.deactivate()
            },
            { immediate: !0, flush: 'post' }
          )
        }),
        t.onUnmounted(() => {
          u && u.deactivate(), (u = null)
        }),
        () => {
          if (!c.default) return null
          const e = c.default().filter(e => e.type !== t.Comment)
          if (!e || !e.length || e.length > 1) return e
          return t.cloneVNode(e[0], { ref: o })
        }
      )
    },
  })
  return (e.FocusTrap = c), e
})({}, Vue, FocusTrap)
