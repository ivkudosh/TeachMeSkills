import { expect } from "@jest/globals";
import superagent, { Response } from "superagent";
import { Random } from "../src/randoms";

type CreatedUser = { name: string; job: string };

const baseURL = 'https://reqres.in/api';

let response: Response;
let createdUserId: number;
let updatedUserName: string;
let updatedUserJob: string;

const createdUser: CreatedUser = {
    name: `${Random.getRandomName()}`,
    job: `${Random.getRandomJob()}`
};

const userRandom = Random.getRandomInRange(12);
const pageRandom = Random.getRandomInRange(2);
const invalidUserId = Random.getRandomInRange(100, 13);

describe("Test HTTP methods", () => {
    beforeAll(async () => {
        const res = await superagent.post(`${baseURL}/users`).send({ name: `${Random.getRandomName()}`, job: `${Random.getRandomJob()}` });
        createdUserId = res.body.id;
        updatedUserName = Random.getRandomName();
        updatedUserJob = Random.getRandomJob();

    });

    test(`Should correctly GET list of users`, async () => {
        try {
            response = await superagent.get(`${baseURL}/users?page=${pageRandom}`);
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.page).toBe(pageRandom);
    });

    test(`Should correctly GET user №: ${userRandom}`, async () => {
        try {
            response = await superagent.get(`${baseURL}/users/${userRandom}`);
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(userRandom);
    });

    test(`Should correctly GET error № 404 if user not found`, async () => {
        try {
            await superagent.get(`${baseURL}/users/${invalidUserId}`);
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });

    test(`Should correctly POST create user`, async () => {
        try {
            response = await superagent.post(`${baseURL}/users`).send(createdUser);
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(createdUser.name);
        expect(response.body.job).toBe(createdUser.job);
    });

    test(`Should correctly PUT update user by id`, async () => {
        try {
            response = await superagent.put(`${baseURL}/users/${createdUserId}`).send({ name: updatedUserName, job: updatedUserJob });
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updatedUserName);
        expect(response.body.job).toBe(updatedUserJob);
    });

    test(`Should correctly PATCH update user name by id`, async () => {
        try {
            response = await superagent.patch(`${baseURL}/users/${createdUserId}`).send({ name: updatedUserName });
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updatedUserName);
    });

    test(`Should correctly DELETE user by id`, async () => {
        try {
            response = await superagent.delete(`${baseURL}/users/${createdUserId}`);
        } catch (error: any) {
            throw new Error(error.message);
        }
        expect(response.status).toBe(204);
        expect(response.body.id).toBeUndefined();
    });

    test(`Should display error 404 after create user with PUT method`, async () => {
        try {
            await superagent.put(`${baseURL}/users`).send(createdUser);
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });

    test(`Should display error 404 after GET unknown resource`, async () => {
        try {
            await superagent.get(`${baseURL}/unknown/${Random.getRandomName()}`);
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });

    test(`Should display error 404 after GET list of users with wrong url`, async () => {
        try {
            await superagent.get(`${baseURL}${Random.getRandomName()}/users?page=${pageRandom}`);
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });

});