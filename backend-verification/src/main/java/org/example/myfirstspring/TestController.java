package org.example.myfirstspring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    private final UserAccountRepository repo;

    public TestController(UserAccountRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/create")
    public UserAccount createUser() {
        return repo.save(new UserAccount("testuser", "test@email.com", "123456"));
    }
}