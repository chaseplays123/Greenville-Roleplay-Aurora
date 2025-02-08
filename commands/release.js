const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('release')
  .setDescription('Release Command')
  .addStringOption(option => option.setName('link')
  .setDescription('minimum reactions for a session')
  .setRequired(true)),
  async execute(interaction) {
    const link = interaction.options.getString('link')
    const releaseEmbed = new EmbedBuilder()
    .setColor("#63AAFF")
    .setTitle('Session Released')
   .setDescription(`${interaction.user}'s Session has now Released. Please click the link below to join the server Please remember to check out the guidelines and to register your vehicle
   
**Link:** ${link}`)
    
    channel = interaction.channel
    interaction.reply({content: 'Session Released', ephemeral: true})
    channel.send({content: `@everyone`, embeds: [releaseEmbed]})
  }
}