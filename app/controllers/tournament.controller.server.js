//importing models
import team from '../models/team.js';
import tournamentModel from '../models/tournament.js';
import teamModel from '../models/team.js';
import scoreModel from '../models/score.js'

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';
import { resolveInclude } from 'ejs';

//rendering pages for tournaments pages
export function DisplayTournamentList(req, res, next) {
    tournamentModel.find(function (err, tournamentCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Tournament List', page: 'tournaments/list', tournaments: tournamentCollection, displayName: UserDisplayName(req), profileType: UserProfileType(req) });
    })
}

export function DisplayTournamentAddPage(req, res, next) {
    res.render('index', { title: 'Add Tournament', page: 'tournaments/edit', tournament: {}, score: {}, displayName: UserDisplayName(req) });
}

export function ProcessTournamentAddPage(req, res, next) {
    let newTournament = tournamentModel({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        team1: req.body.team1,
        team2: req.body.team2,
        team3: req.body.team3,
        team4: req.body.team4,
        team5: req.body.team5,
        team6: req.body.team6,
        team7: req.body.team7,
        team8: req.body.team8,
        team9: req.body.team9,
        team10: req.body.team10,
        team11: req.body.team11,
        team12: req.body.team12,
        team13: req.body.team13,
        team14: req.body.team14,
        team15: req.body.team15,
        team16: req.body.team16,

    });

    tournamentModel.create(newTournament, (err, Tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        for (let i = 0; i < 30; ++i){
            let score = scoreModel({
                scoreNumber: i+1,
                tournamentID: Tournament._id,
                score: 0
            });
            scoreModel.create(score, (err, team) => {
                if (err){
                    console.error(err);
                    res.end(err);
                }
            })
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayTournamentEditPage(req, res, next) {
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit Tournament', page: 'tournaments/edit', tournament: tournament, displayName: UserDisplayName(req) });
    })
}

export function ProcessTournamentEditPage(req, res, next) {
    let id = req.params.id;

    let newTournament = tournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        team1: req.body.team1,
        team2: req.body.team2,
        team3: req.body.team3,
        team4: req.body.team4,
        team5: req.body.team5,
        team6: req.body.team6,
        team7: req.body.team7,
        team8: req.body.team8,
        team9: req.body.team9,
        team10: req.body.team10,
        team11: req.body.team11,
        team12: req.body.team12,
        team13: req.body.team13,
        team14: req.body.team14,
        team15: req.body.team15,
        team16: req.body.team16,
    });


    tournamentModel.updateOne({ _id: id }, newTournament, (err, Tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })
}

export function ProcessTournamentDelete(req, res, next) {
    let id = req.params.id;


    scoreModel.remove({ tournamentID: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
    })

    tournamentModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayBracket(req, res, next) {
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        scoreModel.find({ tournamentID: id }, function (err, scoreCollection) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            res.render('index', { title: 'View Bracket', page: 'tournaments/view', tournament: tournament, scores: scoreCollection, displayName: UserDisplayName(req) });
        }).sort({ scoreNumber: 1 });
    })
}

export function SubmitR16Result(req, res, next) {
    let id = req.params.id;

    let score1 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 1}, {score: req.body.score1});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 1}, score1, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score2 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 2}, {score: req.body.score2});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 2}, score2, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score3 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 3}, {score: req.body.score3});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 3}, score3, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score4 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 4}, {score: req.body.score4});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 4}, score4, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score5 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 5}, {score: req.body.score5});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 5}, score5, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score6 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 6}, {score: req.body.score6});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 6}, score6, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score7 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 7}, {score: req.body.score7});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 7}, score7, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score8 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 8}, {score: req.body.score8});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 8}, score8, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score9 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 9}, {score: req.body.score9});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 9}, score9, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score10 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 10}, {score: req.body.score10});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 10}, score10, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score11 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 11}, {score: req.body.score11});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 11}, score11, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score12 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 12}, {score: req.body.score12});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 12}, score12, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score13 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 13}, {score: req.body.score13});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 13}, score13, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score14 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 14}, {score: req.body.score14});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 14}, score14, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score15 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 15}, {score: req.body.score15});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 15}, score15, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score16 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 16}, {score: req.body.score16});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 16}, score16, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score17 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 17}, {score: req.body.scoreQF1});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 17}, score17, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score18 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 18}, {score: req.body.scoreQF2});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 18}, score18, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score19 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 19}, {score: req.body.scoreQF3});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 19}, score19, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score20 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 20}, {score: req.body.scoreQF4});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 20}, score20, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score21 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 21}, {score: req.body.scoreQF5});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 21}, score21, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score22 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 22}, {score: req.body.scoreQF6});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 22}, score22, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score23 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 23}, {score: req.body.scoreQF7});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 23}, score23, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score24 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 24}, {score: req.body.scoreQF8});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 24}, score24, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score25 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 25}, {score: req.body.scoreSF1});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 25}, score25, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score26 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 26}, {score: req.body.scoreSF2});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 26}, score26, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score27 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 27}, {score: req.body.scoreSF3});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 27}, score27, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score28 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 28}, {score: req.body.scoreSF4});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 28}, score28, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score29 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 29}, {score: req.body.scoreFinal1});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 29}, score29, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    let score30 = scoreModel.findOneAndUpdate({ tournamentID: id, scoreNumber: 30}, {score: req.body.scoreFinal2});
    scoreModel.updateOne({ tournamentID: id, scoreNumber: 30}, score30, (err, Score) =>{
        if (err){
            console.err(err);
            res.end(err);
        };
    })

    res.redirect('/tournament-view/' + id);
}









