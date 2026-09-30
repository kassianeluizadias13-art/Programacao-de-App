// alert("conectou")
    var posts = [
        {
            id: 1,
                user:{ 
                nickname: "kassy",
                local: "Blumenau - SC",
                userImg: "https://github.com/kassianeluizadias13-art.png",
                },
            image:"https://th.bing.com/th/id/OIP.304eJuGsnyZKr-dx0KKfrQHaEK?w=296&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            likes: 0,
            legend:"amo",
            comments: [
                {
                    id:1,
                    username: "yuri",
                    text: "amoo",
                    data:"2026-09-28T19:24:00"
                },
                {
                    id:2,
                    username: "yuri",
                    text: "legaall",
                    data:"2026-09-28T19:24:00"
                }
            ],
            isLike: false,
            data:"2026-09-28T19:24:00",
        
        },
        {
            id: 1,
                user:{ 
                nickname: "kassy",
                local: "Blumenau - SC",
                userImg: "https://github.com/kassianeluizadias13-art.png",
                },
            image:"data:image/jpeg;base64,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",
            likes: 0,
            legend:"amo",
            comments: [
                {
                    id:1,
                    username: "yuri",
                    text: "amoo",
                    data:"2026-09-28T19:24:00"
                },
                {
                    id:2,
                    username: "yuri",
                    text: "legaall",
                    data:"2026-09-28T19:24:00"
                }
            ],
            isLike: false,
            data:"2026-09-28T19:24:00",
        
        }
        
    ]

    const feed = document.getElementById("feed");
    const botaoAbrir = document.getElementById("botaoAbrirModal")
    const botaoFechar = document.getElementById("botaoFecharModal")
    const modal = document.getElementById("modalPost")

    botaoAbrir.addEventListener("click", () => {
       modal.classList.remove("hidden")
    })

    botaoFechar.addEventListener("click", () =>{
        modal.classList.add("hidden")
    })

        function renderPonts() {
            feed.innerHTML = ""
            

            for(var post of posts){
                var article = document.createElement("article")
                var commentsHTML = ""
            for(var comments of post.comments){
                commentsHTML += `<p class="comment">
                        <strong>${comments.username}</strong>
                    
                        ${comments.text}
                    </p>`
            }
                article.innerHTML = ` <header class="post-header">
                <div class="post-user">
                    <img src="${post.user.userImg}" >
                    <div>
                        <strong>kassy</strong>
                        <span>Blumenau - SC</span>
                    </div>
                </div>
                <button class="more">
                    •••
                </button>

            </header>
            <img src="${post.image}" class="post-image" > 
            <div class="post-actions">
                <div>
                    <button>♡
                    </button>
                    <button>○
                    </button>
                    <button>➤
                    </button>
                </div>
                <button>▱
                </button>
            </div>
                <div class="post-info">
                    <strong>${posts.likes}</strong>
                    
                    ${commentsHTML}
                    <a href="#">Ver todos os 5 comentarios</a>
                    <span class="post-date">Há 1h</span>
                </div>
            </div>
            
        
               
            `
          
            
            feed.appendChild(article)
            }
        }
        renderPonts()