// import chai from 'chai';
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import { it } from 'mocha';
import app from '../server';

chai.use(chaiHttp);


describe("Students", () => {
    describe("GET /", () => {
        //Tests to get all student records
        it('Should get all the students records', (done) => {
            chai.request(app)
            .get('/')
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('Object');
                done();
            })
        });
        //Test to get single student record
        it('Should get a single student', (done) => {
            const id = 1;
            chai.request(app)
            .get(`/${id}`)
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            })
        });
        //Tests not to get student record
        it('Should not get student record', (done) => {
            const id = 5
            chai.request(app)
            .get(`/${id}`)
            .end((error, res) => {
                expect(res).to.have.status(404);
                //expect(res.body).to.be.an('object');
                done();
            })
        });
    })
})