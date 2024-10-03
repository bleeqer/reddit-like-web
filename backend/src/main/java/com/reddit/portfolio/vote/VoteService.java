package com.reddit.portfolio.vote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public Vote createVote(Vote vote) {
        return voteRepository.save(vote);
    }

    public void deleteVote(Vote vote) {
        voteRepository.delete(vote);
    }
}
