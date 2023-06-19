require('dotenv').config();
const request = require('supertest');
const app = require('../server.js');

describe('GET', () => {
    it('should return all todos', async () => {
        const todos = await request(app)
            .get('/api/todos')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-type', /json/)
        expect(todos.statusCode).toBe(200);
    });
});

describe('POST', () => {
    let createdTodo = null;
    it('should return created todo', async () => {
        createdTodo = await request(app)
            .post('/api/todos/create')
            .send({
                title: 'jest title test',
                content: 'jest content test',
                user_id: 1
            })
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-type', /json/)
        expect(createdTodo._body).toEqual({
            id: createdTodo._body.id,
            title: 'jest title test',
            content: 'jest content test',
            user_id: 1
        });
    });
});

describe('PUT', () => {
    let updatedTodo = null;
    let allTodos = null;
    it('should return updated todo', async () => {

        allTodos = await request(app)
            .get('/api/todos')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-type', /json/)
            
        updatedTodo = await request(app)
            .put('/api/todos/update/' + allTodos._body[allTodos._body.length-1].id)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .send({
                title: 'PUT jest title',
                content: 'PUT jest content',
                user_id: 1
            })
            .set('Access', 'application/json')
            .expect('Content-type', /json/);
        expect(updatedTodo._body)
            .toEqual({
                id: allTodos._body[allTodos._body.length-1].id,
                title: 'jest title test',
                content: 'jest content test',
                user_id: allTodos._body[allTodos._body.length-1].user_id
            })
        expect(updatedTodo._body).toHaveProperty('user_id');
        
    });
});

describe('DELETE', () => {
    let deleteResult = null;
    let allTodos = null;
    it('should return delete result', async () => {
        allTodos = await request(app)
            .get('/api/todos')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-type', /json/)
        deleteResult = await request(app)
            .delete('/api/todos/delete/' + allTodos._body[allTodos._body.length-1].id)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect(200)
    });
});