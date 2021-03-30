/* navigation insert*/
const navigationMenu = document.querySelector(".header");
navigationMenu.insertAdjacentHTML("afterbegin",`<div class="navlogo"><a href="index.html"><img src="images/logo_bf.png" width="50%" alt="logo"></a></div>
<div class="nav-top-right"><ul class="topnavbar">
    <li><a href="index.html">Home</a> </li>
    <li class="account-login">My Account</li>
    <li><a href="services.html">Services</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="about-us.html">About Us</a></li> 
</ul>
<div class="search">
				<i class="fa fa-search"></i>
			</div> </div>`);