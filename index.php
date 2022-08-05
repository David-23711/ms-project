<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
</head>
<style>
    .imageSize {
        width: 100%;
        height: 209px;
        border-radius: 5px;
    }

    @media only screen and (max-width:580px) {
        .imageSize {
            height: 100%;
            max-height: 550px;
        }
    }

    .setHeight {
        height: 100vh !important;
    }
</style>

<body class="d-flex flex-column min-vh-100">
    <div>
        <div>
            <?php include 'header.php' ?>
        </div>
        <div class="container pt-3 mainContainer">
            <ul class="nav nav-tabs genre " id="myTab" role="tablist">
                <!-- fetch all genre -->
                <li class="nav-item" id="home-li" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Latest</button>
                </li>

                <!---- --->
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div class="card mt-3 text-end">
                        <div class="card-body d-flex justify-content-end">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" id="search" value="" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-primary" id="searchBtn" type="submit">
                                    <span class="mt-2"> <i class="fas fa-search"></i> </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="row ">
                                <!-- fetch card data here with axios -->
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
        </div>
    </div>
</body>
<footer class="mt-auto">
    <?php include 'footer.php' ?>
</footer>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="./js/main.js"></script>

</html>