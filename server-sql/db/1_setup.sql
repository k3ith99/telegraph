DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(250),
    pseudonym  varchar(250),
    post_body varchar
);
