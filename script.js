const questions = [
  {
    text: "You rapidly get involved in social life at a new workplace.",
    trait: "connection",
  },
  {
    text: "You spend your leisure time actively socializing with groups of people.",
    trait: "connection",
  },
  {
    text: "Direct-contact group discussions stimulate you and give you energy.",
    trait: "connection",
  },
  {
    text: "After prolonged socializing, you feel you need to get away and be alone.",
    trait: "solitude",
  },
  {
    text: "You prefer meeting in small groups to interacting with lots of people.",
    trait: "solitude",
  },
  {
    text: "You are more of a listener than a speaker.",
    trait: "reflection",
  },
  {
    text: "You are usually the first to react to a sudden event, like a phone ringing or an unexpected question.",
    trait: "spontaneity",
  },
  {
    text: "You tend to rely on your experience rather than theoretical alternatives.",
    trait: "practicality",
  },
  {
    text: "When solving a problem, you would rather follow a familiar approach than seek a new one.",
    trait: "practicality",
  },
  {
    text: "You are more inclined to experiment than to follow familiar approaches.",
    trait: "curiosity",
  },
  {
    text: "You often spend time thinking about how things could be improved.",
    trait: "curiosity",
  },
  {
    text: "You are eager to know how things work.",
    trait: "curiosity",
  },
  {
    text: "Your desk, workbench, or main workspace is usually neat and orderly.",
    trait: "structure",
  },
  {
    text: "You prefer to act immediately rather than speculate about various options.",
    trait: "spontaneity",
  },
  {
    text: "You find it difficult to talk about your feelings.",
    trait: "reflection",
  },
  {
    text: "Close friends invite you to a restaurant serving food you strongly dislike. What do you do?",
    trait: "connection",
    type: "choice",
    options: [
      { label: "Go along and say nothing", value: 5 },
      { label: "Suggest a different place", value: 4 },
      { label: "Politely decline because the food is not for you", value: 2 },
    ],
  },
  {
    text: "Have you ever left a job without having another one lined up?",
    trait: "spontaneity",
    type: "choice",
    options: [
      { label: "Yes", value: 7 },
      { label: "No, but I might", value: 4 },
      { label: "No, and I would avoid doing that", value: 1 },
    ],
  },
  {
    text: "A friend asks to borrow your new car. What do you say?",
    trait: "boundaries",
    type: "choice",
    options: [
      { label: "Sure", value: 7 },
      { label: "Okay, but please be very careful", value: 4 },
      { label: "I do not lend out my car", value: 1 },
    ],
  },
  {
    text: "A friend invites you on a last-minute, all-expenses-paid weekend getaway. Do you go?",
    trait: "spontaneity",
    type: "choice",
    options: [
      { label: "Yes, definitely", value: 7 },
      { label: "It depends on the weekend", value: 4 },
      { label: "I would want to, but probably not", value: 2 },
      { label: "No, it is too last-minute", value: 1 },
    ],
  },
  {
    text: "You are enjoying a party, but your friend feels ill and asks you to leave with them. What do you do?",
    trait: "boundaries",
    type: "choice",
    options: [
      { label: "Leave immediately", value: 7 },
      { label: "Stay briefly, then leave together", value: 4 },
      { label: "Stay out and check in the next day", value: 1 },
    ],
  },
  {
    text: "If someone invited you to skydive with proper safety equipment, would you?",
    trait: "spontaneity",
    type: "choice",
    options: [
      { label: "Yes, definitely", value: 7 },
      { label: "I would consider it", value: 5 },
      { label: "Probably not", value: 2 },
      { label: "No", value: 1 },
    ],
  },
  {
    text: "Your dream home would be:",
    trait: "comfort",
    type: "choice",
    options: [
      { label: "Spacious and impressive", value: 6 },
      { label: "A quiet place close to nature", value: 3 },
      { label: "Filled with beautiful things", value: 5 },
      { label: "Full of activity and people", value: 7 },
    ],
  },
];

const traitLabels = {
  connection: "Connection",
  solitude: "Solitude",
  spontaneity: "Spontaneity",
  practicality: "Practicality",
  curiosity: "Curiosity",
  structure: "Structure",
  reflection: "Reflection",
  boundaries: "Boundaries",
  comfort: "Comfort",
};

const barnumProfiles = [
  {
    title: "The Adapter",
    summary:
      "Your diverse life experiences and the variety of people you interact with teach you to move through life with a mix of curiosity and caution. In the right setting, you can be warm and open, yet you also value privacy and time to sort through your own thoughts. Your choices and opinions may seem straightforward, but people may not always see how much you are weighing beneath the surface. You value deep connections that have true significance, and in the face of conflict and failure, you tend to reflect on yourself to seek constant growth.",
    bullets: [
      "You are capable of steady effort when the goal feels personally meaningful.",
      "You want close relationships, but you also need enough independence to feel like yourself.",
      "You can be hard on yourself, though you usually find a way to regain perspective.",
    ],
  },
];

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
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const restartBtn = document.querySelector("#restart-btn");
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
  document.querySelector(".scale-labels").hidden = question.type === "choice";

  const options =
    question.type === "choice"
      ? question.options
      : Array.from({ length: 7 }, (_, index) => ({
          label: String(index + 1),
          value: index + 1,
          ariaLabel: `${index + 1} out of 7`,
        }));

  options.forEach((option, index) => {
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
      const average = count ? totals[trait] / count : 3.8;
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

function getPatternSequence() {
  const scores = getTraitScores();
  const rankedScores = Object.entries(scores)
    .map(([trait, score], index) => ({ id: String(index + 1), score }))
    .sort((a, b) => b.score - a.score || Number(a.id) - Number(b.id));
  const clusters = [];

  rankedScores.forEach((item) => {
    const previous = clusters[clusters.length - 1];
    if (previous && previous.score === item.score) {
      previous.ids.push(item.id);
      return;
    }
    clusters.push({ score: item.score, ids: [item.id] });
  });

  return clusters.map((cluster) => cluster.ids.join("")).join("-");
}

function showResult() {
  const profile = barnumProfiles[0];

  resultCode.textContent = getPatternSequence();
  resultTitle.textContent = profile.title;
  resultSummary.textContent = profile.summary;
  resultBullets.innerHTML = "";
  profile.bullets.forEach((bullet) => {
    const item = document.createElement("li");
    item.textContent = bullet;
    resultBullets.append(item);
  });
  progressCount.textContent = `${questions.length} / ${questions.length}`;
  progressFill.style.width = "100%";
  questionView.hidden = true;
  resultView.hidden = false;
  studyRail.hidden = false;
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

renderQuestion();
