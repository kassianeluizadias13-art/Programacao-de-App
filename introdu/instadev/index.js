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
            comment: [
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

        function renderPonts() {
            feed.innerHTML = ""

            for(var post of posts){
                var article = document.createElement("article")
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
                    <p><strong>kassy</strong>
                        amo</p>
                    <a href="#">Ver todos os 5 comentarios</a>
                    <p class="comment">
                        <strong>${post.user.nickname}</strong>
                       ${posts.legend}
                    </p>
                    <span class="post-date">Há 1h</span>
                </div>
            </div>`
            feed.appendChild(article)
            }
        }
        renderPonts()