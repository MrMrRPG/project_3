CREATE TABLE top_women_players_aug_2020 (
  fideid int,
  name VARCHAR(255),
  dederation VARCHAR(255),
  gender VARCHAR(255),
  birth_year INT,
  title VARCHAR(255),
  std_rating INT,
  rapid_rating INT,
  blitz_rating INT,
  inactive VARCHAR(255)
);

ALTER TABLE top_women_players_aug_2020
RENAME COLUMN dederation TO federation;

ALTER TABLE top_women_players_aug_2020
DROP COLUMN gender;

SELECT name
FROM top_women_players_aug_2020
WHERE inactive IS NOT NULL;

CREATE TABLE chessdotcom_players (
	username VARCHAR(255),
	country VARCHAR(255),
	blitz_wins INT,
	blitz_losses INT,
	blitz_draws INT,
	bullet_dins INT,
	bullet_losses INT,
	bullet_draw INT,
	Rapid_wins INT,
	Rapid_losses INT,
	Rapid_draws INT,
	blitz_best_rating INT,
	bullet_best_rating INT,
	rapid_best_rating INT
);

SELECT *
FROM chessdotcom_players;

CREATE TABLE fide_historical (
	ranking_date VARCHAR(255),
	rank INT,
	name VARCHAR(255),
	title VARCHAR(50),
	country VARCHAR(50),
	rating INT,
	games INT,
	birth_year INT
);

SELECT *
FROM fide_historical
ORDER BY rating DESC;