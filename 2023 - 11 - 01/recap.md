# Recap (Grid, Positioning)
## Grid

- The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
- A grid layout consists of a parent element, with one or more child elements.Example:
     
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div> 

- An HTML element becomes a grid container when its display property is set to grid :

      .grid-container {
         display: grid;
      }

- All **direct children** of the grid container automatically become **grid items**.

- Structure :
  <br>
  1. **Columns** - The vertical lines of grid items are called columns.

  ![Grid Columns](https://www.w3schools.com/css/grid_columns.png)
  <br>

  2. **Rows** - The horizontal lines of grid items are called rows.

  ![Grid Rows](https://www.w3schools.com/css/grid_rows.png)
  <br>
  3. **Gap** - The spaces between each column/row. 

  ![Grid Gaps](https://www.w3schools.com/css/grid_gaps.png)

  You can adjust the gap size by using one of the following properties:

  - column-gap
  - row-gap
  - gap
  The `gap` property is a shorthand property for the `row-gap` and the `column-gap` properties.

  4. **Grid Lines**

The lines between columns are called column lines.
The lines between rows are called row lines.
![Grid Gaps](https://www.w3schools.com/css/grid_lines.png)

  5. **Definition of size and number of rows and columns**:
  - `grid-template-columns` - Defines width and number of columns
  Example: 
  `grid-template-columns: 200px 1fr 1fr;`
  <br>
  - `grid-template-rows` - Defines height and number of rows
  Example: 
  `grid-template-rows: 200px repeat(2, 400px)`
  <br>
  - `grid-auto-columns` - sets a size for the columns in a grid container.This property affects only columns with the size not set.
  Example:
  `grid-auto-columns: 200px;`
  <br>
  - `grid-auto-rows` - sets a size for the rows in a grid container.This property affects only rows with the size not set.
  Example: 
  `grid-auto-rows: 200px;`
  <br>
  - Ways to define height/width of rows/columns:
                - px, rem, em, %, vh, vw
                - Fraction of available height/width: e.g. 1fr, 2fr etc.
                    * Fraction is often recommended for grids!
                - If columns/rows are equal, you can also use `repeat()`: e.g. `repeat(4, 1fr)`
                - To set a minimum/maximum height/width, use `minmax()`: e.g. `minmax(100px, 400px)`
                - `auto-fill`: Fit as many possible columns as possible on a row, even if they are empty.
                - `auto-fit`: Fit whatever columns there are into the space. Prefer expanding columns to fill space rather than empty columns.
    <br>
  - The `grid-template-areas` CSS property specifies named grid areas, establishing the cells in the grid and assigning them names. Example:
            
            grid-template-areas: 
            "a a a"
            "b c c"
            "b c c";

  - The `grid` property is a shorthand property for:
      - `grid-template-rows` / `grid-template-columns` ;
      - `grid-template-areas` ;
      - `grid-template-rows` / `grid-auto-columns` ;
      - `grid-auto-rows` / `grid-template-columns` ;

6. **Positioning of grid-items :**
    - The `grid-column-start` CSS property specifies a grid item's start position within the grid column. The `grid-column-end` CSS property specifies a grid item's end position within the grid column. The `grid-column` CSS shorthand property for this to options. Example: 
    `grid-column: 2 / 4;
    grid-column: span 2 / 7;`
    - Same applies for rows. In this cases we use properties `grid-row-start` and `grid-row-end`. The `grid-row` CSS shorthand property specifies a grid item's size and location within a grid row. Example: 
    `grid-row: 2 / 4;
    grid-row: span 2 / 7;`
    - The `grid-area` CSS shorthand property specifies a grid item's size and location within a grid. There are 2 ways of using this property:
      1. As an even shorter shorthand for `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end`. Example: 
      grid-area: 1 / 2 / 3 / 4;

      2. As a way to assign a name of area defined in `grid-template-areas` to the item. Example: 
       `grid-area: sidebar;`

## Animation

**How we can set animation?**
There are 3 ways: transition, transform and keyframes.
1. **Transitions** enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like `:hover` or `:active`. The `transition` CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
    - The `transition-property` CSS property sets the CSS properties to which a transition effect should be applied.**(which property i want to be changed)**. Example: `transition-property: margin-right, color;` `transition-property: all;`(All properties that can transition will.)
    - The `transition-duration` CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur. **(How long animation will carry out)**
    Example: `transition-duration: 500ms;` , `transition-duration: 0.5s;`
    - The `transition-timing-function` CSS property sets **with which speed transition will carry out**. Values: 
         1. `ease` (default) - increases in velocity towards the middle of the transition, slowing back down at the end.
         2. `linear` - transitions at an even speed.
         3. `ease-in` - starts off slowly, with the transition speed increasing until complete.
         4. `ease-out` - starts transitioning quickly, slowing down as the transition continues.
         5. `ease-in-out` - starts transitioning slowly, speeds up, and then slows down again.
         6. `steps( n, start/end/both/none)` - displays the transition along n stops along the transition, displaying each stop for equal lengths of time.
         Example, if n is 5, there are 5 steps:
            - `start` - Whether the transition holds temporarily at `0%, 20%, 40%, 60% and 80%`;
            - `end` - on the `20%, 40%, 60%, 80% and 100%`;
            - `both` - Includes pauses at both the 0% and 100% marks, effectively adding a step during the transition time. `(on the 0%, 25%, 50%, 75%, and 100%)`
            - `none` - There is no steps on either end. Makes 5 stops `between the 0% and 100%` along the transition.
    - The `transition-delay` CSS property specifies the duration to wait before starting a property's transition. **(how many time i want to be delay before transition)** The `default value` for transition-delay is `0s` Example:
    `transition-delay: 250ms;` , `transition-delay: 1s;`
2. **Transform** 
The `transform` CSS property lets you rotate, scale, skew, or translate an element. **Values:**
- `scale()`: Affects the size of the element. This also applies to the font-size, padding, height, and width of an element, too. It’s also a a shorthand function for the scaleX and scaleY functions. Example: `transform: scale(1.2)` ; `transform: scale(2, .5) or transform: scaleX(2); transform: scaleY(.5)`;
- `translate()`: Moves an element sideways or up and down. 
**Values:**
  - `translateX()` - Translates an element horizontally. `(negative - left, positive - right)`
  - `translateY()` - Translates an element vertically. `(negative - top, positive - bottom)`
  - `translate(X, Y);` - shorthand for `translateX()` and `translateY()`
- `rotate()`: Rotates the element clockwise from its current position. 
**Values**:
  - `rotate(90deg); rotate(0.5turn); rotate(-180deg); rotate(180deg);`
  - `rotateX()` - Rotates an element around the horizontal axis;
  - `rotateY()` - Rotates an element around the vertical axis. (`transform: rotateY(180deg);` - Mirror effect)
3. **Keyframes**
The `@keyframes` CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than transitions.
   - **how we set?**
    Values: 
      - `from` - A starting offset of 0%.
      - `to` - An ending offset of 100%.
      - `%` - A percentage of the time through the animation sequence at which the specified keyframe should occur.
   - **how we apply?**
      - The `animation` shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`, and `animation-timeline`. 
      - The `animation-duration` CSS property sets the length of time that an animation takes to complete one cycle. **(How long animation will carry out)**
      - The `animation-timing-function` CSS property sets how an animation progresses through the duration of each cycle. Values: 
         1. `ease` (default) - increases in velocity towards the middle of the transition, slowing back down at the end.
         2. `linear` - transitions at an even speed.
         3. `ease-in` - starts off slowly, with the transition speed increasing until complete.
         4. `ease-out` - starts transitioning quickly, slowing down as the transition continues.
         5. `ease-in-out` - starts transitioning slowly, speeds up, and then slows down again.
         6. `steps( n, start/end/both/none)` - displays the transition along n stops along the transition, displaying each stop for equal lengths of time.
         Example, if n is 5, there are 5 steps:
            - `start` - Whether the transition holds temporarily at `0%, 20%, 40%, 60% and 80%`;
            - `end` - on the `20%, 40%, 60%, 80% and 100%`;
            - `both` - Includes pauses at both the 0% and 100% marks, effectively adding a step during the transition time. `(on the 0%, 25%, 50%, 75%, and 100%)`
            - `none` - There is no steps on either end. Makes 5 stops `between the 0% and 100%` along the transition.
      - The `animation-delay` CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation.
      - The `animation-iteration-count` CSS property sets the number of times an animation sequence should be played before stopping. Values:
         - `infinite` - The animation will repeat forever.
         - `n` - The number of times the animation will repeat; this is 1 by default. You may specify non-integer values to play part of an animation cycle: for example, 0.5 will play half of the animation cycle. Negative values are invalid.
      - The `animation-direction` CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward. Values
         - `normal` - The animation plays forwards each cycle. In other words, each time the animation cycles, the animation will reset to the beginning state and start over again. This is the default value.
         - `reverse` - The animation plays backwards each cycle. In other words, each time the animation cycles, the animation will reset to the end state and start over again. Animation steps are performed backwards, and easing functions are also reversed. For example, an ease-in easing function becomes ease-out.
         - `alternate` - The animation reverses direction each cycle, with the first iteration being played forwards. The count to determine if a cycle is even or odd starts at one.
         - `alternate-reverse` - The animation reverses direction each cycle, with the first iteration being played backwards. The count to determine if a cycle is even or odd starts at one.
      - The `animation-fill-mode` CSS property sets how a CSS animation applies styles to its target before and after its execution. **Values:** 
         - `forwards` - animation carrying out in normal flow and object is not resetting after the finish of cycle;
         - `backwards` - immediately will apply style from keyframes to animated object, will reset it at the end;
         - `both` - immediately will apply style from keyframes to animated object and object is not resetting after the finish of cycle;
      - The `animation-play-state` CSS property sets whether an animation is running or paused. **Values:**
         - `running` - The animation is currently playing;
         - `paused` - The animation is currently paused;




