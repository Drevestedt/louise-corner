module.exports = {
  shorthands: undefined,

  up: (pgm) => {
    pgm.createTable('bookings', {
      id: 'id',
      name: { type: 'text', notNull: true },
      email: { type: 'text', notNull: true },
      date: { type: 'date', notNull: true },
      time: { type: 'time', notNull: true },
      guests: { type: 'integer', notNull: true }
    });
  },

  down: (pgm) => {
    pgm.dropTable('bookings');
  },
};
