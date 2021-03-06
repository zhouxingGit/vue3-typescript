
import Main from "@/components/main/main.vue"

export default [
    {
        path:"/",
        component:Main,
        children:[
            {
                path:"/",
                name:"home",
                meta:{
                    title:"首页"
                },
                component:()=>import("@/view/home/home.vue")
            },
            {
                path:"/JavaScript",
                name:"js",
                meta:{
                    title:"js"
                },
                component:()=>import("@/view/JavaScript/JavaScript.vue")
            },
            {
                path:"/ES6",
                name:"ES6",
                meta:{
                    title:"ES6"
                },
                component:()=>import("@/view/ES6/ES6.vue")
            },
            {
                path:"/NodeJs",
                meta:{
                    title:"NodeJs"
                },
                name:"NodeJs",
                component:()=>import("@/view/nodeJs/nodeJs.vue")
            },
            {
                path:"/About",
                meta:{
                    title:"About"
                },
                name:"About",
                component:()=>import("@/view/about/about.vue")
            },
            {
                path:"/articleDetail/:id",
                meta:{
                    title:"文章详情"
                },
                name:"articleDetail",
                component:()=>import("@/view/articleDetail/articleDetail.vue")
            },

            {
                path:"/authDetail/:id",
                meta:{
                    title:"作者详情"
                },
                name:"authDetail",
                component:()=>import("@/view/authDetail/authDetail.vue")
            },
        ]
    },

    {
        path:"/304",
        name:"error_304",
        component:()=>import("@/view/error-page/304.vue")
    },
    {
        path:"/:pathMatch(.*)*",
        name:"error_404",
        component:()=>import("@/view/error-page/404.vue")
    },
]