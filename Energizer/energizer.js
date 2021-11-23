let New = document.getElementById("New");
let energizer = document.getElementById("energizer");
let text = [
  {
    Title: "Human Machine",
    Description:
      "Human Machine is a fast and physical group activity gets participants moving and working together in a way that generates energy and promotes collaboration. One at a time, members of the group become parts of the “machine”, each one making a distinct physical motion and a sound, until the whole group is working together in motion, as one human machine.",
    Steps: [
      {
        step1: "Step 1",
        description:
          "Stand in a large circle. Explain to the group that their task is to build a human machine. Each individual will become one moving-part of the machine",

        step2: "Step 2",
        description2:
          "One person enters the circle and begins making a repeating sound and a physical movement (eg. a “whoop whoop whoop” sound while flapping one arm.) After a 5 seconds, another person enters the circle and connects to the first person, also making a sound and a movement. Continue building the machine until everyone is connected, everyone making their while e.",
      },
    ],
  },

  {
    Title: "Go Bananas",
    Description:
      "This fast, physical and loud energizer, has a high level of silliness and quickly charges up a group. The group repeats a simple chant over and over again, getting louder and louder as they go. By the end, the group is shouting and jumping about",
    Steps: [
      {
        step1: "Step 1",
        description: "The energizer starts with the group in a circle.",

        step2: "Step 2",
        description2:
          "The whole group crouches down and begins to whisper 'go bananas - b-a-n-a-n-a-s'. This is repeated over and over again, each time a bit louder. Along with the increasing volume, the group slowly stands up until, in the end, everyone is jumping energetically and screaming: 'GO BANANAS - B-A-N-A-N-A-S!'",
      },
    ],
  },

  {
    Title: "Dance, Dance, Dance",
    Description:
      "In this short and physically active energizer, participants dance playfully in small teams. Periodically, the music changes and members take turns leading the dance. The aim is to generate fun energy and playfulness in a group, often as a counter-balance to more “serious” group work.",
    Steps: [
      {
        step1: "Step 1",
        description: "Organize the group into teams of 3-5 people..",

        step2: "Step 2",
        description2:
          "Explain that when the music starts one person in each group starts dancing and the others follow the leaders. When the song changes, another member in each group becomes the new dance leader. Encourage them to be big and crazy with their dance moves and to move around in the space.Change the song every 30 seconds or so. Play enough songs that each member in every group is the leader at least one time. End by fading out the music and initiating a big cheer.",
      },
    ],
  },
  {
    Title: "Who am I?",
    Description: "For this exercise you need post it notes and a pen.",
    Steps: [
      {
        step1: "Step 1",
        description:
          "A facilitator writes down a character, celebrity or a historic person on post it notes. The same amount of people as there are participators in the energizer. Be sure to write down people/characters that everyone would know about.",

        step2: "Step 2",
        description2:
          "Hand out all the post it’s by putting them on a participants forehead. They will not know who they are.When everyone has an identity, go around and try to figure out who you are by letting people to characteristic things for that identity. The game continues until everyone has figured out who they are.",
      },
    ],
  },

  {
    Title: "Mirror mirror",
    Description:
      "Part the participants 2 and 2 (works best with a smaller number but one team can be 3) and have them stand in front of each other.",
    Steps: [
      {
        step1: "Step 1",
        description:
          "Decide who’s going to be Human and who’s going to be their reflection. When the human moves, the reflection copies the movement. Do this for one minute.",

        step2: "Step 2",
        description2:
          "Now switch. The reflector becomes the human and vice versa. After another minute the exercise is over.",
      },
    ],
  },

  {
    Title: "Giants, wizard and elves",
    Description:
      "It’s like rock paper scissors, but way more fun! Divide in to two teams who will act as one of 3 characters: giants, wizards, and elves. Giants: raise your arms like a giant, and make a menacing growling noise: 'Rarrr!' Wizards: Wave your fingers as though you’re casting a magical spell, and make a magical noise: 'Shaazaam!' Elves: Crouch down very low, cup your hands around your ears, and make a high pitched elf noise: 'Eeeee!'",
    Steps: [
      {
        step1: "Step 1",
        description:
          "After silently deciding which character you want to play gather your team and stand on a row facing the other team.The facilitator counts down 3,2,1 go! On go, you become your character.",

        step2: "Step 2",
        description2:
          "Giants beat elves, because giants are able to “squash” elves. Elves beat wizards because they outsmart them. Elves chew at their legs. Wizards beat giants because they are able to zap them with a magic spell. If both teams show the same character, no one wins. Rounds keep repeating until one team wins (the other team is completely captured) Giants beat elves, because giants are able to “squash” elves. Elves beat wizards because they outsmart them. Elves chew at their legs. Wizards beat giants because they are able to zap them with a magic spell. If both teams show the same character, no one wins. Rounds keep repeating until one team wins (the other team is completely captured)",
      },
    ],
  },

  {
    Title: "Laughing game",
    Description:
      "Divide in to two teams and stand on a row facing the team on the other side. Decide which team is the joker and which is the silent team.",
    Steps: [
      {
        step1: "Step 1",
        description:
          "By any means possible, the joker team has to make the person in front of you laugh by saying ’’Haha’’ ’’hoho’’ or ’’heehee’’.",

        step2: "Step 2",
        description2:
          "The facilitator takes time for 20 seconds, If the joker hasn’t been able to make their silent ’’partner’’ laugh, the joker goes on to stay behind the silent ’’partner''. If the silent partner laughs, he or she stands behind the joker. The winner is the person who has the most people following them. ",
      },
    ],
  },

  {
    Title: "Sing song ping pong",
    Description:
      "If you’re not a singer, no worries, it’s more fun that way! This game can be played either in teams or individually.",
    Steps: [
      {
        step1: "Step 1",
        description:
          "Decide who’s starting of the game. The starter sing a few lines of a song, the listener start singing a song to a connecting word whenever they think of one. ",

        step2: "Step 2",
        description2:
          "Example: Mika - ''I could be brown, I could be blue, I could be violet sky I could be hurtful, I could be purple...'' The answering song could be Prince - '' Laughing in the purple rain. Purple rain, purple rain. Purple rain, purple rain. Purple rain, purple rain. I only wanted to see you...'' The following song Journey - '' You’re the one and only... ''",
      },
    ],
  },
];
let i = 0;
New.onclick = function () {
  close();
  let newArray = [];
  let randomText = [];
  randomText = text[Math.floor(Math.random() * text.length)];
  console.log("this", typeof text);
  const energizer = document.getElementById("engergizer");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const step = document.getElementById("stage");
  const stepDescription = document.getElementById("step_description");
  const step2 = document.getElementById("stage2");
  const stepDescription2 = document.getElementById("step_description2");

  text.forEach((data) => {
    newArray.push(data);
    console.log(newArray);
  });
  if (i < newArray.length) {
    console.log("clicked", i);
    console.log(newArray[i].Title);
    title.innerHTML = newArray[i].Title;
    description.innerHTML = newArray[i].Description;
    newArray[i].Steps.forEach((element) => {
      console.log(element.step2);
      step.innerHTML = element.step1;
      console.log(step.innerHTML);
      stepDescription.innerHTML = element.description;
      step2.innerHTML = element.step2;
      console.log(element.step2);
      stepDescription2.innerHTML = element.description2;
    });
  }
  //energizer.innerHTML = randomText.Title;
  i++;
};

function close() {
  x = document.getElementById("bort");
  x.style.visibility = "hidden";
}
