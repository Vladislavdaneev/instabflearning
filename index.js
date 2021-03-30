
var autohrizaion = document.querySelector(".account-login");
const modal = $.modal({
    title: '',
    closable: true,
    content: `
    <span class="block_form-text">Sign in to <i><span style="color: rgb(238,105,11);">Insta</span><b><span style="color: rgb(255,177,82);">B</span><span style="color: rgb(238,105,11);">F</span></b></i>
    <i><span style="color: rgb(255,177,82);">Wallet</span></i>
    <div class="block_form-inputdiv">
    <input type="text" placeholder="Email address" class="block_form-input">
    <br><input type="password" placeholder="Password" class="block_form-input">
    </div>
    <button type="submit" class="block_form-btn">Sign In</button>`,
    width: '700',
    footer: `
    <div class="footer-title">or get <i><span style="color: rgb(255,177,82);">Wallet</span></i> password</div>
    <input type="text" placeholder="Email address" class="block_form-input">
    <button type="submit" class="block_form-btn-pw">Get Password</button>`
 })

    

autohrizaion.addEventListener("click", function(e){
    e.preventDefault;
    modal.open();
    })

/* navigation insert*/

