import { getTips } from '../database.js'

export const TipList = () => {

const tips = getTips()


let htmlTips = '<aside class="TipsListHtml">'


// Create HTML representations of each fish here
for (const tip of tips) {

    // Why is there a backtick used for this string?
    htmlTips += `<aside class="TipsListHtml">
    <div class="tips__title">Tip: ${tip.id}</div>
    <div class="tips__title">Title: ${tip.title}</div>
    <div class="tips__description">Description: ${tip.description}</div>
    `
}
htmlTips += `</article>`

return htmlTips
}
