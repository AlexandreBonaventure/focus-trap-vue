import { PropType } from 'vue'

export declare const FocusTrap: import('vue').DefineComponent<
  {
    active: {
      type: BooleanConstructor
      default: boolean
    }
    escapeDeactivates: {
      type: BooleanConstructor
      default: boolean
    }
    returnFocusOnDeactivate: {
      type: BooleanConstructor
      default: boolean
    }
    allowOutsideClick: {
      type: BooleanConstructor
      default: boolean
    }
    initialFocus: {
      type: PropType<string | (() => HTMLElement)>
    }
    fallbackFocus: {
      type: PropType<string | (() => HTMLElement)>
    }
  },
  () =>
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >[]
    | null,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      active: boolean
      escapeDeactivates: boolean
      returnFocusOnDeactivate: boolean
      allowOutsideClick: boolean
    } & {
      initialFocus?: string | (() => HTMLElement) | undefined
      fallbackFocus?: string | (() => HTMLElement) | undefined
    }
  >,
  {
    active: boolean
    escapeDeactivates: boolean
    returnFocusOnDeactivate: boolean
    allowOutsideClick: boolean
  }
>

export {}
