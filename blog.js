function _createBlogGallery(articles){
    for (let i=0; i< articles.length; i++){
        const _blogGallery = document.querySelector(".blog-gallery");
        const blogArticle = document.createElement("div");
        previewContent = articles[i].content.substring(0,267);
        blogArticle.classList.add("blogArticle");
        blogArticle.insertAdjacentHTML("afterbegin",`
            <div class="blogArticle-img">${articles[i].img}</div>
            <div class="blogArticle-title">${articles[i].title}</div>
            <div class="blogArticle-date">${articles[i].date}</div>
            <div class="blogArticle-content">${previewContent}...</div>
            `);
        _blogGallery.appendChild(blogArticle);
    }
}


let articles = [
     { //1st 
       img:'<img src="images/storyFilter.jpg" alt="Story Filter"',
       title:'How to Find a Perfect Hidden Instagram Story Filter',
       date:'<span class="published">Dec 23, 2019</span>',
       content:'As a dedicated Instagram user, you must have noticed what a variety of new filters and effects for Story videos and photos are already available thanks to Instagram AR creators. But did you know that there are thousands of magnificent Instagram Stories filters hidden...<br> <a href="blogArticle">read more</a>' 
    },

    { //2nd
        img:'<img src="images/storyAds.png" alt="Story Ads">',
       title:'Creating Instagram Story Ads',
       date:'<span class="published">Dec 22, 2019</span>',
       content:''
    },
    { //3rd
        img:'<img src="images/moreLeads2.jpg" alt="getting more leads on instagram"',
       title:'Getting More Leads on Instagram: Part Two',
       date:'<span class="published">Dec 19, 2019</span>',
       content:''
    },
    {
        img:'<img src="images/moreLeads.jpg" alt="more Leads on instagram"',
        title:'Getting More Leads on Instagram: Part One',
        date:'<span class="published">Dec 5, 2019</span>',
        content:'',
    },
    {
        img:'<img src="images/engagement.jpg" alt="Increase Engagement">',
        title:'Amazing Instagram Story Poll Ideas To Increase Engagement',
        date:'<span class="published">Dec 1, 2019</span>',
        content:'',
    },
    {
        img:'<img src="images/mental health.png" alt="mental health">',
        title:'Tips to Preserve Your Mental Health on Instagram',
        date:'<span class="published">Nov 30, 2019</span>',
        content:'',
    },
    {
        img:'<img src="images/animatedStories.jpg" alt="Animated Stories App">',
        title:'Best Applications for Creating Animated Instagram Stories',
        date:'<span class="published">Nov 28, 2019</span>',
        content:'',
    },
    {
        img:'<img src="images/StoriesCampaign2.jpg" alt="Planning Campaign part 2">',
        title:'Planning Your First Instagram Stories Campaign with InstaBF: Part Two',
        date:'<span class="published">Nov 25, 2019</span>',
        content:'',
    },
    {
        img:'<img src="images/StoriesCampaign.jpg" alt="Planning Campaign" class="image"',
        title:'Planning Your First Instagram Stories Campaign with InstaBF: Part One',
        date:'<span class="published">Nov 25, 2019</span>',
        content:'',
    },




];


function domloaded(){
    _createBlogGallery(articles);
}
document.addEventListener("DOMContentLoaded",domloaded);