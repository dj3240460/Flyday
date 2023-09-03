document.addEventListener("DOMContentLoaded",function(){
    
	const addpkg = document.getElementById("addpkg");
	const storePics = document.getElementsByClassName("store-pic");
	const mypkglist = document.getElementById("mypkglist")

    fetch('/flyday/pkg/selectstoreno',{
    	method: "POST",
        headers:  { "Content-Type": "application/json" },
        body: JSON.stringify({
            storeNo: sessionStorage.getItem("storeNo")
        })
    })
    .then(function(resp){
        return resp.json()
    }).then(datas => {
            datas.forEach(data => {
                mypkglist.innerHTML +=
                `<div class="card shadow p-2">
<div class="row g-0">
    <!-- Card img -->
    <div class="col-md-3">
        <img src="data:image/jpeg;base64,${data.pkgPicBase64}" alt="Card image">
    </div>

    <!-- Card body -->
    <div class="col-md-9">
        <div class="card-body d-flex flex-column h-100 py-md-2">


            <!-- Title -->
            <h5 class="card-title mb-1"><a>${data.pkgName}</a></h5>
            <small><i class="bi bi-geo-alt me-2"></i>${data.pkgAddress}</small>
            
            <!-- Price and Button -->
            <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                
                <!-- Price -->
                <div class="mt-3 mt-sm-0">
                    <a class="btn btn-sm btn-dark w-100 mb-0 pkgno" id="${data.pkgNo}">查看/修改</a>    
                </div>                  
            </div>
        </div>
    </div>
</div>
</div>`
            });
        })

	console.log("1");
	const bt2Elements = document.getElementsByClassName("pkgno");
	console.log("2");
	console.log(bt2Elements);
	
	for(let bt2 of bt2Elements){
		console.log("3");
		bt2.addEventListener("click", function(){
			console.log("4");
	   		console.log(bt2.id);
	   	})
	}
	

	
	
    
    
	addpkg.addEventListener("click", function(){
	    location = "pkgadd.html"
	})
	
	function storename(){
	        document.getElementById("storename1").textContent = sessionStorage.getItem("storeName");
	        document.getElementById("storename2").textContent = sessionStorage.getItem("storeName");
	        for(let storePic of storePics){
        			const picBase64Url = sessionStorage.getItem("storePicBase64");
        			storePic.setAttribute("src", "data:image/jpeg;base64," + picBase64Url); 
      			}
	}
	
	storename();
})
