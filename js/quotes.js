const quotes = [
    {
        days: "- 월요일엔",
        quotes: "가족과 집밥을 먹자. -",
    },
    {
        days: "- 화요일엔",
        quotes: "애인, 배우자와 피자를 먹자. -",
    },
    {
        days: "- 수요일엔",
        quotes: "학교, 직장 동료와 삼겹살을 먹자. -",
    },
    {
        days: "- 목요일엔",
        quotes: "혼자 치킨을 먹자. -",
    },
    {
        days: "- 금요일엔",
        quotes: "제일 친한 친구와 술을 먹자. -",
    },
]

const dayday = document.querySelector("#quotes span:first-child");
const quote = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

dayday.innerText = todayQuote.days;
quote.innerText = todayQuote.quotes;
