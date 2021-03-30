function _createRecentArticle(articles){
    const recentArticle = document.querySelector('.content');
    const _recentArticle = document.createElement('div');
    previewContent = articles[0].content.substring(0,267);
    _recentArticle.classList.add("recent-articles");
    _recentArticle.insertAdjacentHTML("afterbegin",`
    <div class="blogArticle-before-before-title"><h3>Recent Articles</h3></div>
    <div class="blogArticle-before-title">Learn from the top thought leaders in the industry.</div>
    <div class="blogArticle-common"><div class="blogArticle-img">${articles[0].img}</div>
    <div class="blogArticle-title">${articles[0].title}</div>
    <div class="blogArticle-date">${articles[0].date}</div>
    <div class="blogArticle-content">${previewContent}...</div>
    </div>  `);
    
    recentArticle.appendChild(_recentArticle);


}
function aboutdomloaded(){
    _createRecentArticle(articles);
}
document.addEventListener("DOMContentLoaded",aboutdomloaded);
