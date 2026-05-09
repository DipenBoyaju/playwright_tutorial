import { expect, test } from "allure-playwright";

var userId;
test("Get users", async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  console.log(await response.json());
  expect(response.status()).toBe(200);
})

test("Create user", async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: { "name": "john", "job": "trainer" }, headers: {
      "Accept": "application/json"
    }
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);
  const res = await response.json();
  userId = res.id;
  console.log(userId)
})

test("Update user", async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/' + userId, {
    data: { "name": "john", "job": "engineer" }, headers: {
      "Accept": "application/json"
    }
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);
})

test("Delete user", async ({ request }) => {
  const response = await response.delete('https://reqres.in/api/users/' + userId);
  expect(response.status()).toBe(204);
})