import { getFish } from './database.js'

const allFish = getFish()
for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".FishListHtml")
parentHTMLElement.innerHTML = FishList()

//--

import { getTips } from './database.js'
const allTips = getTips()
for (const tip of allTips) {
    console.log(tip)
}

import { TipList } from './fish/Tips.js'

const parentHTMLElement2 = document.querySelector(".TipsListHtml")
const TipHTML = TipList()
parentHTMLElement2.innerHTML = TipHTML

//--


import { getLocation } from './database.js'
const allLocs = getLocation()
for (const loc of allLocs) {
    console.log(loc)
}

import { locationList } from './fish/Locations.js'

const parentHTMLElement3 = document.querySelector(".LocationListHtml")
const LocList = locationList()
parentHTMLElement3.innerHTML = LocList


//--

import { getTravel } from './database.js'
const allTravel = getTravel()
for (const trav of allTravel) {
    console.log(trav)
}

import { TravelList } from './fish/Traveling.js'

const parentHTMLElement4 = document.querySelector(".travelTips")
const TravelL = TravelList()
parentHTMLElement4.innerHTML = TravelL







