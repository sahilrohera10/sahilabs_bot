const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const challenges = [
  {
    text: "Build Your Own JSON Parser",
    link: "https://codingchallenges.fyi/challenges/challenge-json-parser",
  },
  {
    text: "Build You Own Load Balancer",
    link: "https://codingchallenges.fyi/challenges/challenge-load-balancer",
  },
  {
    text: "Build Your Own Redis Server",
    link: "https://codingchallenges.fyi/challenges/challenge-redis",
  },
  {
    text: "Build Your Own URL Shortener",
    link: "https://codingchallenges.fyi/challenges/challenge-url-shortener",
  },
  {
    text: "Build Your Own DNS Resolver",
    link: "https://codingchallenges.fyi/challenges/challenge-dns-resolver",
  },
];

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  console.log(message.content);
  if (message.content.toLowerCase() === "hello") {
    message.reply({
      content: `Hello ${message.author}, Feel free to interact with me with the following commands 
      !challenge -> Provide you the challenge for today.
      !list -> Provide you the list of all the challenges.`,
    });
  }
  if (message.content.toLowerCase() === "!challenge") {
    const n = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[n];

    console.log(challenge, n);
    message.reply({
      content: `${challenge.text}, go to -> ${challenge.link}`,
    });
  }

  if (message.content.toLowerCase() === "!list") {
    const challengeList = challenges
      .map((challenge) => `${challenge.text}, go to -> ${challenge.link}`)
      .join("\n");

    // Send the entire list in a single reply message
    message.reply({
      content: `List of Challenges:\n${challengeList}`,
    });
  }
  if (message.content.toLowerCase() === "thank you") {
    message.reply({
      content: `Thank You ${message.author} for interacting with me!!`,
    });
  } else {
    message.reply({
      content: "Sorry I didn't understand that command!",
    });
  }
});

client.login(
  "MTIxMjgzNzk1NTEwNzAyOTA0Mg.GePwvm.jzaZbLf59jhOH_lIgSMfWiCPJY-e_xXOgl-afM"
);
