const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('startup')
  .setDescription('Startup Command')
    .addStringOption(option => option.setName('reactions')
  .setDescription('Minimum Reactions for a Session')
  .setRequired(true)),
  async execute(interaction) {
    const reactions = interaction.options.getString('reactions')
    const startupEmbed = new EmbedBuilder()
    .setColor("#63AAFF")
    .setTitle('Session Startup')
    .setDescription(`${interaction.user} is doing a Session Startup. We are required to reach ${reactions}+ Reactions to begin this session.`)
    
    channel = interaction.channel;
    channel.send( {content: '@everyone', embeds: [startupEmbed], })
    interaction.reply({content: ' sent the startup embed to the channel', ephemeral: true})
  }
}