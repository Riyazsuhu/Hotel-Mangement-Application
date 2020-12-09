const request = require('supertest')
const Staff = require('../src/models/staff/staff')
const Service = require('../src/models/staff/service')
const app = require('../src/app')
const { demoStaff, demoService, demoService1, demoService2, demoService3, demoService4 } = require('./fixtures/db')
beforeEach(async() => {
    await Service.deleteMany()
    await Staff.deleteMany()
    await new Staff(demoStaff).save()
    await new Service(demoService).save()
    await new Service(demoService1).save()
    await new Service(demoService2).save()
    await new Service(demoService3).save()
    await new Service(demoService4).save()
})
//car rental service test
test('should add car renatal service and staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService).expect(201)
})
test('should not add car renatal service and staff would not authenticate', async() =>{
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${'fsdfsdfsdffs'}`)
    .send(demoService).expect(404)
})
test('should get car renatal service and staff verify using jwt token', async() =>{
    request(app).get('/api/service/get')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService.service_type).expect(200)
})
test('should update car rental service and staff verify using jwt token', async() =>{
    request(app).patch(`/api/service/update/${demoService._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService).expect(200)
})
test('should not update car rental service with invalid update', async() =>{
    request(app).patch(`/api/service/update/${demoService._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(400)
})
test('should not update car rental service with invalid Service Id', async() =>{
    request(app).patch(`/api/service/update/hjsdakjdhssad`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(404)
})
test('should delete car rental service and verity staff authentication', async() =>{
    request(app).delete(`/api/service/delete/${demoService._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('should not delete car rental service with invalid service ID', async() =>{
    request(app).delete(`/api/service/delete/dgsfsdfsdf`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(400)
})
//room service test
test('should add room service and staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService1).expect(201)
})
test('should not add room service and staff would not authenticate', async() =>{
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${'fsdfsdfsdffs'}`)
    .send(demoService1).expect(404)
})
test('should get room service and staff verify using jwt token', async() =>{
    request(app).get('/api/service/get')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService1.service_type).expect(200)
})
test('should update room service and staff verify using jwt token', async() =>{
    request(app).patch(`/api/service/update/${demoService1._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService1).expect(200)
})
test('should not update room service with invalid update', async() =>{
    request(app).patch(`/api/service/update/${demoService1._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(400)
})
test('should not update room service with invalid Service Id', async() =>{
    request(app).patch(`/api/service/update/hjsdakjdhssad`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(404)
})
test('should delete room service and verity staff authentication', async() =>{
    request(app).delete(`/api/service/delete/${demoService1._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('should not delete room service with invalid service ID', async() =>{
    request(app).delete(`/api/service/delete/dgsfsdfsdf`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(400)
})
//meeting room test
test('should add meeting room and staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService2).expect(201)
})
test('should not add meeting room and staff would not authenticate', async() =>{
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${'fsdfsdfsdffs'}`)
    .send(demoService2).expect(404)
})
test('should get meeting room and staff verify using jwt token', async() =>{
    request(app).get('/api/service/get')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService2.service_type).expect(200)
})
test('should update meeting room and staff verify using jwt token', async() =>{
    request(app).patch(`/api/service/update/${demoService2._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService2).expect(200)
})
test('should not update meeting room with invalid update', async() =>{
    request(app).patch(`/api/service/update/${demoService2._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(400)
})
test('should not update meeting room with invalid Service Id', async() =>{
    request(app).patch(`/api/service/update/hjsdakjdhssad`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(404)
})
test('should delete meeting room and verity staff authentication', async() =>{
    request(app).delete(`/api/service/delete/${demoService2._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('should not delete meeting room with invalid service ID', async() =>{
    request(app).delete(`/api/service/delete/dgsfsdfsdf`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(400)
})
//live event test
test('should add live event and staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService3).expect(201)
})
test('should not add live event and staff would not authenticate', async() =>{
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${'fsdfsdfsdffs'}`)
    .send(demoService3).expect(404)
})
test('should get live event and staff verify using jwt token', async() =>{
    request(app).get('/api/service/get')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService3.service_type).expect(200)
})
test('should update live event and staff verify using jwt token', async() =>{
    request(app).patch(`/api/service/update/${demoService3._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService3).expect(200)
})
test('should not update live event with invalid update', async() =>{
    request(app).patch(`/api/service/update/${demoService3._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(400)
})
test('should not update live event with invalid Service Id', async() =>{
    request(app).patch(`/api/service/update/hjsdakjdhssad`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(404)
})
test('should delete live event and verity staff authentication', async() =>{
    request(app).delete(`/api/service/delete/${demoService3._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('should not delete live event with invalid service ID', async() =>{
    request(app).delete(`/api/service/delete/dgsfsdfsdf`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(400)
})
//dinning service test
test('should add dinning and staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService4).expect(201)
})
test('should not add dinning and staff would not authenticate', async() =>{
    request(app).post('/api/service/add')
    .set('Authorization',`Bearer ${'fsdfsdfsdffs'}`)
    .send(demoService4).expect(404)
})
test('should get dinning and staff verify using jwt token', async() =>{
    request(app).get('/api/service/get')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService4.service_type).expect(200)
})
test('should update dinning and staff verify using jwt token', async() =>{
    request(app).patch(`/api/service/update/${demoService4._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send(demoService4).expect(200)
})
test('should not update dinning with invalid update', async() =>{
    request(app).patch(`/api/service/update/${demoService4._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(400)
})
test('should not update dinning with invalid Service Id', async() =>{
    request(app).patch(`/api/service/update/hjsdakjdhssad`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({ bringups: 'dfgdfdf' }).expect(404)
})
test('should delete dinning and verity staff authentication', async() =>{
    request(app).delete(`/api/service/delete/${demoService4._id}`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('should not delete dinning with invalid service ID', async() =>{
    request(app).delete(`/api/service/delete/dgsfsdfsdf`)
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(400)
})