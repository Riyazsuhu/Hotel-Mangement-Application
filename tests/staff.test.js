const request = require('supertest')
const app = require('../src/app')
const Staff = require('../src/models/staff/staff')
const { demoStaff } = require('./fixtures/db')
beforeEach(async() => {
    await Staff.deleteMany()
    await new Staff(demoStaff).save()
})
test('Should SignUp a new user', async () => {
    const res = await request(app).post('/api/staff/add').send({
        name: 'Riyaz ahmed',
        email: 'riyazsuhu19999@gmail.com',
        password: '123456'
    }).expect(201)
})
test('Should not signup already existing user', async() => {
    await request(app).post('/api/staff/add').send({
        name: demoStaff.name,
        email: demoStaff.email,
        password: demoStaff
    }).expect(400)
})
test('Should Login and generate auth token', async() => {
    await request(app).post('/api/staff/login').send({
        email: demoStaff.email,
        password: demoStaff.password
    }).expect(200)
})
test('Should not login for Invalid crididential', async() =>{
    await request(app).post('/api/staff/login').send({
        email: demoStaff.email,
        password: 'adsasd'
    }).expect(400)
})
test('Should logout for for correct current jwt token ', async() =>{
    await request(app).post('/api/staff/logout')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('Should upadte the staff data and verify jwt token', async() => {
    await request(app).patch('/api/staff/me')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({
        name: 'Irfan',
        email: 'irfan1999@gmail.com',
        password: '123456'
    }).expect(200)
})
test('Should not upadte the staff data with invalid jwt token', async() => {
    await request(app).patch('/api/staff/me')
    .set('Authorization',`Bearer ${'dfdsdsdfsdfsd'}`)
    .send({
        name: 'Irfan',
        email: 'irfan1999@gmail.com',
        password: '123456'
    }).expect(404)
})
test('Should not upadte the invalid update', async() => {
    await request(app).patch('/api/staff/me')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send({
        names: 'Irfan',
        email: 'irfan1999@gmail.com',
        password: '123456'
    }).expect(400)
})
test('Should delete the staff with valid jwt token', async() => {
    await request(app).delete('/api/staff/me')
    .set('Authorization',`Bearer ${demoStaff.tokens[0].token}`)
    .send().expect(200)
})
test('Should not delete the staff with invalid jwt token', async() => {
    await request(app).delete('/api/staff/me')
    .set('Authorization',`Bearer ${'dhgsakdajd'}`)
    .send().expect(404)
})