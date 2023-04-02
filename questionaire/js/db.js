const questions = [
  {
    id: 1,
    question:
      "A friend cancels plans last minute. You:",
    answers: [
      {
        text: "Feel rejected and isolated and might blame yourself and beleive that your friend canceled because your not worth it.",
        cat: "depression",
      },
      {
        text: "Feel anxious and worried that your friend is mad at you or something bad happened to them",
        cat: "anxiety",
      },
      {
        text: "Feel intense sadness or frustration initially but may later have an elevated mood and not be as affected.",
        cat: "bipolar",
      },
      {
        text: "Feel abandoned and feel that your friend doesn't care about them anymore.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 2,
    question:
      "You are starting a new job. You:",
    answers: [
      {
        text: "Struggle with motivation, have low energy level, may feel overwhelmed and doubt your ability to do the job well.",
        cat: "depression",
      },
      {
        text: "Worry excessively about making mistakes or not fitting in with your new co-workers.",
        cat: "anxiety",
      },
      {
        text: "Experience anxiety or elation, depending on your current mood state",
        cat: "bipolar",
      },
      {
        text: "Feel intense emotions related to change, such as excitement or anxiety.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 3,
    question:
      "You are in a relationship and your partner wants to discuss a problem. You:",
    answers: [
      {
        text: "Feel defensive or shut down emotionally, felling that you're not good enough for your partner.",
        cat: "depression",
      },
      {
        text: "Worry excessively about what your partner will say and how the discussion will end.",
        cat: "anxiety",
      },
      {
        text: "Depending on your current mood state, you may feel confident in your ability to address the problem or feel completely overwhelmed and unable to cope.",
        cat: "bipolar",
      },
      {
        text: "Become defensive and feel attacked by your partner's criticism or feedback.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 4,
    question: "You are experiencing financial difficulties. You:",
    answers: [
      {
        text: "Feel overwhelmed, hopeless, and like a failure for not being able to manage your finances better.",
        cat: "depression",
      },
      {
        text: "Feel panicked and worry excessively about how you will pay your bills or make ends meet.",
        cat: "anxiety",
      },
      {
        text: "Feel restless, impulsive, or irritable, which can make it challenging to stick to a budget or financial plan.",
        cat: "bipolar",
      },
      {
        text: "Feel impulsive and struggle with controlling spending, which can exacerbate financial difficulties.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 5,
    question:
      "You receive negative criticism at work. You:",
    answers: [
      {
        text: "Feel worthless and hopeless, thinking that you'll never be good enough or that you'll lose you job.",
        cat: "depression",
      },
      {
        text: "Feel execcively worried about your job security or future job performance.",
        cat: "anxiety",
      },
      {
        text: "Feel discouraged initially, but then have a surge of energy and motivation to improve your performance and prove yourself at work.",
        cat: "bipolar",
      },
      {
        text: "Feel devastated and interpret the criticism as a sign that your coworkers hate you or are conspiring against you. You might lash out at your coworkers or blame yourself excessively.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 6,
    question:
      "You're in a crowded and noisy public place. You:",
    answers: [
      {
        text: "Feel overwhelmed and drained, lacking the energy to interact with others or participate in activities.",
        cat: "depression",
      },
      {
        text: "Feel the need to escape or find a quiet place, but may also worry about missing out on the event or letting others down.",
        cat: "anxiety",
      },
      {
        text: "Experience feelings of irritability or agitation due to sensory overload or feeling overwhelmed.",
        cat: "bipolar",
      },
      {
        text: "Feel conflicted about staying in the noisy environment or leaving to find a quieter space.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 7,
    question: 
       "You cancel plans with a friend. You:",
    answers: [
      {
        text: "Feel guilty and isolate yourself, thinking that you're not a good friend.",
        cat: "depression",
      },
      {
        text: "Feel anxious and worried that your friend is upset with you or that you'll lose their friendship.",
        cat: "anxiety",
      },
      {
        text: "Initially relieved that you don't have to go out, but later feeling guilty or regretful for canceling.",
        cat: "bipolar",
      },
      {
        text: "Fear that your friend will abandon you because you canceled plans, and may engage in impulsive behaviors to try to alleviate this fear.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 8,
    question:
      "You receive a low grade on a test you studied hard for. You:",
    answers: [
      {
        text: "Feel hopeless and like a failure, thinking that you're not smart enough to succeed.",
        cat: "depression",
      },
      {
        text: "Worry excessively about your future academic performance and how this grade will affect your GPA.",
        cat: "anxiety",
      },
      {
        text: "Experience extreme emotions, swinging between feeling very discouraged and feeling very optimistic about your ability to improve.",
        cat: "bipolar",
      },
      {
        text: "Struggle with intense emotions of self-doubt and worthlessness, feeling like a failure.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 9,
    question:
      "You're in a car accident, but you're not hurt. You:",
    answers: [
      {
        text: "Withdraw and isolate yourself, feeling like you don't want to deal with the aftermath of the accident.",
        cat: "depression",
      },
      {
        text: "Feel shaken up and worried about driving or being in a car again.",
        cat: "anxiety",
      },
      {
        text: "Struggle with impulsivity, such as wanting to leave the scene of the accident without exchanging information with the other driver.",
        cat: "bipolar",
      },
      {
        text: "Experience fear of abandonment, such as worrying that the accident will cause others to reject or judge you.",
        cat: "bpd",
      },
    ],
  },
  {
    id: 10,
    question:
      "You're attending a social event where you don't know many people. You:",
    answers: [
      {
        text: "You may feel like you don't belong there and find it hard to engage with others",
        cat: "depression",
      },
      {
        text: "You may feel nervous and self-conscious, worrying about how you appear to others",
        cat: "anxiety",
      },
      {
        text: "Might find yourself making impulsive decisions, like leaving the event early without saying goodbye to anyone.",
        cat: "bipolar",
      },
      {
        text: "Might become very attached to one person, feeling anxious and rejected if they talk to others instead of you.",
        cat: "bpd",
      },
    ],
  },
];

module.exports = questions;
