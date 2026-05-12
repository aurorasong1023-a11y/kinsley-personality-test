const questions = [
  {
    text: "You often notice small ways a situation could be improved, even when everyone else seems satisfied.",
    trait: "standards",
  },
  {
    text: "You feel more settled after you understand what people expect from you.",
    trait: "security",
  },
  {
    text: "You can be generous with your time, but you notice when that generosity starts being assumed.",
    trait: "support",
  },
  {
    text: "You sometimes measure your progress by whether other people can see the effort you put in.",
    trait: "recognition",
  },
  {
    text: "You need private time to sort through your thoughts before you know what you really think.",
    trait: "privacy",
  },
  {
    text: "You are drawn to plans that leave room for something unexpected to happen.",
    trait: "novelty",
  },
  {
    text: "When conflict appears, you first try to understand the emotional temperature of the room.",
    trait: "harmony",
  },
  {
    text: "You are capable of taking charge, but you prefer not to make every situation into a contest.",
    trait: "agency",
  },
  {
    text: "You are harder on yourself when you feel you could have handled a moment with more grace.",
    trait: "standards",
  },
  {
    text: "People sometimes rely on you because you can stay functional while still paying attention to feelings.",
    trait: "support",
  },
  {
    text: "You tend to keep a backup plan in mind, even when you look relaxed.",
    trait: "security",
  },
  {
    text: "You dislike being reduced to one simple trait, role, or expectation.",
    trait: "privacy",
  },
  {
    text: "You feel a spark of energy when a routine day suddenly becomes more open-ended.",
    trait: "novelty",
  },
  {
    text: "It bothers you when people mistake your flexibility for not having strong preferences.",
    trait: "agency",
  },
  {
    text: "You can smooth over tension, but part of you remembers what went unsaid.",
    trait: "harmony",
  },
  {
    text: "A friend invites you to a small gathering where you know only one person. What do you do?",
    trait: "harmony",
    type: "choice",
    options: [
      { label: "Go and treat it as a chance to read a new group", value: 6 },
      { label: "Ask who else will be there before deciding", value: 4 },
      { label: "Decline unless there is a clear reason to go", value: 2 },
    ],
  },
  {
    text: "Your weekend plans get canceled at the last minute. What feels most natural?",
    trait: "novelty",
    type: "choice",
    options: [
      { label: "Use the opening for something spontaneous", value: 7 },
      { label: "Enjoy the quiet and reset", value: 3 },
      { label: "Immediately rebuild the plan", value: 5 },
      { label: "Feel annoyed, then adjust", value: 4 },
    ],
  },
  {
    text: "Someone praises your work in front of a group. Your first instinct is to:",
    trait: "recognition",
    type: "choice",
    options: [
      { label: "Accept it, but quickly shift attention back to the group", value: 4 },
      { label: "Feel quietly pleased that the effort was noticed", value: 6 },
      { label: "Point out what still could have been better", value: 3 },
      { label: "Use the moment to build more momentum", value: 7 },
    ],
  },
  {
    text: "A close friend asks for help right when you had planned to rest. What do you do?",
    trait: "support",
    type: "choice",
    options: [
      { label: "Help immediately", value: 7 },
      { label: "Ask what they need, then decide what you can offer", value: 5 },
      { label: "Offer a smaller kind of help that protects your evening", value: 4 },
      { label: "Say you cannot tonight and follow up later", value: 2 },
    ],
  },
  {
    text: "You are invited to try an unfamiliar activity with minimal notice. What matters most?",
    trait: "security",
    type: "choice",
    options: [
      { label: "Whether it sounds exciting", value: 6 },
      { label: "Whether I can leave if it is not working", value: 5 },
      { label: "Whether someone I trust is going", value: 4 },
      { label: "Whether I have enough information first", value: 2 },
    ],
  },
  {
    text: "In a group decision, you realize everyone is avoiding the real issue. What are you most likely to do?",
    trait: "agency",
    type: "choice",
    options: [
      { label: "Name it directly, but try to keep the tone steady", value: 7 },
      { label: "Ask a question that nudges the group toward it", value: 5 },
      { label: "Wait to see if someone else brings it up", value: 3 },
      { label: "Talk privately to the person most affected", value: 4 },
    ],
  },
  {
    text: "When you are under pressure, you are most likely to:",
    trait: "security",
    type: "choice",
    options: [
      { label: "Make a list and regain control through structure", value: 5 },
      { label: "Look for someone steady to compare notes with", value: 4 },
      { label: "Push forward and solve the visible problem first", value: 6 },
      { label: "Withdraw briefly so your thoughts can settle", value: 3 },
    ],
  },
  {
    text: "You arrive at a restaurant and the menu is completely different from what you expected. What do you do?",
    trait: "novelty",
    type: "choice",
    options: [
      { label: "Treat it as part of the experience", value: 7 },
      { label: "Find one safe option and move on", value: 4 },
      { label: "Ask the group if anyone wants to go somewhere else", value: 3 },
      { label: "Feel thrown off, but try not to make it a big deal", value: 2 },
    ],
  },
  {
    text: "A project is technically finished, but one detail still bothers you. What do you do?",
    trait: "standards",
    type: "choice",
    options: [
      { label: "Fix it, even if no one else would notice", value: 7 },
      { label: "Fix it only if it affects the final experience", value: 5 },
      { label: "Make a note for next time", value: 3 },
      { label: "Let it go because finished is finished", value: 1 },
    ],
  },
];

const traitLabels = {
  standards: "Standards",
  security: "Security",
  support: "Support",
  recognition: "Recognition",
  privacy: "Privacy",
  novelty: "Novelty",
  harmony: "Harmony",
  agency: "Agency",
};

const adapterProfile = {
  title: "The Calibrated Adapter",
  summary:
    "You are a Calibrater! Among Adapters, being a Calibrater indicates that you navigate many life experiences with a heightened sense of caution and internal reflection. Even when your choices seem simple on the outside, you often spend more time than others mentally reviewing situations, conversations, and possible outcomes. Unsettling thoughts may stay with you longer than you would like, and you may find yourself returning to certain memories even after they have passed. In challenging situations, you often prefer to process your thoughts privately rather than seek social interaction right away. Because of your caution and reflective nature, you dislike having to adjust to unexpected and unfamiliar environments. However, once you have time to think and feel more secure, you can move forward with greater clarity and confidence.",
  bullets: [
    "You are most convincing when you can balance emotional awareness with practical action.",
    "You may look flexible from the outside, while privately tracking a clear line between compromise and self-erasure.",
    "You tend to grow through reflection after a situation ends, especially when you wish you had been more direct.",
  ],
};

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
};

const questionView = document.querySelector("#question-view");
const resultView = document.querySelector("#result-view");
const questionText = document.querySelector("#question-text");
const questionKicker = document.querySelector("#question-kicker");
const progressCount = document.querySelector("#progress-count");
const progressFill = document.querySelector("#progress-fill");
const answerOptions = document.querySelector("#answer-options");
const scaleLabels = document.querySelector(".scale-labels");
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const restartBtn = document.querySelector("#restart-btn");
const revealBtn = document.querySelector("#reveal-btn");
const studyNote = document.querySelector("#study-note");
const resultCode = document.querySelector("#result-code");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const resultBullets = document.querySelector("#result-bullets");
const studyRail = document.querySelector(".study-rail");
const traitBars = document.querySelector("#trait-bars");
const dialNeedle = document.querySelector(".dial-needle");

function renderQuestion() {
  const question = questions[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;

  questionText.textContent = question.text;
  questionKicker.textContent = `Question ${state.current + 1}`;
  progressCount.textContent = `${state.current + 1} / ${questions.length}`;
  progressFill.style.width = `${progress}%`;
  backBtn.disabled = state.current === 0;
  nextBtn.textContent = state.current === questions.length - 1 ? "See Result" : "Next";
  nextBtn.disabled = state.answers[state.current] === null;

  answerOptions.innerHTML = "";
  answerOptions.classList.toggle("choice-options", question.type === "choice");
  scaleLabels.hidden = question.type === "choice";

  const options =
    question.type === "choice"
      ? question.options
      : Array.from({ length: 7 }, (_, index) => ({
          label: String(index + 1),
          value: index + 1,
          ariaLabel: `${index + 1} out of 7`,
        }));

  options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(option.value);
    input.checked = state.answers[state.current] === option.value;
    input.addEventListener("change", () => {
      state.answers[state.current] = option.value;
      nextBtn.disabled = false;
      renderTraitBars();
    });

    const visual = document.createElement("span");
    visual.textContent = option.label;
    visual.setAttribute("aria-label", option.ariaLabel || option.label);

    label.append(input, visual);
    answerOptions.append(label);
  });

  renderTraitBars();
}

function getTraitScores() {
  const totals = {};
  const counts = {};

  questions.forEach((question, index) => {
    const answer = state.answers[index];
    if (answer === null) return;
    totals[question.trait] = (totals[question.trait] || 0) + answer;
    counts[question.trait] = (counts[question.trait] || 0) + 1;
  });

  return Object.fromEntries(
    Object.keys(traitLabels).map((trait) => {
      const count = counts[trait] || 0;
      const average = count ? totals[trait] / count : 3.7;
      return [trait, Math.round((average / 7) * 100)];
    }),
  );
}

function renderTraitBars() {
  const scores = getTraitScores();
  traitBars.innerHTML = "";

  Object.entries(traitLabels).forEach(([trait, label]) => {
    const row = document.createElement("div");
    row.className = "trait-row";
    row.innerHTML = `
      <div class="trait-meta">
        <span>${label}</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width: ${scores[trait]}%"></div></div>
    `;
    traitBars.append(row);
  });

  const answered = state.answers.filter((answer) => answer !== null);
  const average = answered.length
    ? answered.reduce((total, value) => total + value, 0) / answered.length
    : 4;
  const angle = -60 + (average - 1) * 20;
  dialNeedle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

function showResult() {
  resultCode.textContent = "4-58-6-37-21";
  resultTitle.textContent = adapterProfile.title;
  resultSummary.textContent = adapterProfile.summary;
  resultBullets.innerHTML = "";
  adapterProfile.bullets.forEach((bullet) => {
    const item = document.createElement("li");
    item.textContent = bullet;
    resultBullets.append(item);
  });
  progressCount.textContent = `${questions.length} / ${questions.length}`;
  progressFill.style.width = "100%";
  questionView.hidden = true;
  resultView.hidden = false;
  studyRail.hidden = false;
  studyNote.hidden = true;
  revealBtn.hidden = false;
}

backBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.answers[state.current] === null) return;
  if (state.current === questions.length - 1) {
    showResult();
    return;
  }
  state.current += 1;
  renderQuestion();
});

restartBtn.addEventListener("click", () => {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  questionView.hidden = false;
  resultView.hidden = true;
  studyRail.hidden = true;
  renderQuestion();
});

revealBtn.addEventListener("click", () => {
  studyNote.hidden = false;
  revealBtn.hidden = true;
});

renderQuestion();
