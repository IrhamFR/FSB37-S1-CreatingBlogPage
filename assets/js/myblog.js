let myblogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let myblog = {
        title,
        content,
        image,
    }

    myblogs.push(myblog)
    rendermyblogs()
}

function rendermyblogs() {

    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < myblogs.length; i++) {
        containerBlogs.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${myblogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="myblog-detail.html" target="_blank">${myblogs[i].title}</a>
                </h1>
                <div class="detail-blog-content">
                10 Jul 2022 10:30 WIB | Irham Fatriyandas Rufdo
                </div>
                <p>
                    ${myblogs[i].content}
                </p>
                <br>
                <br>
                <br>
                <div style="text-align: right;
                margin: 20px">
                    <span style="font-size: 15px; color: grey;">9 hour ago</span>
                </div>
            </div>
        </div>  
        `
    }
}