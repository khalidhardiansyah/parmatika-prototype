<template>
    <div class="container-fluid footer-color">
        <div class="container-lg py-5 ">
        <div class="row row-cols-3 justify-content-lg-between d-flex flex-wrap mt-5">
            <div class="col-4 row align-items-center mx-3 ">
                <h5 class="text-set">Copyright 2021 CariKerja.com</h5>
                <ul class="list-unstyled d-flex flex-row">
                    <li class="px-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
                    <li class="px-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
                    <li class="px-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a></li>
                    <li class="px-2"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/></svg></a></li>
                </ul>
            </div>
            <div class="col-2">
                <h2 class="sub-title-content-footer">Resource</h2>
                <ul class="list-unstyled">
                    <li class="py-2"><a href="#" class="text-decoration-none text-set " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a></li>
                    <li class="py-2"><router-link to="/signup" class="text-decoration-none text-set  " >Sign Up</router-link></li>
                    <li class="py-2"><router-link to="/Findjob" class="text-decoration-none text-set " >Find Jobs</router-link></li>
                </ul>
            </div>
            <div class="col-4 ">
                <h2 class="sub-title-content-footer">About Us</h2>
                <ul class="list-unstyled">
                    <li class="py-2"><a href="#" class="text-decoration-none text-set" >Contact Us</a></li>
                </ul>

            </div>
        </div>
        </div>
    </div>
    <TheModalLogin/>
</template>

<script>
import TheModalLogin from "./TheModalLogin"

export default {
    name:'TheFooter',
    TheModalLogin
}
</script>

<style scoped>
@import '../assets/style/components/Footer.css'
</style>