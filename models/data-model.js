const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create data Schema

 const DataSchema = new Schema({
    type: mongoose.Schema.Types.ObjectId,
    match_id:  Number,
    duration: Date,
    start_time: Date,
    radiant_team_id: Number,
    radiant_name: String,
    dire_team_id: Number,
    dire_name: String,
    leagueid: Number,
    league_name: String,
    series_id: Number,
    series_type: Number,
    radiant_score: Number,
    dire_score: Number,
    radiant_win:  Boolean
  });


  // Turn that schema to a model
module.exports = mongoose.model('datas', DataSchema); 

