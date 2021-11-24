INSERT INTO currentworkout ( reps, weight, exercise, time, sets, workout_id ) VALUES ( $1, $2, $3, $4, $5, $6 )
RETURNING * 