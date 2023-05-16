const connection = require('./connection')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors());

// get student list
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM students';
    connection.query(sql, (err, data)=> {
        if (err) return res.json('error');
        return res.json(data)
    })
})

// add student
app.post('/addStudent', (req, res) => {
    const sql = 'INSERT INTO students (`name`, `email`, `mobile`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.mobile
    ]
    connection.query(sql, [values], (err, data)=> {
        if (err) return res.json('error');
        return res.json(data)
    })
})


// get single student list
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM students WHERE id =?';
    connection.query(sql, [id], (err, data)=> {
        if (err) return res.json('error');
        return res.json(data[0])
    })
})

// update student
app.put('/updateStudent/:id', (req, res) => {
    const sql = 'UPDATE students set `name` = ?, `email` = ? , `mobile` = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.email,
        req.body.mobile
    ]
    const id = req.params.id;
    connection.query(sql, [...values, id], (err, data)=> {
        if (err) return res.json('error');
        return res.json(data)
    })
})

// delete student
app.delete('/deleteStudent/:id', (req, res) => {
    const sql = 'DELETE FROM students WHERE id = ?';
    const id = req.params.id;
    connection.query(sql, [id], (err, data)=> {
        if (err) return res.json('error');
        return res.json(data)
    })
})


app.listen('4000', ()=> {
    console.log('code chl rha h')
})