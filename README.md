# szo.design@tutanota.com
# Tech News

 - When the page opens for the first time in a browser - and only for the first time(!) - the user is redirected to a landing page.
 - No image or third party library is used.
 - The page is fancy on all devices chrome can simulate
 - The page contains one component that is also used on the wall as a loading mask.

 - The app uses an API key from environment variables, and uses it to fetch the news.
 - NewsAPI is not fetched for every request, but still, fresh news are served.
 - The client (browser) never receives an article, that it had already received.

 - When the user scrolls down to the oldest news, the app fetches the backend for older articles.
 - The newest article is always on the top, in a highlighted position.
 - When the new news are being fetched, a loading mask is presented.
