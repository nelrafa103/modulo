-- name: GetUserByEmail :one
SELECT id, email, password_hash, created_at, updated_at
FROM users
WHERE email = @email;

-- name: CreateSession :one
INSERT INTO sessions (user_id, token_hash, expires_at)
VALUES (@user_id, @token_hash, @expires_at)
RETURNING id, user_id, token_hash, expires_at, created_at;