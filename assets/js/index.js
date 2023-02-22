window.onload = function(){

    let bioTitle = "Masana P hlungwani"
    let bioAbout = "I am a 23 years old developer</p><p> I'm very passionate about creating websites</p> <p>I am a very good developer and I am always looking for new projects.";
    let Addresstitle ='address'
    let address='2610 Masingita road Mountain view,  Giyani  0826  Limpopo'
    let facebook='<a href="facebook"><i class="fab fa-facebook">facebook:PamSono</i></a>'
    let twitter ='<a href="twitter"><i class="fab fa-twitter">twitter:pamSono</i></a>'
    let insta ='<a href="instagram"><i class="fab fa-instagram">instagram:pam.sss</i></a>'
    
    document.getElementById("bio-title").innerHTML = bioTitle;
    document.getElementById("bio-about-me").innerHTML = bioAbout;
    document.getElementById("profilePic").src="assets/img/pam.png.jpg";
    document.getElementById("address-titl").innerHTML = Addresstitle  ;
    document.getElementById("address").innerHTML = address;
    document.getElementById("facebook").innerHTML = facebook;
    document.getElementById("twitter").innerHTML = twitter;
    document.getElementById("instagram").innerHTML = insta;
    document.getElementById("facebooki").src="assets/img/fblogo.png" ;
    document.getElementById("twitteri").src="assets/img/OIP.Jfif" ;
    document.getElementById("instagrami").src="assets/img/instalogo.png" ;

}

