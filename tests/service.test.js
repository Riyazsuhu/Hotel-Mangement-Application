const request = require('supertest')
const Service = require('../src/models/staff/service')
const app = require('../src/app')
const { demoService, demoService1, demoService2, demoService3, demoService4 } = require('./fixtures/db')

test('should service added by staff verify using jwt token', async () => {
    request(app).post('/api/service/add')
    .send(demoService1).expect(201)
})

