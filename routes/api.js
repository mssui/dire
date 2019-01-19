const express = require('express')
const router = express.Router()
const Datas = require('../services/data-service')


// get a list of Datas from the db

router.get('/datas', async (req, res, next) => {
  const postMap = await Datas.findAll()
  let postData = []
  // For loop to filter the main data from postMap
  for (var i = 0; i < postMap.length; i++) {
    postData.push({
      match_id: postMap[i].match_id,
      duration: postMap[i].duration,
      start_time: postMap[i].start_time,
      radiant_team_id: postMap[i].radiant_team_id,
      radiant_name: postMap[i].radiant_name,
      dire_team_id: postMap[i].dire_team_id,
      dire_name: postMap[i].dire_name,
      leagueid: postMap[i].leagueid,
      league_name: postMap[i].league_name,
      series_id: postMap[i].series_id,
      series_type: postMap[i].series_type,
      radiant_score: postMap[i].radiant_score,
      dire_score: postMap[i].dire_score,
      radiant_win: postMap[i].radiant_win
    })
  }

  res.send(postData)
 
})


module.exports = router
