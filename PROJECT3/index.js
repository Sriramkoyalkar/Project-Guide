console.log("This is my index js file");


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
let xhr = new XMLHttpRequest();
//api copied from gnew api website..!
xhr.open('GET', `https://gnews.io/api/v3/search?q=example&token=dd9b4ced6d546b604dd99ffeb6002ee9`, true);



//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card" style = "background-color: #C4E2DE;>
                            <div class="card-header"id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()





