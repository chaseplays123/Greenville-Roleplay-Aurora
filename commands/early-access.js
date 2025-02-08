const { 
SlashCommandBuilder, 
EmbedBuilder
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('early-access')
        .setDescription('Sends an early access embed to the early access channel.'),
    async execute(interaction) {
      const embed = new EmbedBuilder()
            .setTitle('Session Early Access')
            .setDescription(`${interaction.user} is now doing early access to their session. Please head to the early access channel to join the session`)
            .setColor("#63AAFF")

  const channel = interaction.channel;
  interaction.reply({content: 'Sent embed', ephemeral: true})
  channel.send({
    content: '@everyone', 
    embeds: [embed]
  })
    }
}