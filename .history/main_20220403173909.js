window.addEventListener("load", function(){
    const song = document.querySelector("#song");
    const playImage = document.querySelector(".player-image")
    
    const reload = document.querySelector(".player-reload")
    const prev = document.querySelector(".player-prev")
    const play = document.querySelector(".player-play")
    const next = document.querySelector(".player-next")
    const random = document.querySelector(".player-random")
    const start = document.querySelector(".player-start")
    const end = document.querySelector(".player-end")
    const bar = document.querySelector(".bar")

    const playerName = document.querySelector(".player-name")
    const playerAuthor = document.querySelector(".player-author")
    const playerWave = document.querySelector(".player-wave")

    const listItemMusic = document.querySelectorAll(".album-item")
    const listAlbum = document.querySelectorAll(".album-list")
    const listAlbumAuthorItem = document.querySelectorAll(".albumAuthor-item")
   
    const list1 = [
        {
            name: "Chắc Ai Đó Sẽ Về",
            link: "ChacAiDoSeVe.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "Chạy Ngay Đi",
            link: "ChayNgayDi.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "Chắc Có Yêu Là Đây",
            link: "CoChacYeuLaDay.mp3",
            author: "Sơn Tùng M-TP",
        },      
        {
            name: "Hãy Trao Cho Anh",
            link: "HayTraoChoAnh.mp3",
            author: "Sơn Tùng M-TP x Snoop Dogg",
        },      
        {
            name: "Lạc Trôi",
            link:  "LacTroi.mp3",
            author: "Sơn Tùng M-TP",
        },      
        {
            name: "Muộn Rồi Mà Sao Còn",
            link: "MuonRoiMaSaoCon.mp3",
            author: "Sơn Tùng M-TP",
        },      
        {
            name: "Nơi Này Có Anh",
            link: "NoiNayCoAnh.mp3",
            author: "Sơn Tùng M-TP",
        },      
    ]
    const list2 = [
        {
            name: "Hai Triệu Năm",
            link: "1HaiTrieuNam.mp3",
            author: "Đen",
        },
        {
            name: "Anh Đếch Cần Gì Ngoài Em",
            link: "1AnhDechCanGiNhieuNgoaiEm.mp3",
            author: "Đen",
        },
        {
            name: "Bài Này Chill Phết",
            link: "1BaiNayChillPhet.mp3",
            author: "Đen x Min",
        },      
        {
            name: "Cho Mình Em",
            link: "1ChoMinhEm.mp3",
            author: "Binz x Đen",
        },      
        {
            name: "Đi Về Nhà",
            link: "1DiVeNha.mp3",
            author: "Đen x JustaTee",
        },      
        {
            name: "Đưa Nhau Đi Trốn",
            link: "1DuaNhauDiTron.mp3",
            author: "Đen x Linh Cáo",
        },      
        {
            name: "Gieo Quẻ",
            link: "1GieoQue.mp3",
            author: "Hoàng Thùy Linh x Đen",
        },      
        {
            name: "Lối Nhỏ",
            link: "1LoiNho.mp3",
            author: "Đen",
        },      
        
    ]
    const list3 = [
        {
            name: "Yêu Như Trẻ Con",
            link: "2YeuNhuTreCon.mp3",
            author: "B Ray",
        },
        {
            name: "Ba DA Bum",
            link: "2Badabum.mp3",
            author: "B Ray",
        },
        {
            name: "Bản Nhạc Buồn",
            link: "2BanNhacBuon.mp3",
            author: "B Ray",
        },      
        {
            name: "Boy Mỹ Con",
            link: "2BoyMyCon.mp3",
            author: "B Ray",
        },      
        {
            name: "Cao Ốc 20",
            link: "2CaoOc20.mp3",
            author: "B Ray x DatG",
        },      
        {
            name: "Con Trai Cưng",
            link: "2ConTraiCung.mp3",
            author: "B Ray",
        },      
        {
            name: "Cưới Thôi",
            link: "2CuoiThoi.mp3",
            author: "Masew x Masiu x B Ray x TAP",
        },      
        {
            name: "Do For Love",
            link: "2DoForLove.mp3",
            author: "B Ray x Amee",
        },      
        {
            name: "Đừng Tin Her",
            link: "2DungTinHer.mp3",
            author: "B Ray x Young H x Masew",
        },      
        {
            name: "Hoàn Hảo",
            link: "2HoanHao.mp3",
            author: "B Ray",
        },      
        {
            name: "Xin Đừng Nhấc Máy",
            link: "2XinDungNhacMay.mp3",
            author: "B Ray x Han Sara",
        },      
        
    ]
    const list4 = [
        {
            name: "iii",
            link: "ChacAiDoSeVe.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "ooo",
            link: "ChayNgayDi.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "ppppp",
            link: "CoChacYeuLaDay.mp3",
            author: "Sơn Tùng M-TP",
        },      
        
    ]
    const list5 = [
        {
            name: "jjjj",
            link: "ChacAiDoSeVe.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "kkkk",
            link: "ChayNgayDi.mp3",
            author: "Sơn Tùng M-TP",
        },
        {
            name: "lllll",
            link: "CoChacYeuLaDay.mp3",
            author: "Sơn Tùng M-TP",
        },      
        
    ]
    // đĩa quay
    let playing= true;
    const cdImage = playImage.animate([
        {transform: 'rotate(360deg)'}
    ],{
        duration: 10000,  
        iterations: Infinity 
    });
    cdImage.pause();
    // -------------------------------phát nhạc
    play.addEventListener("click", function(e) {
        if(playing) {
            song.play();
            cdImage.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            playerWave.classList.add("loader");
            playing= false;
            
        }
        else{
            cdImage.pause();
            song.pause();
            play.classList.add("fa-play")
            play.classList.remove("fa-pause")
            playerWave.classList.remove("loader");
            playing= true;
            
        }
    })
 

    next.addEventListener("click", function(e){
        console.log(localStorage.getItem("listAuthor"))
        customMusic(1)
    })
    prev.addEventListener("click", function(e){
        // changeMusic(-1);
        customMusic(-1)
    })
    
    // -------------------------------kéo  thời lượng
    bar.addEventListener("change", function(){
        
        song.currentTime = bar.value;
    })
    // -------------------------------tự chuyển nhạc khi hết bài
    song.addEventListener("ended", function(){
        if(random.classList.contains("active")){
            console.log("random");
            customMusic(2);
        }
        else{
            
            customMusic(1);
        }
    })
    // thay đổi nhạc
    function customMusic(x){
        if(localStorage.getItem("listAuthor") == 0)
        {
            if(x==1) changeMusic(1,list1);
            else if (x==-1) changeMusic(-1,list1);
            else if(x==2) changeMusic(2,list1);
          
        }
        else if(localStorage.getItem("listAuthor") == 1)
        {
            console.log(2)
            if(x==1) changeMusic(1,list2);
            else if (x==-1) changeMusic(-1,list2);
            else if(x==2) changeMusic(2,list2);
        }
        else if(localStorage.getItem("listAuthor") == 2)
        {
            if(x==1) changeMusic(1,list3);
            else if (x==-1) changeMusic(-1,list3);
            else if(x==2) changeMusic(2,list3);
        }
        else if(localStorage.getItem("listAuthor") == 3)
        {
            if(x==1) changeMusic(1,list4);
            else if (x==-1) changeMusic(-1,list4);
            else if(x==2) changeMusic(2,list4);
        }
        else if(localStorage.getItem("listAuthor") == 4)
        {
            if(x==1) changeMusic(1,list4);
            else if (x==-1) changeMusic(-1,list4);
            else if(x==2) changeMusic(2,list4);
        }
    }
    reload.addEventListener("click", function(){
        song.currentTime = 0;
    })
    random.addEventListener("click", function(){
        random.classList.toggle("active");
    });
    
    //------------------------------- item-list : click vào list nhạc đổi tên bên phát nhạc
    [...listItemMusic].forEach( item => item.addEventListener("click", function(e){
        if(localStorage.getItem("listAuthor") == 0)
        {
           itemClick(e,list1);
          
        }
        else if(localStorage.getItem("listAuthor") == 1)
        {
            itemClick(e,list2);
        }
        else if(localStorage.getItem("listAuthor") == 2)
        {
            itemClick(e,list3);
        }
        else if(localStorage.getItem("listAuthor") == 3)
        {
            itemClick(e,list4);
        }
        else if(localStorage.getItem("listAuthor") == 4)
        {
            itemClick(e,list5);
        }
    }));
    function itemClick(e,obj){
        [...listItemMusic].forEach(item => { item.classList.remove("active") });
        e.currentTarget.classList.add("active");
        localStorage.removeItem("data");
        // chuyển list nhạc theo obj khi click vào list thì đổi tên bên phát nhạc và thêm active
        let data= e.currentTarget.dataset.music;
        localStorage.setItem("data",data);
        console.log(localStorage.getItem("data"));
        song.setAttribute("src",`./audio/${obj[data].link}`)
        playerName.textContent =`${obj[data].name}`
        playerAuthor.textContent =`${obj[data].author}`
        song.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        playerWave.classList.add("loader");
        playing= false;
        console.log(data);
    }
    //------------------------------- function chuyển nhạc
    let index = 0;
    let lastName; // dùng để kt random (x=2)
    function changeMusic(x,list){
        if(x===1){ // next
            index++;
            if(index > list.length -1) { index =0 }
            song.setAttribute("src",`./audio/${list[index].link}`);
            playerName.textContent =`${list[index].name}`;
            playerAuthor.textContent =`${list[index].author}`;
             
            // item-list : nhấn chuyển bài thì thêm active vào list nhạc
            [...listItemMusic].forEach(function(item) {
                item.classList.remove("active")
                let data = item.dataset.music;
                if(data == index)
                {
                    item.classList.add("active");
                }
            })
            
            song.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            playerWave.classList.add("loader");
            playing= false;

        }
        else if(x===-1) //prev
        {
            index--;
            // console.log(index)
            if(index <= 0 ) { index = list.length -1 }
            song.setAttribute("src",`./audio/${list[index].link}`);
            playerName.textContent =`${list[index].name}`;
            playerAuthor.textContent =`${list[index].author}`;
            // item-list : nhấn chuyển bài thì thêm active vào list nhạc
            [...listItemMusic].forEach(function(item) {
                item.classList.remove("active")
                let data = item.dataset.music;
                if(data == index)
                {
                    item.classList.add("active");
                }
            })
            song.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            playerWave.classList.add("loader");
            playing= true;
        }
        //--------------phát ngẫu nhiên
        else if(x===2)
        {
            let index =Math.floor(Math.random()*list.length);
           
            if(lastName != list[index].name){
                // console.log(index);
                song.setAttribute("src",`./audio/${list[index].link}`)
                playerName.textContent = list[index].name;
                playerAuthor.textContent =  list[index].author;
                song.play();
                play.classList.remove("fa-play");
                play.classList.add("fa-pause");
                playerWave.classList.add("loader");
                playing= false;
            }
            else{
                changeMusic(1);
            }
            lastName = list[index].name}
    }


    //------------------------------- AlbumAuthorItem 
    [...listAlbumAuthorItem].forEach(item =>  item.addEventListener("click",clickAlbumAuthorItem) );
    function clickAlbumAuthorItem(e){
        let dataAlbumAuthor 
        [...listAlbumAuthorItem].forEach(function(item) {
             dataAlbumAuthor =  e.currentTarget.dataset.item;
             item.classList.remove("active");
             e.currentTarget.classList.add("active");

             // click vào AlbumAuthor  gắn giá trị cho listAuthor vào local
        if(e.currentTarget.dataset.item == 0)
             {  
                 localStorage.removeItem("listAuthor");
                 localStorage.setItem("listAuthor",0)
             }
        else if(e.currentTarget.dataset.item ==1)
             {
                localStorage.removeItem("listAuthor");
                localStorage.setItem("listAuthor",1)
             }
        else if(e.currentTarget.dataset.item ==2)
             {
                localStorage.removeItem("listAuthor");
                localStorage.setItem("listAuthor",2)
             }
        else if(e.currentTarget.dataset.item ==3)
             {
                localStorage.removeItem("listAuthor");
                localStorage.setItem("listAuthor",3)
             }
        else if(e.currentTarget.dataset.item ==4)
             {
                localStorage.removeItem("listAuthor");
                localStorage.setItem("listAuthor",4)
             } 
        });
        // chuyển list album theo albumAuthor
        [...listAlbum].forEach(function(item) {
            item.classList.remove("active")
            if(item.getAttribute("data-list")==dataAlbumAuthor)
            {
                item.classList.add("active")
            } 
        })
        
      
    }
     //------------------------------- function hiển thị thời gian
    function displayTime() {
        // duration : tong tg
        // currentTime : tg chay
        const {duration,currentTime}= song;
        // console.log(duration);
        // console.log(currentTime);
     
        
        let minutes = parseInt(duration / 60);
        let seconds = parseInt(duration % 60);
        start.textContent = `${minutes}:${seconds<=9 ? `0`+seconds : seconds}`;
        let minutes1 = parseInt(currentTime / 60);
        let seconds1 = parseInt(currentTime % 60);
        end.textContent = `${minutes1}:${seconds1<=9 ? `0`+seconds1 : seconds1}`;
        bar.max= duration;
        bar.value =currentTime;
        
        
     }
    setInterval(function() {
         displayTime();
    },990);

})
 
