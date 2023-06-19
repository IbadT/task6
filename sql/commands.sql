-- SELECT * FROM users;

-- UPDATE todos 
-- SET title='backend', content='redev', user_id=1 
-- WHERE todos.id=1 
-- RETURNING *;

-- INSERT INTO todos (title, content, user_id)
-- VALUES ('test', 'aaa', 4)
-- RETURNING *;

-- DELETE FROM posts;

-- ALTER SEQUENCE posts_id_seq RESTART 1;

-- ALTER TABLE phones ALTER COLUMN number TYPE varchar(255);


-- !!!!!!!!!!!!!!!! ERROR: INSERT INTO todos(title, content, user_id) VALUES('title', 'redev', 1) RETURNING *;
-- Ключ (id)=(9) отсутствует в таблице 'users'