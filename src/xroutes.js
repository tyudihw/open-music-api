const { deleteSongByIdHandler } = require('./xhandler');
const { editSongByIdHandler } = require('./xhandler');
const { getSongByIdHandler } = require('./xhandler');
const { addSongHandler, getAllSongsHandler } = require('./xhandler');

const routes = [
  {
    method: 'POST',
    path: '/songs',
    handler: addSongHandler,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: getAllSongsHandler,
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: getSongByIdHandler,
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: editSongByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: deleteSongByIdHandler,
  },
];

module.exports = routes;