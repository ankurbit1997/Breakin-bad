const fetch = require("node-fetch")
const path = require("path")
exports.createPages = async ({ actions }) => {
  const charTemplate = path.resolve(`${__dirname}/src/templates/Character.js`)
  const charAmpTemplate = path.resolve(
    `${__dirname}/src/templates/Character.amp.js`
  )

  const res = await fetch("https://www.breakingbadapi.com/api/characters")
  const data = await res.json()

  data.forEach(char => {
    actions.createPage({
      path: `/character/${char.char_id}`,
      component: charTemplate,
      context: { char },
    })
  })
  data.forEach(char => {
    actions.createPage({
      path: `/character/${char.char_id}/amp`,
      component: charAmpTemplate,
      context: { char },
    })
  })
}
