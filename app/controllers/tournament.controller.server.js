//importing models
import team from '../models/team.js';
import tournamentModel from '../models/tournament.js';
import teamModel from '../models/team.js';

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';

//rendering pages for tournaments pages
export function DisplayTournamentList(req, res, next){
    tournamentModel.find(function(err, tournamentCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Tournament List', page: 'tournaments/list', tournaments: tournamentCollection, displayName: UserDisplayName(req), profileType: UserProfileType(req) });
    })
}

export function DisplayTournamentAddPage(req, res, next){
    res.render('index', {title: 'Add Tournament', page: 'tournaments/edit', tournament: {}, team: {}, displayName: UserDisplayName(req)});
}

export function ProcessTournamentAddPage(req, res, next){
    let newTournament = tournamentModel({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teams: req.body.teams
    });

    tournamentModel.create(newTournament, (err, Tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        let teams = Tournament.teams.split(",");
        for (let index = 0; index < teams.length; ++index){
            const teamName = teams[index];
            let newTeam = teamModel({
                name: teamName,
                teamNumber: index + 1,
                tournamentID: Tournament._id,
                score: 0
            });
            teamModel.create(newTeam, (err, team) => {
                if (err){
                    console.error(err);
                    res.end(err);
                }
            })
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayTournamentEditPage(req, res, next){
    let id = req.params.id;

    tournamentModel.findById(id, (err, tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Tournament', page: 'tournaments/edit', tournament: tournament, displayName: UserDisplayName(req)});
    })
}

export function ProcessTournamentEditPage(req, res, next){
    let id = req.params.id;

    teamModel.remove({tournamentID: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
    })
    
    let newTournament = tournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        teams: req.body.teams
    });

    let teams = req.body.teams.split(",");
        for (let index = 0; index < teams.length; ++index){
            const teamName = teams[index];
            let newTeam = teamModel({
                name: teamName,
                teamNumber: index + 1,
                tournamentID: req.body.id,
                score: 0
            });
            teamModel.create(newTeam, (err, team) => {
                if (err){
                    console.error(err);
                    res.end(err);
                }
            })
        }

    tournamentModel.updateOne({_id: id}, newTournament, (err, Tournament) => {
        if (err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/tournament-list');
    })



}

export function ProcessTournamentDelete(req, res, next){
    let id = req.params.id;
    

    teamModel.remove({tournamentID: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
    })
    
    tournamentModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/tournament-list');
    })
}

export function DisplayBracket(req, res, next){
    let id = req.params.id;

    // let teams = teamModel.collection;
    // let teamCollection;
    // for (let index = 0; index < teams.length; ++index){
    //     if (teams[index].tournamentID = req.body.id){
    //         teamCollection[index] = teams[index];
    //     }
    // }
    
    // teamModel.find(function (err, teamCollection){});
    // let teams = tournamentModel.collection;

    tournamentModel.findById(id, (err, tournament) => {
        if(err){
            console.error(err);
            res.end(err);
        }
      
        teamModel.find({tournamentID: id}, function(err, teamCollection){
            if(err){
                console.error(err);
                res.end(err);
            }
            res.render('index', {title: 'View Bracket', page: 'tournaments/view', tournament: tournament, teams: teamCollection, displayName: UserDisplayName(req)});
        }).sort({ teamNumber: 1});
        // let teams = teamModel.find({tournamentID: id});
        // res.render('index', {title: 'View Bracket', page: 'tournaments/view', tournament: tournament, teams: teams, displayName: UserDisplayName(req)});

    })
}

