let page = 1;
let pagelimit = 6;
let totalrecord = 0;
const baseUrl = "http://127.0.0.1:8000/api";
let searchBtn = document.getElementById("searchBtn");
console.log(location.pathname.split("/"));
const fetchManga = (search) => {
  axios
    .get(`${baseUrl}/admin/fetchingManga?page=${page}&search=${search}`)
    .then((response) => {
      let datas = response.data.data;
      totalrecord = response.data.total;
      displayPagination(totalrecord);
      let output = "";

      datas.map((i) => {
        output += `<div class="col-12 col-md-6 col-sm-6 col-lg-4 p-2">
            <div class="card" style="width: 100%;height:100%">
                <div class="card-body">
                <div class="rowContainer" >
                    <div class="row">
                       <div class="col-md-5">
                       <img class=" imageSize" src="${
                         i?.thumbnail_path
                           ? i?.thumbnail_path
                           : "../images/nofound.png"
                       }"  />
                   </div>
                   <div class="col-md-7">
                       <ul class="list-group ">
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                               <div class="ms-2 me-auto">
                                   <div class="fw-bold">Manga Name</div>
                                   ${i?.name}
                               </div>

                           </li>
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                               <div class="ms-2 me-auto">
                                   <div class="fw-bold">Author Name</div>
                                   ${i?.author_name}
                               </div>

                           </li>
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                               <div class="ms-2 me-auto">
                                   <div class="fw-bold">Release Date</div>
                                   ${i?.release_date}
                               </div>

                           </li>
                       </ul>
                       </div>
                       </div>
                    </div>

                </div>
                <div class="card-body">
                <div class="d-grid col-12 mx-auto">
                <a href="detail.php?id=${i?.id}" class="btn btn-primary" type="button" style="font-size:20px" >READ</a>
              </div>
                </div>
            </div>
        </div>`;
      });
      document.querySelector(".row").innerHTML = output;
    })
    .catch((error) => console.error(error));
};
const getGenres = () => {
  axios
    .get(`${baseUrl}/admin/fetchingGenre`)
    .then((response) => {
      const datas = response.data.data;
      let genreOutput = "";
      let outputTab = "";
      datas.map((i) => {
        genreOutput += ` <li class="nav-item" role="presentation"><button class="nav-link" id="${i.id}-tab" data-bs-toggle="tab" data-bs-target="#n${i.id}-tab-pane" type="button" role="tab" aria-controls="${i.name}-tab-pane" aria-selected="false">${i.name}</button></li>`;
        outputTab += `<div class="tab-pane fade" id="n${i.id}-tab-pane" role="tabpanel" aria-labelledby="${i.name}-tab" tabindex="${i.id}">
        <div class="card mt-3 text-center">
                        <div class="card-body d-flex justify-content-end py-4">
                        </div>
                    </div>
        <div class="card mt-3">
        <div class="card-body">
            <div class="row" id="${i.id}">
                <!-- fetch card data here with axios -->
            </div>
        </div>
    </div>
        </div>`;
      });
      let frame = document.querySelector(".genre");
      frame.children[0].insertAdjacentHTML("afterend", genreOutput);
      let tabframe = document.querySelector(".tab-content");
      tabframe.children[0].insertAdjacentHTML("afterend", outputTab);
      fetchMangaByGenreId();
    })
    .catch((error) => console.log(error));
};
const displayPagination = (totalrecord) => {
  let ul = document.querySelector(".pagination");

  let paginate = Math.ceil(totalrecord / pagelimit);
  let ulOutput = "";
  for (let i = 1; i <= paginate; i++) {
    if (page == i) {
      ulOutput += `<li class="page-item ${"active"}"><a class="page-link" href="#">${i}</a></li>`;
    } else {
      ulOutput += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    }
  }
  ul.innerHTML = ulOutput;
  clickPagination();
};
const clickPagination = () => {
  let allpaginate = document.querySelectorAll(".page-item");
  for (let i = 0; i < allpaginate.length; i++) {
    showResult(allpaginate, i);
  }
};
const showResult = (allpaginate, i) => {
  allpaginate[i].addEventListener("click", function () {
    page = i + 1;
    fetchManga();
  });
};
const fetchMangaByGenreId = () => {
  const parent = document.querySelectorAll(".nav-item");
  for (let i = 1; i < parent.length; i++) {
    parent[i].children[0].addEventListener("click", function () {
      const id = this.id.slice(0, 2);
      axios
        .get(`${baseUrl}/admin/fetchingMangaByGenreId/${id}`)
        .then((resp) => {
          let output = "";
          resp.data.map((i) => {
            output += `<div class="col-12 col-md-6 col-sm-6 col-lg-4 p-2">
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${
                              i?.thumbnail_path
                                ? i?.thumbnail_path
                                : "../images/nofound.png"
                            }" class="imageSize" />
                        </div>
                        <div class="col-md-7">
                            <ul class="list-group ">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Manga Name</div>
                                        ${i?.name}
                                    </div>
    
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Author Name</div>
                                        ${i?.author_name}
                                    </div>
    
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Release Date</div>
                                        ${i?.release_date}
                                    </div>
    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                <div class="d-grid col-12 mx-auto">
                <a href="detail.php?id=${i?.id}" class="btn btn-primary" type="button" style="font-size:20px" >READ</a>
              </div>
                </div>
            </div>
        </div>`;
          });
          document.getElementById(`${id}`).innerHTML = output;
        });
    });
  }
};
searchBtn.addEventListener("click", function (event) {
  let searchValue = document.getElementById("search").value;
  event.preventDefault();
  page = 1;
  fetchManga(searchValue);
});

getGenres();
fetchManga();
