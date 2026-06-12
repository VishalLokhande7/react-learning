function handleClick() {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!")
}

function handleDblClick(){
    console.log("you double clicked");
}


export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>

            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis maiores dolor saepe pariatur tempora labore assumenda temporibus,
                sit ab eveniet quibusdam, numquam rem ut doloribus doloremque harum fugit iure neque?</p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>


    );
}