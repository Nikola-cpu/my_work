let prompt = [
    'Enter your name',
    'Enter your nickname',
    'Enter your age'
];

let answers = [];

let currentPrompt = 0;

let nextPrompt = function() {
    if(currentPrompt != 0) {
        answers.push($('input').val());
    }
    if(currentPrompt < prompt.length) {
    $('.prompts').html(prompt[currentPrompt]+'<br><input type="text">');
    currentPrompt = currentPrompt + 1;
    }
    else {
        showFinal();
        $('button').remove();
    }
}
let showFinal = function() {
    $('.prompts').html(`Your name is <span class="fill">${answers[0]}.</span>Your nick name is<span class="fill"> ${answers[1]} </span>
    and your age is<span class="fill"> ${answers[2]}</span>.Did I guess everything?`);
}

$('button').click(function() {
    nextPrompt()
})
nextPrompt()
