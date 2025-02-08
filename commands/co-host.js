const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('co-host')
  .setDescription('cohost command'),
  async execute(interaction) {
    const cohostEmbed = new EmbedBuilder()
      .setColor("#63AAFF")
      .setTitle('Session Co-Hosting')
    .setDescription(`${interaction.user} is co-hosting the current session`)
  
  channel = interaction.channel
  interaction.reply({content: 'Co-hosting session', ephemeral: true})
  channel.send({embeds: [cohostEmbed]});
  }
}