require('dotenv').config()
const express = require ('express');
const cors = require ('cors');
const app = express();
const massive = require ('massive')
const user_controller = require ('./usercontroller') 
const workout_controller = require('./workoutcontroller')
const exercise_controller = require('./exercisecontroller')


app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())

const { PORT, CONNECTION_STRING } = process.env;

// const PORT = process.env.PORT || 3333;

console.log(process.env.PORT)

// app.get('/api', function (req,res) {
//     return res.send('hello')
// })

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        console.log('Database connected')
        app.set("db", dbInstance);
      })
      .catch(err => console.log(err));

      app.post('/api/user', user_controller.create);
      app.post('/api/user/login', user_controller.login);
      app.get('/api/user', user_controller.getAll);
      app.get('/api/user/:id', user_controller.getOne);
      app.put('/api/user/:id', user_controller.update);
      app.delete('/api/user/:id', user_controller.delete);
    
    app.post('/api/workout', workout_controller.create);
    app.get('/api/workout', workout_controller.getAll);
    app.get('/api/workout/:id', workout_controller.getOne);
    app.put('/api/workout/:id', workout_controller.update);
    app.delete('/api/workout/:workout_id', workout_controller.delete);

    app.post('/api/exercise', exercise_controller.create);
    app.get('/api/exercise/:id', exercise_controller.getAll);
    app.put('/api/exercise/:id', exercise_controller.update);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT || 3333}.`);
    });