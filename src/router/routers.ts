
import Main from "@/components/main/main.vue"

export default [
    {
        path:"/",
        component:Main,
        children:[
            {
                path:"/",
                name:"home",
                component:()=>import("@/view/home.vue")
            },
            {
                path:"/about",
                name:"about",
                component:()=>import("@/view/about.vue")
            }
        ]
    },
   
]