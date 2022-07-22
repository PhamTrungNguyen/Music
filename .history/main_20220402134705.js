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

    const listItem = document.querySelectorAll(".album-item")

    const list= ["ChacAiDoSeVe.mp3", "ChayNgayDi.mp3", "CoChacYeuLaDay.mp3", "HayTraoChoAnh.mp3", "LacTroi.mp3", "MuonRoiMaSaoCon.mp3", "NoiNayCoAnh.mp3"];
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
    // phát nhạc
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
    let index = 0;
    next.addEventListener("click", function(){
      
        changeMusic(1);
    })
    prev.addEventListener("click", function(){
        changeMusic(-1);
    })
    // kéo  thời lượng
    bar.addEventListener("change", function(){
        
        song.currentTime = bar.value;
    })
    // tự chuyển nhạc khi hết bài
    song.addEventListener("ended", function(){
        if(random.classList.contains("active")){
            console.log("random");
            changeMusic(2);
        }
        else{
            changeMusic(1);
        }
    })
    reload.addEventListener("click", function(){
        song.currentTime = 0;
    })
    random.addEventListener("click", function(){
        random.classList.toggle("active");
    })
    let lastName;
    // item-list
    [...listItem].forEach( item => item.addEventListener("click",itemClick));
    function itemClick(e){
       e.target
    }
    function changeMusic(x){
        if(x===1){ // next
            index++;
            // console.log(index)
            // console.log(list1.length);
            if(index > list1.length -1) { index =0 }
            song.setAttribute("src",`./audio/${list1[index].link}`);
            playerName.textContent =`${list1[index].name}`
            playerAuthor.textContent =`${list1[index].author}`
            song.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            playerWave.classList.add("loader");
            playing= false;
        }
        else if(x===-1) //prev
        {
            index--;
            console.log(index)
            if(index <= 0 ) { index = list1.length -1 }
            song.setAttribute("src",`./audio/${list1[index].link}`);
            playerName.textContent =`${list1[index].name}`
            playerAuthor.textContent =`${list1[index].author}`
            song.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            playerWave.classList.add("loader");
            playing= true;
        }
        else if(x===2)
        {
            let index =Math.floor(Math.random()*list1.length);
           
            if(lastName != list1[index].name){
                console.log(index);
                song.setAttribute("src",`./audio/${list1[index].link}`)
                playerName.textContent = list1[index].name;
                playerAuthor.textContent =  list1[index].author;
                song.play();
                play.classList.remove("fa-play");
                play.classList.add("fa-pause");
                playerWave.classList.add("loader");
                playing= false;
            }
            else{
                changeMusic(1);
            }
            lastName = list1[index].name}
    }
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
    },990)
})
 
