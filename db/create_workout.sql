INSERT INTO workout (workout_name, user_id ) VALUES ( $1, $2 )
RETURNING *
-- first paramenter first workout_name, second forgine key for user_id, 