let page = 1;
let pagelimit = 6;
let totalrecord = 0;
const baseUrl = "http://127.0.0.1:8000/api";
const fetchManga = (search) => {
  axios
    .get(`${baseUrl}/admin/fetchLatestManga?page=${page}`)
    .then((response) => {
      let datas = response.data.data;
      console.log(datas);
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
                           <li class="list-group-item d-flex justify-content-between align-items-start">
                           <div class="ms-2 me-auto">
                               <div class="fw-bold">Upload Time</div>
                               ${ moment(i?.created_at).fromNow() }
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
fetchManga();
