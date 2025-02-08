const { 
SlashCommandBuilder, 
EmbedBuilder
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('end')
        .setDescription('End the Session'),
    async execute(interaction) {
      const embed = new EmbedBuilder()
            .setTitle('Session Ended')
            .setDescription(`${interaction.user}'s Session has now ended. lf you missed the session, please come back next time for another session`)
            .setColor("#63AAFF")

  const channel = interaction.channel
  interaction.reply({content: 'Sent embed', ephemeral: true})
  channel.send( {content: '@everyone', embeds: [embed]})
    }
}