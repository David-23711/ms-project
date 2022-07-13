<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
    <title>Manga</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body  class="d-flex flex-column min-vh-100">
    <div>
        <header class="h">
            <?php require 'header.php' ?>
        </header>
    </div>
    <div class="p-main">
<div class="containerReg">
    <div class="title">Enter Name And Email</div>
    <div class="rowReg"></div>
                <div>
                    <input class="name" value="" type="text" placeholder="Name">
                </div>
                <div>
                    <input  class="email" type="text" name="email" placeholder="Email" value="">
                </div>
                <div>
                    <input class="password" type="password" name="first_name" placeholder="Password" value="">
                </div>
                <div>
                    <input class="conpas" type="password" name="sec_name" placeholder="Confirm Password" value="">
                </div>
                <div>
                    <input id="ph" class="ph" type="phone" name="ph" placeholder="Phone" value="">
                </div>    
                <button type="button" class="button regbtn"><a class="LGB" href=""><span class="but">REGISTER</span></a></button>
</div>
<div class="alertbox" >
         <!-- message goes here -->

</div>
</div>
        <div class="b-main">
        <footer class="mt-auto">
            <?php require 'footer.php'?>
        </footer>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="./js/register.js"></script>
</html>