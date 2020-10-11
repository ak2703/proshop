import express  from 'express';
import colors from 'colors';

const app = express()
app.listen(5000, console.log("Server running on port 5000".yellow))