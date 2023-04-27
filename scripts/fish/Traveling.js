import { getTravel } from "../database.js";

export const TravelList = () => {

    const Trav = getTravel()


let htmlTrav = '<aside class="travelTips">'

for (const Travs of Trav) {
    htmlTrav += `<aside class="travelTips">
    <div class="tips__title">Tip: ${Travs.id}</div>
    <div class="tips__title">Title: ${Travs.tip}</div>`
}

htmlTrav += `</article>`

return htmlTrav
}