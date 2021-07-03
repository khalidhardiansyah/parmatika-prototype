import {createRouter,  createWebHistory} from 'vue-router'



const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import("../views/Home.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token')
            const role = localStorage.getItem('role')
            if(token == true && role == 'Pelamar') {return next('/JobApplicant')}
            else if(token == true  && role == 'Pemberi') {return next('/JobRecruiter')}
            else {
                return next()
            }
        }
    },
    {
        path:'/signup',
        name:'Signup',
        component:() => import("../views/register/Signup.vue")
    
    },
    {
        path:'/JobApplicant',
        name:'JobApplicant',
        component: () => import("../views/JobApplicant.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token')
            const role = localStorage.getItem('role')
            if(!token) return next('/')
            if(role == 'Pelamar'){
                return next()
            } else {
                return next('/')
            } 
        }
    },
    {
        path:'/JobRecruiter',
        name:'JobRecruiter',
        component: () => import("../views/JobRecruiter.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token')
            const role = localStorage.getItem('role')
            if(!token) return next('/')
            if(role == 'Pemberi'){
                return next()
            } else {
                return next('/')
            }
        }
    },
    {
        path:'/Findjob',
        name:'FindJob',
        component:() => import("../views/FindJob.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token')
            const role = localStorage.getItem('role')
            if(!token) return next()
            if(role == 'Pelamar'){
                 return next('/JobApplicant')
            } else {
                 return next('/')
            } 
        }
    },
    
    
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;