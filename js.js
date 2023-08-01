const quotes = [{
    quote: `"t’s going to be hard, but hard does not mean impossible."`,
    writer: `– Pholip roth  `
}, {
    quote: `"Little things make big days.."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Do something today that your future self will thank you for."`,
    writer: `– Ralph waldo emerson`
}, {
    quote: `"Wake up with determination. Go to bed with satisfaction.."`,
    writer: `– Steve Jobs`
}, {
    quote: `"Don’t stop when you’re tired. Stop when you’re done."`,
    writer: `– Allen ginsbero`
}, {
    quote: `"Success doesn’t just find you. You have to go out and get it.."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"Success doesn’t just find you. You have to go out and get it.."`,
    writer: `– Socrates`
}, {
    quote: `"Trust because you are willing to accept the risk, not because it's safe or certain. "`,
    writer: `– Jim thompson  `
}, {
    quote: `"If you are not willing to risk the usual you will have to settle for the ordinary.."`,
    writer: `- Dalai Lama`
}, {
    quote: `"To live a creative life, we must lose our fear of being wrong.."`,
    writer: `- Elton John`
}, ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerHTML = quotes[random].quote;


    writer.innerHTML = quotes[random].writer;
})