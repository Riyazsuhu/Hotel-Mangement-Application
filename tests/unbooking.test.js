const request = require('supertest')
const app = require('../src/app')
const { CarRental, Room, LiveEvent, MeetingRoom, Dinning } = require('../src/models/guest')
const { demoService, demoDinnig, demoCarrental, demoLiveevent, demoMeetingroom, demoRoom } = require('./fixtures/db')
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
//unbook car rental
test('should unbook car rental with valid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoCarrental._id}`)
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not unbook car rental with invalid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoCarrental._id}`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(404)
})
test('should not unbook car rental with invalid booking ID', async() => {
    request(app).delete(`/api/unbook/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(400)
})
//unbook room
test('should unbook room with valid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoRoom._id}`)
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not unbook room with invalid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoRoom._id}`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(404)
})
test('should not unbook room with invalid booking ID', async() => {
    request(app).delete(`/api/unbook/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(400)
})
//unbook Live Event
test('should unbook Live event with valid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoLiveevent._id}`)
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not unbook Live event with invalid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoLiveevent._id}`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(404)
})
test('should not unbook Live event with invalid booking ID', async() => {
    request(app).delete(`/api/unbook/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(400)
})
//unbook Meeting room
test('should unbook Meeting room with valid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoMeetingroom._id}`)
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not unbook Meeting room with invalid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoMeetingroom._id}`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(404)
})
test('should not unbook Meeting room with invalid booking ID', async() => {
    request(app).delete(`/api/unbook/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(400)
})
//unbook Dinning
test('should unbook Dinning with valid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoDinnig._id}`)
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not unbook Dinning with invalid Service ID', async() => {
    request(app).delete(`/api/unbook/carrental/${demoDinnig._id}`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(404)
})
test('should not unbook Dinning with invalid booking ID', async() => {
    request(app).delete(`/api/unbook/carrental/87908324983`)
    .set('service_id', 'ghcvjhvh')
    .send().expect(400)
})