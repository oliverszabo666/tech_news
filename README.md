# szo.design@tutanota.com
# Tech News

 - When the page opens for the first time in a browser for the first time the user is redirected to the landing page.
 - No image or third party library is used.
 - The app is responsive.
 - The app uses an API key from environment variables, and uses it to fetch the news.
 - The NewsAPI is not fetched for every request, but still, fresh news are served.
 - The client never receives an article, that it has already received.
 - When the user scrolls down to the oldest news, the app fetches older articles from the server.
 - The newest article is always on the top.
 - When the new news are being fetched, a loading mask is presented.



# Landing Page - Text Animation
It looks kinda sketchy on a screenshot.
![mocknews1](https://user-images.githubusercontent.com/48241538/116901888-c1891800-ac3a-11eb-8b8d-4d4456e74686.png)

# Article
This is how an article is structured. the API we used did not contain the proper data for the whole article, but with the button you could extend it to read it further.
![mocknews2](https://user-images.githubusercontent.com/48241538/116902095-057c1d00-ac3b-11eb-89d6-555b20d2c1de.png)


