package com.reddit.portfolio.vote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public Vote vote(Long postId, Vote vote) {
        vote.setPostId(postId);

        Vote existingVote = voteRepository.findByPostIdAndUserId(postId, vote.getUserId());

        if (existingVote != null) {
            if (existingVote.getVoteType() == vote.getVoteType()) {
                voteRepository.delete(existingVote);
            } else {
                existingVote.setVoteType(vote.getVoteType());
                voteRepository.save(existingVote);
            }
        } else {
            voteRepository.save(vote);
        }

        return vote;
    }
}
