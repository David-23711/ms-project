<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <title>Login Form</title>
    <style>
        body {
            height: 100%;
            background-color: #fff;
            font-family: "Roboto", sans-serif;
        }

        .global-container {
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: deepskyblue;
            position: relative;
        }

        .loginform {
            padding-top: 15px;
            font-size: 14px;
            margin-top: 10px;
        }

        .login-form {
            width: 380px;
            height: 550px;
            margin: 20px;
            background: #0D47A1 !important;
            border-radius: 10px;
        }

        input[type="email"],
        input[type="password"] {

            border: 2px solid deepskyblue;
            border-radius: 10px;
            margin-bottom: 25px;
        }

        /* input[type="email"]:focus,
      input[type="password"]:focus{
        outline: none;
        border: none;
        background: white;
        margin: 0;
      } */
        .card-title {
            font-weight: 900;
            padding-top: 20px;

        }

        .signinbtn {
            background: #0db8de;
            font-size: 14px;
            transform: translateY(10px);
            border-radius: 10px;
        }

        .signup {
            text-align: center;
            padding-top: 25px;
        }

        .avatar-frame {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            margin-top: 30px;
        }

        .image {
            width: 120px;
            height: 120px;
        }

        .loginAlert {
            position: absolute !important;
            right:5px;
            top: 5px;
        }
    </style>
</head>

<body class="d-flex flex-column min-vh-100">
    <?php require 'header.php' ?>
    <div class="global-container ">
        <div class="card login-form">
            <div class="card-body">
                <h1 class="card-title text-center">LOGIN</h1>
                <div class="cart-text">
                    <div class="avatar-frame">
                        <img src="./images/avatarpng.png" class="image" />
                    </div>
                    <form class="loginform">
                        <!-- take value of email and password -->
                        <div class="form-group">
                            <label for="please enter your email">Email Address</label>
                            <input type="email" value="" class="form-control form-contorl-sm" id="email" placeholder="please enter your email">
                        </div>
                        <div class="form-group">
                            <label for="please your Password">Password</label>
                            <input type="password" value="" class="form-control form-contorl-sm" id="password" placeholder="please your password">
                        </div>
                        <!-- take class and addevent -->
                        <button class="btn btn-primary btn-block signinbtn">Sign In
                        </button>
                        <div class="signup">
                            Don't have an account?
                            <a href="#">Create One</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="alertbox" >
         <!-- message goes here -->
        </div>
    </div>
</body>
<footer class="mt-auto">
    <?php require 'footer.php' ?>
</footer>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="./js/login.js"></script>

</html>