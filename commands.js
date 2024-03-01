const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "Challenge for today",
    description: "Provide you with the Challenge for today!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIxMjgzNzk1NTEwNzAyOTA0Mg.GePwvm.jzaZbLf59jhOH_lIgSMfWiCPJY-e_xXOgl-afM"
);

async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1212837955107029042"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
