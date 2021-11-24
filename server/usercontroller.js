module.exports = {
    create: ( req, res, next ) => {
      const { username, email, password } = req.body;
        console.log( username, email, password )
        const dbInstance = req.app.get('db');
    
        dbInstance.create_user([ username, email, password])
          .then( (x) => res.status(200).send(x) )
          // .then( x => console.log(x))
          .catch( err => {
            res.status(500).send({errorMessage: " CREATE Oops! Something went wrong. Zach been informed!"});
            console.log(err);
          } );
      },
  
      login: async ( req, res, next ) => {
        const { email, password } = req.body;
          console.log( email, password )
          // Getting access to database so I can query. 
          const dbInstance = req.app.get('db');
      
          let foundUser = await dbInstance.login_user({ email, password })
          console.log(foundUser, 'Login foundUser')
            if (!foundUser ) {
              res.status(500).send({errorMessage: " Wrong username and password combination. Please try again noob!"});
              console.log(err);
            }
          res.status(200).send(foundUser[0]) 
        },
      
      getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.read_user()
          .then( user => res.status(200).send( user ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Wrong username and password combination. Please try again noob!"});
            console.log(err)
          } );
      },
    
      getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
      
        dbInstance.readAll_user()
          .then( users => console.log(users))
          .then( user => res.status(200).send( user ) )
          .catch( err => {
            res.status(500).send({errorMessage: "READ Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_user()
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "UPDATE Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_user()
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "DELETE Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    };