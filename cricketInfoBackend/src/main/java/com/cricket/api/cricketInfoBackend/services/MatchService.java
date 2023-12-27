package com.cricket.api.cricketInfoBackend.services;

import com.cricket.api.cricketInfoBackend.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    // Get all Matches

    List<Match> getAllMatches();

    List<Match> getLiveMatches();

    List<List<String>> getPointTable();

}
