module.exports = {
    // app.post('/api/exercise', exercise_controller.create);
      create: async ( req, res, next ) => {
        const { reps, weight, exercise, time, sets, workout_id } = req.body;
          const dbInstance = req.app.get('db');
      
          const createExercise = await dbInstance.create_exercise([ reps, weight, exercise, time, sets, workout_id])
          try{
          if ( createExercise ){
            const exercises = await dbInstance.readAll_exercises()
            console.log(exercises)
            res.status(200).send( exercises )
          }}
          catch(err){
            res.status(500).send({errorMessage: " CREATE Oops! Something went wrong. Zach has been informed!"});
            console.log(err);
          }
            // .then( x => console.log(x))     
        },
  
        getAll: async ( req, res, next ) => {
          const dbInstance = req.app.get('db');
          const { id } = req.params;
          // req.params is an object and you're trying to grab the id key and set the value to it
          // destructuring. 
          // Curlies is the keyname and equals is where you're getting the value from. 
          const exercises = await dbInstance.read_exercise([id])
          if (exercises ){
            res.status(200).send( exercises )
          }
          // If you choose to pass it in as template literals you don't need the square brackets, 
          // square brackets for dollar sign variables. 
        
              res.status(500).send({errorMessage: "READ Oops! Something went wrong. Our engineers have been informed!"});
        },
  
        update: async ( req, res, next ) => {
          const dbInstance = req.app.get('db');
          const { id } = req.params;
  
          const incrementWorkout = await dbInstance.read_allexercise([id])
          if ( incrementWorkout[0].reps === 12 ){
            const weight = incrementWorkout[0].weight+5 
            console.log(weight)
            return dbInstance.update_exercise([id, weight])
            .then( incrementWorkout => res.status(200).send( incrementWorkout ) )
            .catch( err => {
              res.status(500).send({errorMessage: " READ Oops! Something went wrong. Our engineers have been informed!"});
              console.log(err)})
          } 
          else {
           const reps = incrementWorkout[0].reps+1
           console.log(reps)
          //  ++ operand implies that it increments by one only. 
            //  = incrementWorkout[0].reps++
            return dbInstance.update_repsexercise([ reps, id])
            .then( incrementWorkout => res.status(200).send( incrementWorkout ) )
            .catch( err => {
              res.status(500).send({errorMessage: " READ Oops! Something went wrong. Our engineers have been informed!"});
              console.log(err)})
          } 
          }
    
    
  
          // sql query to grab workout info data. 
          // Do something with that data, check if reps is 12 then change reps to 8 and increment weight by +5
          // otherwise, increment reps by +1. 
      
          // dbInstance.update_exercise() will edit reps and weight
            
      
  
      //   getOne: async ( req, res, next ) => {
      //     const { exercise, sets, reps, weight, time } = req.body;
      //       // Getting access to database so I can query. 
      //       const dbInstance = req.app.get('db');
        
      //       let foundExercise = await dbInstance.read_exercise({ exercise, sets, reps, weight, time })
      //       console.log(foundExercise, 'founderExercise')
      //         if (!foundExercise ) {
      //           res.status(500).send({errorMessage: " Can't find the exercise"});
      //           console.log(err);
      //         }
      //       res.status(200).send(foundExercise[0]) 
      //     },
      }