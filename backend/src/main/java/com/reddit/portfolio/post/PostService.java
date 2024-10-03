package com.reddit.portfolio.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }
    
    public Post createPost(Post post) {
        post.setUserId(1L);
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }

    public Optional<Post> updatePost(Long id, Post postDetails) {
        Optional<Post> post = postRepository.findById(id);
        if (post.isPresent()) {
            Post updatedPost = post.get();
            updatedPost.setTitle(postDetails.getTitle());
            updatedPost.setContent(postDetails.getContent());
            updatedPost.setCommunity(postDetails.getCommunity());
            updatedPost.setUpdatedAt(postDetails.getUpdatedAt());
            return Optional.of(postRepository.save(updatedPost));
        }
        return Optional.empty();
    }

    public Optional<Post> deletePost(Long id) {
        Optional<Post> post = postRepository.findById(id);
        post.ifPresent(postRepository::delete);
        return post;
    }
}
