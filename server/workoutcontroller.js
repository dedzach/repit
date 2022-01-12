module.exports = {
    create: async( req, res, next ) => {
      const { workout_name, user_id } = req.body;
        const dbInstance = req.app.get('db');
    
        const createWorkout = await dbInstance.create_workout([ workout_name, user_id ])
        try{
        if ( createWorkout ){ 
           const workouts = await dbInstance.readAll_workout()
           console.log(workouts)
          //   .then( workout => console.log(users))
            res.status(200).send( workouts ) 
        }}
        catch(err){
        res.status(500).send({errorMessage: " READ Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        }
      },
      
      getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.read_workout( [id] )
          .then( workout => res.status(200).send( workout ) )
          .catch( err => {
            res.status(500).send({errorMessage: " READ Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
      
        dbInstance.readAll_workout()
        //   .then( workout => console.log(users))
          .then( workout => res.status(200).send( workout ) )
          .catch( err => {
            res.status(500).send({errorMessage: "READ Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_workout()
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "UPDATE Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      delete: async ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { workout_id } = req.params;
// update or create you only send bodies
        let deleteWorkout = await dbInstance.delete_workout({ workout_id })
        if (!deleteWorkout ) {
            res.status(500).send({errorMessage: " Wrong username and password combination. Please try again noob!"});
            console.log(err);
          }
        res.sendStatus(200) 
      },
    // get and delete don't send bodies. 
        // dbInstance.delete_workout()
          // .then( () => res.sendStatus(200) )
          // .catch( err => {
          //   res.status(500).send({errorMessage: "DELETE Oops! Something went wrong. Our engineers have been informed!"});
          //   console.log(err)
          // } );
    };