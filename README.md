# WebServices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## DONE:

PART - 1
[ ]add a link to app component that navigates to a searchHistory component. be sure to
      include a route for the searchHistory component

[ ]the search history component should include a link to navigate back to the app
      component when clicked

[ ]EXTRA CREDIT :: include a redirection route to handle redirecting to the app 
      component in situations where the user types an incorrect ur

PART - 2
[ ] In the app component bind an input element to capture the users search text

[ ]Create a service that searches wikipedia for the user search text and returns a promise
       that displays the results in the app component view. For example, a wiki search of 
      "dog" returns the text "Dog Dog meat Dogs in warfare Dog behavior …"

[ ]the search history component should display the users search history and a timestamp
      for each search. There should be a corresponding array storing the users searches

PART-3
[ ]create your own giphy account at the following url 
      "https://developers.giphy.com/explorer/" . you can login with a facebook
        account or using your email.
[ ]use the developers console to generate a query like the following request url for dog giphyus ..... https://api.giphy.com/v1/gifs/search?api_key=[YOUR-API-KEY]&q=dog&limit=5&offset=0&rating=G&lang=en

[ ]create a new service that sends a request to the giphy api using the above
       url. the returned search results should be a json payload containing giphys 
       related to the users search text.  The user search text should be added to
       the api request as the “q” parameter in the above url

[ ]in the app component display at least one of the giphy responsem images.    
                
[ ]Do this by creating an img element in the app component binding a
      giphy url to the src attribute of the image element. 
      

