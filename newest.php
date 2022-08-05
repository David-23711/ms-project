<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />

</head>
<style>
    .img {
        width: 200px;
        height: 200px;
    }

    .imageSize {
        width: 100%;
        height: 233px;
        border-radius: 12px;
    }
</style>

<body class="d-flex flex-column min-vh-100">
    <div>
        <?php include 'header.php' ?>
        <div class="container pt-3 px-10">
            <div class="card mt-3 text-end">
                <div class="card-body d-flex justify-content-center">
                    <h3>NEWEST MANGA</h3>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="row">
                       

                    </div>
                </div>
            </div>
            <div class="card my-3 text-center">
                        <div class="card-body d-flex justify-content-center">

                            <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-md">
                                <!-- pagination goes here -->
                                </ul>
                            </nav>
                        </div>
                    </div>
        </div>

    </div>
</body>
<footer class="mt-auto">
    <?php include 'footer.php' ?>
</footer>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="./js/newest.js"></script>
<script type="text/javascript" src="./js/moment.js"></script>

</html>