const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');



app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'forside.html'));
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.search;

    const searchResults = searchPages(searchTerm);

    res.send(searchResults);
});


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();


const searchQuery =
form.querySelector('input').value;
window.location.href = '/sok?q=' + searchQuery;

});






