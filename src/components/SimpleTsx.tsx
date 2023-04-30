import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const count = ref(10)

    return () => (
      <div>
        <div>组合式API tsx渲染. 使用props的参数 {props.msg}</div>
        <p>ref: {count.value}</p>
      </div>
    )
  }
})

// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },

//   render () {
//     return (
//       <>
//         <div>options API方式的Vue3 tsx组件, 接收msg参数: {this.msg}</div>
//       </>
//     )
//   }
// })

/* eslint-disable @typescript-eslint/explicit-function-return-type */
// 函数式组件
// export default () => {
//   return (
//     <div>
//       test simple tsx
//     </div>
//   )
// }
