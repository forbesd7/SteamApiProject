COPY steam_data (gappid,
name,
release_date,
english,
developer,
publisher,
platforms,
required_age,
categories,
genres,
steamspy_tags,
achievements,
positive_ratings,
negative_ratings,
average_playtime,
median_playtime,
owners
price) 
FROM '/Users/derekforbes/Desktop/CodeC/Week3/apiProject/steamdata.csv' DELIMITER ',' CSV HEADER;