package org.example.myfirstspring;

import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    private final UserAccountRepository repo;

    public AccountController(UserAccountRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/api/account/me")
    public UserAccount getUser() {
        return repo.findById(1L).orElse(null);
    }

    @PostMapping("/settings/request-email-change")
    public String verifyEmail(@RequestParam String emailcon) {

        UserAccount user = repo.findById(1L).orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (!user.getEmail().equals(emailcon)) {
            return "Email does not match";
        }

        return "OK";
    }
}