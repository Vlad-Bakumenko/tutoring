/*

? 1. Declaring of state variables

* 1.1. We can declare state variable like : 

const [wordToGuess, setWordToGuess] = useState("test");

And in this case type of variable will be assigned by initial state

BUT : It's highly recommended to declare like:

const [wordToGuess, setWordToGuess] = useState<string>("test");

* 1.2. How to deal with the case when i want to have initial state as a "null" but later reassign ?

Use Unions:

const [loggedInUser, setLoggenInUser] = useState<string | null>(null);

* 1.3. handleChange && handleSubmit

const [wordToGuess, setWordToGuess] = useState<string>("");
const [sentence, setSentence] = useState<string>("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordToGuess(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSentence(wordToGuess.toUpperCase())
  }

  return (
    <>
      <div>{wordToGuess}</div>
      <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button type="submit">Submit</button>
      </form>
      <div>{sentence}</div>
    </>
  )

? 2. transformOrigin

transformOrigin is a CSS property that specifies the origin point of an element's transformation. It defines the point around which transformations, such as rotations, scaling, and translations, are applied.

? 3. Passing of props in TS

1. Hover on props => Parameter 'props' implicitly has an 'any' type; - //! problem
2. Props could be declared as "interface" or "type"
3. "interface" or "type" could be reusable in other components (export-import);
4. It helps to prevent bugs on stage when we fetching data and passing it as a prop

? 4. array.every()

array.every() is a method in JavaScript that returns a boolean value indicating whether all elements in an array satisfy a provided testing function.

? 5. useCallback 

1. The useCallback hook in React + TypeScript is a function that returns a memoized version of a callback function. It takes two arguments: the callback function and an array of dependencies.

2. The useCallback hook returns a new version of the callback function only if one of the dependencies has changed since the last render. This means that if the dependencies do not change, the same function reference is returned, which can help optimize performance in certain cases.

3. useCallback is a better fit for memoizing a function, especially when you need to pass it as a prop or use it as an event handler.
useMemo can be used to memoize a value, including a function, but you need to be careful when using the memoized function to avoid unnecessary recreations.

? 6

? 6.1 KeyboardEvent 
KeyboardEvent is an interface in JavaScript that represents an event fired when a user interacts with the keyboard. It's a part of the DOM Events specification.

When a user presses a key on their keyboard, a KeyboardEvent is fired and dispatched to the element that has focus. The event object contains information about the key that was pressed, such as the key code, character code, and other details.

----------------------------------------------------------------

? 6.2. e.preventDefault() for "keypress"
e.preventDefault() is a method that prevents the default action of an event from occurring. In the context of a keypress event, the default action is to insert the character associated with the pressed key into the currently focused element (e.g., a text input field).

-----------------------------------------------------------------

? 6.3. regex /^[a-z]$/

The regex /^[a-z]$/ is a pattern used to match a single character that is a lowercase letter (a-z). Let's break it down:

^: The caret symbol indicates the start of the string. It ensures that the pattern must match the beginning of the string.

[a-z]: This is a character class that matches any single character that is a lowercase letter between a and z (inclusive). The square brackets [] define a set of characters, and the hyphen - inside the brackets specifies a range of characters.

$: The dollar sign indicates the end of the string. It ensures that the pattern must match the end of the string.

*/
