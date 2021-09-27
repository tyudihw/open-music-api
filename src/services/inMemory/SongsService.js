const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor(service, validator) {
    this._songs = [];
    this._validator = validator;
  }

  addSong({ title, body, tags }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newSong = {
      title, tags, body, id, createdAt, updatedAt,
    };

    this._songs.push(newSong);

    const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

    if (!isSuccess) {
      // throw new Error('Lagu gagal ditambahkan');
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    return id;
  }

  getSongs() {
    return this._songs;
  }

  getSongById(id) {
    const song = this._songs.filter((n) => n.id === id)[0];
    if (!song) {
      // throw new Error('Lagu tidak ditemukan');
      throw new NotFoundError('lagu tidak ditemukan');
    }
    return song;
  }

  editSongById(id, { title, body, tags }) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      // throw new Error('Gagal memperbarui lagu. Id tidak ditemukan');
      throw new NotFoundError('Gagal memperbarui lagu. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._songs[index] = {
      ...this._songs[index],
      title,
      tags,
      body,
      updatedAt,
    };
  }

  deleteSongById(id) {
    const index = this._songs.findIndex((song) => song.id === id);
    if (index === -1) {
      // throw new Error('Lagu gagal dihapus. Id tidak ditemukan');
      throw new NotFoundError('Lagu gagal dihapus. Id tidak ditemukan');
    }
    this._songs.splice(index, 1);
  }
}

module.exports = SongsService;
