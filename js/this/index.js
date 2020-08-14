// function identify(context) {
//     return context.toUpperCase()
// }

// function speak(context) {
//     let greeting = "hello,i'm" + identify(context)
//     console.log(greeting);
// }
// speak("me");
function identify() {
    return this.toUpperCase()

}

function speak() {
    let greeting = "hello,i'm" + identify.call(this)
    console.log(greeting);
}
speak("me")