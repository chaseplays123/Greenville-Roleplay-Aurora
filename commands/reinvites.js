const { 
SlashCommandBuilder, 
EmbedBuilder
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('reinvites')
  .setDescription('Reinvites Command')
  .addStringOption(option => option.setName('link')
  .setDescription('The link to the session for the reinvites')
  .setRequired(true)),
  async execute(interaction) {
    const link = interaction.options.getString('link')
    const releaseEmbed = new EmbedBuilder()
    .setColor("#63AAFF")
    .setTitle('Session Reinvites')
   .setDescription(`${interaction.user} is now doing reinvites. Please click the link below to join the server Please remember to check out the guidelines and to register your vehicle
   
**Link:** ${link}`)
    
    channel = interaction.channel
    interaction.reply({content: 'Session Released', ephemeral: true})
    channel.send({content: `@everyone`, embeds: [releaseEmbed]})
  }
}