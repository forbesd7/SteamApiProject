create table steam_data (
    gappid serial NOT NULL,
    name text,
    release_date timestamp,
    english text,
    developer text,
    publisher text,
    platforms text,
    required_age integer,
    categories text,
    genres text,
    steamspy_tags text,
    achievements integer,
    positive_ratings integer,
    negative_ratings integer,
    average_playtime INTEGER,
    median_playtime INTEGER,
    owners text,
    price float
)

