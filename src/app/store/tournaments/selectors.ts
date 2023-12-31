import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TournamentState } from './state'

export const tournamentsSelector = createFeatureSelector<TournamentState>('tournaments')

export const tournaments = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.tournaments.data);
export const tournamentsActions = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.tournaments.actions);

export const joinedTournament = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.joined.data)
export const joinedTournamentActions = createSelector(tournamentsSelector, (tournamentState: TournamentState) => tournamentState.joined.actions)
