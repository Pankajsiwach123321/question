export const QUESTIONS_ANSWER = [
    {
        question: "what is HTML?",
        answer: "<span>Hypertext Markup Language</span>, is a standard markup language for creating web pages. It's used to structure a web page's , HTML elements label pieces of content, such as headings, paragraphs, and links."
    },
    {
        question: "what is css?",
        answer: "<span>Cascading Style Sheets </span> is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
    },
    {
        question: "what is Function?",
        answer: "a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output."
    },
    {
        question: "How many types of components",
        answer: "Components come in two types, Class components and Function components"
    },
    {
        question: "Difference between Function components && Class components",
        difference: [
            {
                first: ["These are simple JavaScript functions that take props as input and return JSX elements.", "They are often used for presentational or stateless components", "function components were stateless and couldn't hold their own state. However, with the introduction of React Hooks (like useState)","Function components are generally more concise and easier to read, especially for simpler components."],
                second: [" These are ES6 classes that extend from React.Component or React.PureComponent", "hey have a render() method where you define the structure of your component's UI using JSX.", "Class components are used for components that need to manage state or have lifecycle methods", "Class components can hold and manage local state using the this.state property. They can also update state using this.setState()."]
            },
        ]
    },
    {
        question: "what is react hook? and its type.",
        answer: "React Hooks provide functional components with the ability to use states and manage side effects. They were first introduced in React 16.8, and allow developers to hook into the state and other React features without having to write a class. They provide a cleaner and more concise way to handle state and side effects in React applications. <br/> Types:- useState, useContext, useRef, useEffect, useCallback, useMemo"
    },
    {
        question: "what is Lifecycle method?",
        answer: " the lifecycle of a component refers to its “lifetime” within our application which starts once the component is first rendered to screen up until the time we’re removing that component from the screen. A component might be rendered to the screen, which is referred to as the “mounting phase”, it might receive some data that changes during its “lifetime”, which is referred to as the “update phase”, and it might, ultimately, be removed from the screen, which is referred to as “unmounting phase”."
    },
]