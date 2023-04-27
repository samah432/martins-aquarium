import { getLocation } from '../database.js'

export const locationList = () => {

    const Loc = getLocation()


let htmlLoc = '<div class="LocationListHtml">'

for (const Locs of Loc) {
    htmlLoc += `<div class="LocationListHtml">
    <div class="tips__title">Name: ${Locs.name}</div>
    <div class="tips__title">Title: ${Locs.location}</div>
    <div class="tips__description">Description: ${Locs.description}</div>
    `
}

htmlLoc += `</article>`

return htmlLoc
}