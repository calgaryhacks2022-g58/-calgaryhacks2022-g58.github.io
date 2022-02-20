import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

const goals = [
  {
    goal: "Daily walks",
    achived: true,
    partnerName: "Jennie",
    partnerImg: team1,
    chatid: "0",
  },
  {
    goal: "Finish a book",
    achived: false,
    partnerName: "Chris",
    partnerImg: team2,
    chatid: "1",
  },
  {
    goal: "Find a new hobby",
    achived: false,
    partnerName: "Emma",
    partnerImg: team3,
    chatid: "2",
  },
];

const chat = [
  {
    id: "0",
    members: ["Jennie", "Bob"],
    messages: [
      {
        sender: 0,
        content: "Hey, What's up?",
        timeSent: "09:30",
      },
      {
        sender: 1,
        content: "Hey, I am Good! What about you?",
        timeSent: "09:31",
      },
      {
        sender: 0,
        content: "I am also good!",
        timeSent: "09:32",
      },
      {
        sender: 0,
        content: "How long are your walks?",
        timeSent: "09:32",
      },
    ],
  },
  {
    id: "1",
    members: ["Chris", "Bob"],
    messages: [
      {
        sender: 1,
        content: "Hey, do you have any recommendations?",
        timeSent: "09:30",
      },
      {
        sender: 1,
        content: "I recommend Atomic Habits",
        timeSent: "09:31",
      },
    ],
  },
  {
    id: "2",
    members: ["Emma", "Bob"],
    messages: [
      {
        sender: 1,
        content: "Hey, could you recommend me a sport to try",
        timeSent: "09:30",
      },
      {
        sender: 0,
        content: "Try snowboarding :)",
        timeSent: "09:31",
      },
    ],
  },
];

export { goals, chat };
