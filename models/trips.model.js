const getAll = () => {
    return db.query('SELECT * FROM trips');
}

const create = ({
    destination, min_traveler, max_traveler, min_age, max_age, departure_date, duration, price, description }) => {
    return db.query(
        'INSERT INTO trips (destination, min_traveler, max_traveler, min_age, max_age, departure_date, duration, price, description) VALUES (?,?,?,?,?,?,?,?,?)',
        [destination, min_traveler, max_traveler, min_age, max_age, departure_date, duration, price, description]);
}

const editById = (tripId, { destination, min_traveler, max_traveler, min_age, max_age, departure_date, duration, price, description }) => {
    return db.query('UPDATE trips SET destination = ?, min_traveler = ?, max_traveler = ?, min_age = ?, max_age = ?, departure_date = ?, duration = ?, price = ?, description = ? WHERE id = ?', [destination, min_traveler, max_traveler, min_age, max_age, departure_date, duration, price, description, tripId]);
}

const deleteById = (tripId) => {
    return db.query('DELETE FROM trips WHERE id = ?', [tripId]);
}

const getTripById = (tripId) => {
    return db.query('SELECT * FROM trips WHERE id = ?', [tripId]);
}

const getTripsByDestination = (destination) => {
    return db.query('SELECT * FROM trips WHERE destination = ?', [destination]);
}

const getTripsByUser = (userId) => {
    return db.query('SELECT t.* FROM users_has_trips ut JOIN trips t ON t.id = ut.trips_id WHERE ut.users_id = ?', [userId]);
}

module.exports = { getAll, create, editById, deleteById, getTripById, getTripsByDestination, getTripsByUser }