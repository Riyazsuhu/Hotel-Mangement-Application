const request = require('supertest')
const app = require('../src/app')
const { CarRental, Room, LiveEvent, MeetingRoom, Dinning } = require('../src/models/guest')
const { demoService, demoDinnig, demoCarrental, demoLiveevent, demoMeetingroom, demoRoom, rating } = require('./fixtures/db')
const Service = require('../src/models/staff/service')
beforeEach(async() => {
    await Dinning.deleteMany()
    await MeetingRoom.deleteMany()
    await LiveEvent.deleteMany()
    await Room.deleteMany()
    await CarRental.deleteMany()
    await new CarRental(demoCarrental).save()
    await new Room(demoRoom).save()
    await new LiveEvent(demoLiveevent).save()
    await new MeetingRoom(demoMeetingroom).save()
    await new Dinning(demoDinnig).save()
})
//rating car rental
test('should rating car rental with valid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoCarrental._id}`)
    .set('service_id', demoService._id)
    .send(rating).expect(200)
})
test('should not rating car rental with invalid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoCarrental._id}`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(404)
})
test('should not rating car rental with invalid booking ID', async() => {
    request(app).patch(`/api/rating/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(400)
})
//rating room
test('should rating room with valid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoRoom._id}`)
    .set('service_id', demoService._id)
    .send(rating).expect(200)
})
test('should not rating room with invalid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoRoom._id}`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(404)
})
test('should not rating room with invalid booking ID', async() => {
    request(app).patch(`/api/rating/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(400)
})
//rating Live Event
test('should rating Live event with valid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoLiveevent._id}`)
    .set('service_id', demoService._id)
    .send(rating).expect(200)
})
test('should not rating Live event with invalid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoLiveevent._id}`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(404)
})
test('should not rating Live event with invalid booking ID', async() => {
    request(app).patch(`/api/rating/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(400)
})
//rating Meeting room
test('should rating Meeting room with valid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoMeetingroom._id}`)
    .set('service_id', demoService._id)
    .send(rating).expect(200)
})
test('should not rating Meeting room with invalid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoMeetingroom._id}`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(404)
})
test('should not rating Meeting room with invalid booking ID', async() => {
    request(app).patch(`/api/rating/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(400)
})
//rating Dinning
test('should rating Dinning with valid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoDinnig._id}`)
    .set('service_id', demoService._id)
    .send(rating).expect(200)
})
test('should not rating Dinning with invalid Service ID', async() => {
    request(app).patch(`/api/rating/carrental/${demoDinnig._id}`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(404)
})
test('should not rating Dinning with invalid booking ID', async() => {
    request(app).patch(`/api/rating/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send(rating).expect(400)
})