<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
</head>
<style scoped>
    .headerBrand {
        font-size: 24px;
        font-weight: bold;
    }
    .hidden{
        display: none !important;
    }
</style>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {
	       
			if (window.scrollY > 50) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	}); 
	// DOMContentLoaded  end
</script>

<body>
    <nav id="navbar_top" class="navbar navbar-expand-lg bg-primary fixed  p-3">
        <div class="container-fluid">
            <a class="navbar-brand headerBrand text-bg-primary" href="#">
                MS MANGA
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <form class="container-fluid justify-content-start">
                    <a href="index.php" class="btn me-2 text-bg-primary" id="mangaOnline" type="button">MANGA ONLINE</a>
                    <a href="newest.php" class="btn  me-2 text-bg-primary" id="newestManga" type="button">NEWEST MANGA</a>
                </form>
                <form class="d-flex userlogout" role="search">
                <a class="btn  me-2 text-bg-primary" href="login.php" type="button" id="login">LOGIN</a>
                <a class="btn  me-2 text-bg-primary" href="register.php" type="button" id="register">REGISTER</a>
                </form>
                <form class="d-flex userlogin" id="logout" role="search">
                <a class="btn  me-2 text-bg-primary" href="#" type="button">LOGOUT</a>
                </form>
               
            </div>
        </div>
    </nav>
</body>
<script type="text/javascript" src="./js/header.js"></script>
</html>

