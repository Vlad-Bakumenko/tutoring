# Image Spinner

In this exercise, we will simulate a "spinner" effect while the images are being loaded

- instead of fetching images, we will use the image links stored in an array from `imageLinks.js`

- to simulate the fetching time, we will use setTimeout() to delay the image loading

## Requirements

- Install styled-components `https://www.npmjs.com/package/styled-components`

- Please don't add any css outside of styled components

### [STEP 1] Coding - rendering images

- In `App.jsx`

  - Import the array of image links from `imageLinks.js`
  - Create an `ImgItem.jsx` component and import it
  - Map through the array, render an `ImgItem` for each image

- In `ImgItem.jsx`

  - Prepare to render the images/spinners
  - Take in the image `src` from props
  - Import `spinner-solid.svg` from the `images`
  - Render both the spinner(svg) and the source image(from imageLinks)

  - **when the component is loaded**, display `spinner-solid.svg` for 2 seconds and then display the source images. (hint: use conditional rendering depending on a boolean state)

### [STEP 2] Styling with Styled Components

- Now, time to create styled components and replace the HTML tags:

- You may create separate styled components and import them, or add them directly where they are needed.

  - `StyledImg` replaces <img> in `ImgItem.jsx`
  - `StyledDiv` replaces <div> in `App.jsx`
    - styling tips: make sure the images appear side by side, and all have the same height & width.

### [STEP 3: CHALLENGE] Use CSS animation with `keyframes` to rotate the spinner

- in `ImgItem.jsx`, import { keyframes } from the styled-components, along with `styled`

- create a variable called `rotate` and apply keyframes to give a rotating effect.

- in `App.css`, you will find a regular css syntax for Keyframes and animation as a reference.

- add a new property `animation` to `StyledImg`

- in `animation`, we will apply `rotate` which was declared above, with animation-timing-function, animation-duration, and animation-iteration-count.

-by using `props`, set `rotate` conditionally. Only when `rotate` tag is present in `StyledImg` component, the animation will effectively run.

- in `ImgItem.jsx`, add `rotate` tag in the <StyledImg /> which is used for the spinner image.

- now check if the spinner image rotates for 2 seconds when the component is loaded, and switch to mapped images.
