//importing models
import team from '../models/team.js';
import tournamentModel from '../models/tournament.js';
import teamModel from '../models/team.js';

// import DisplayName Utility method
import { UserDisplayName, UserProfileType } from '../utils/index.js';
import { resolveInclude } from 'ejs';

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
        if(err){
            console.error(err);
            res.end(err);
        };
 
        let team1 = teamModel({
            name: req.body.team1,
            teamNumber: 1,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team1, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team2 = teamModel({
            name: req.body.team2,
            teamNumber: 2,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team2, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team3 = teamModel({
            name: req.body.team3,
            teamNumber: 3,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team3, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team4 = teamModel({
            name: req.body.team4,
            teamNumber: 4,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team4, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team5 = teamModel({
            name: req.body.team5,
            teamNumber: 5,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team5, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team6 = teamModel({
            name: req.body.team6,
            teamNumber: 6,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team6, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team7 = teamModel({
            name: req.body.team7,
            teamNumber: 7,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team7, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team8 = teamModel({
            name: req.body.team8,
            teamNumber: 8,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team8, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team9 = teamModel({
            name: req.body.team9,
            teamNumber: 9,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team9, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team10 = teamModel({
            name: req.body.team10,
            teamNumber: 10,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team10, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team11 = teamModel({
            name: req.body.team11,
            teamNumber: 11,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team11, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team12 = teamModel({
            name: req.body.team12,
            teamNumber: 12,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team12, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team13 = teamModel({
            name: req.body.team13,
            teamNumber: 13,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team13, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team14 = teamModel({
            name: req.body.team14,
            teamNumber: 14,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team14, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team15 = teamModel({
            name: req.body.team15,
            teamNumber: 15,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team15, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });

        let team16 = teamModel({
            name: req.body.team16,
            teamNumber: 16,
            tournamentID: Tournament._id,
            score: 0
        });
        teamModel.create(team16, (err, team) => {
            if (err){
                console.error(err);
                res.end(err);
            }
        });
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


    let team1 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 1}, {name: req.body.team1});
    teamModel.updateOne({tournamentID: id, teamNumber: 1}, team1, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team2 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 2}, {name: req.body.team2});
    teamModel.updateOne({tournamentID: id, teamNumber: 2}, team2, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team3 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 3}, {name: req.body.team3});
    teamModel.updateOne({tournamentID: id, teamNumber: 3}, team3, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team4 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 4}, {name: req.body.team4});
    teamModel.updateOne({tournamentID: id, teamNumber: 4}, team4, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team5 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 5}, {name: req.body.team5});
    teamModel.updateOne({tournamentID: id, teamNumber: 5}, team5, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team6 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 6}, {name: req.body.team6});
    teamModel.updateOne({tournamentID: id, teamNumber: 6}, team6, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team7 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 7}, {name: req.body.team7});
    teamModel.updateOne({tournamentID: id, teamNumber: 7}, team7, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team8 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 8}, {name: req.body.team8});
    teamModel.updateOne({tournamentID: id, teamNumber: 8}, team8, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team9 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 9}, {name: req.body.team9});
    teamModel.updateOne({tournamentID: id, teamNumber: 9}, team9, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team10 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 10}, {name: req.body.team10});
    teamModel.updateOne({tournamentID: id, teamNumber: 10}, team10, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team11 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 11}, {name: req.body.team11});
    teamModel.updateOne({tournamentID: id, teamNumber: 11}, team11, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team12 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 12}, {name: req.body.team12});
    teamModel.updateOne({tournamentID: id, teamNumber: 12}, team12, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team13 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 13}, {name: req.body.team13});
    teamModel.updateOne({tournamentID: id, teamNumber: 13}, team13, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team14 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 14}, {name: req.body.team14});
    teamModel.updateOne({tournamentID: id, teamNumber: 14}, team14, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team15 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 15}, {name: req.body.team15});
    teamModel.updateOne({tournamentID: id, teamNumber: 15}, team15, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })

    let team16 = teamModel.findOneAndUpdate({tournamentID: id, teamNumber: 16}, {name: req.body.team16});
    teamModel.updateOne({tournamentID: id, teamNumber: 16}, team16, (err, Team) => {
        if (err){
            console.error(err);
            res.end(err);
        };
    })
   
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
    })
}

