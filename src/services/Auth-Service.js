import Api from '@/services/api'

export default{
    register (credentials){
        return Api().post('akun', credentials)
    },
    login (credentials){
        return Api().post('login', credentials)
    },
    changePassword(data){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().patch('change-password', data, {headers})
    },
    lamar(credentials){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().post('lamar', credentials, {headers})
    },
    test(credentials){
        return Api().post('test', credentials)
    },
    post(){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().get('post', {headers})
    },
    kerjaan(){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().get('kerjaan', {headers})
    },
    apply(credentials){
        console.log('yeay berhasil')
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().post('apply', credentials, {headers})
    },

}