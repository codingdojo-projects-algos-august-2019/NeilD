-- resume app project
-- neil denning




SELECT * FROM registered_users;

SELECT * FROM resume_users;

SELECT * FROM employers;

SELECT * FROM skills;

SELECT * FROM vidoes;

SELECT * FROM images;

SELECT *
FROM registered_users
LEFT JOIN resume_users
ON resume_users.registered_user_id = registered_users.id
LEFT JOIN employers
ON registered_users.id = employers.registered_user_id
LEFT JOIN skills
ON registered_users.id = skills.registered_user_id;



















