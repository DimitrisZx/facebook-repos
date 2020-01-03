# Technologies Used

* React
* JSS
* Fort-Awesome React Library: 

## Structure

For the project's structure I went for single level nesting because I believed the project would not get too complicated and as such not a lot of components would be made.

Inside the "components" folder, at the project's root level, are located all the individual component files with any helper files each component utilizes.

All my components, except from the "App" component, are functional, stateless components with logic that is limited to how the component will modify and display the data that are passed down from the main, parent component. 

## Styling

For styling I initially considered using SASS and placing a style file in each component's folder. However, remembering the question I asked you during the interview about what CSS framework you are using in the real project, I decided to research and use this **JSS** [library](https://cssinjs.org/jss-plugin-nested?v=v10.0.1).

For the majority of the styling process I felt right at home with JSS, except from the times I wanted to write styles for a list item that was the nth item in its list.

 I tried the following:  
 ``` javascript
 parentRule: {
    //  * more styles *
    "&:last-child": {
    //  * styles * 
    },
 }
 ```
but I could not make it work, so I resorted to writing a duplicate style. Howeverm "&:hover": worked just fine.

I thought of extracting the styles in an external js file but I felt that it would make the structure more complex, without adding any real value. 

For the class-based App component I used inline styles because the styles generated from the JSS library I used were based on Hooks and I wanted to focus more on the logic instead of figuring out how to make it work for class components.

### Spinner / Loader
The loader I used is custom made from [loading.io](https://loading.io/).

### Custom Styling

During the initial development process I sticked to the wireframe's choice of colors and general styling.

However, after finishing the logic part I decided to spice it up a little with a more pleasant main color and more modern styling (I've searched for inspiration on [dribbble](https://dribbble.com/)).

### Icons

For the icons that needed to be shown I used the [fort-awesome](https://github.com/FortAwesome/react-fontawesome) library which utilizes the [font-awesome](https://fontawesome.com/) icons and offers a convenient React component that takes the desired icon's name as a prop.


## Logic

The API call is done with the **fetch API** and I decided to filter out all the data that are not displayed in the UI from each object of the response and save their minimized versions in the state.

For managing the state I used the simple method of just passing the necessary items as props down the component tree. I considered using a library like Redux, but since I am not too familiar with it yet, I thought it would hinder the development more than help it. 

What is more, there was not a lot of data that needed to be passed down.

__important !__ \
Github has a limit on the API calls you can perform in a single hour, which is capped at 60 calls. The overcome this problem, I saved a response in an external js file and loaded the data from this file instead.

I am pointing this out, so that the people who might be asked to do this exercise in the future will be aware of this problem.
